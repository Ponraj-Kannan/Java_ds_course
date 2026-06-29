/**
 * /api/zoho-auth
 *
 * Serverless handler for the Zoho OAuth2 authorization-code exchange.
 * Receives the `code` + `redirect_uri` from the frontend popup, exchanges
 * them for an access token via Zoho Accounts, then fetches the user's
 * profile from the Zoho UserInfo endpoint.
 *
 * The client secret never leaves the server.
 *
 * Environment variables required:
 *   ZOHO_CLIENT_ID      – Client ID from https://api-console.zoho.com/
 *   ZOHO_CLIENT_SECRET  – Client Secret from https://api-console.zoho.com/
 *
 * POST /api/zoho-auth
 * Body: { code: string, redirect_uri: string }
 * Returns: { email, name, picture }  on success
 *          { error: string }          on failure
 */

// Load .env relative to THIS file's location (api/../.env = project root)
// Never use process.cwd() here — Slidev changes CWD to src/ which makes it wrong.
import { config as dotenvConfig } from 'dotenv'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __filename = fileURLToPath(import.meta.url)
const __dirname  = path.dirname(__filename)

// api/zoho-auth.js → api/ → project root
dotenvConfig({ path: path.resolve(__dirname, '..', '.env') })

export default async function handler(req, res) {
  // ── CORS headers ─────────────────────────────────────────────────────────
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' })
  }

  // ── Resolve env vars at request time (never cached from stale module load) ─
  const clientId     = process.env.ZOHO_CLIENT_ID
  const clientSecret = process.env.ZOHO_CLIENT_SECRET
  const ZOHO_ACCOUNTS_DOMAIN = process.env.ZOHO_ACCOUNTS_DOMAIN || 'https://accounts.zoho.com'

  console.log('[zoho-auth] Client ID loaded:', clientId ? clientId : 'MISSING')
  console.log('[zoho-auth] Client Secret loaded:', clientSecret ? 'YES (' + clientSecret.length + ' chars)' : 'MISSING')
  console.log('[zoho-auth] Redirect URI received:', req.body?.redirect_uri || '(not yet parsed)')

  if (!clientId || !clientSecret) {
    console.error('[zoho-auth] Missing ZOHO_CLIENT_ID or ZOHO_CLIENT_SECRET environment variables')
    return res.status(500).json({
      error: 'Zoho authentication is not configured on this server. Please contact the administrator.'
    })
  }

  // ── Parse request body ───────────────────────────────────────────────────
  const { code, redirect_uri } = req.body || {}

  if (!code || typeof code !== 'string') {
    return res.status(400).json({ error: 'Bad Request: Missing authorization code.' })
  }

  if (!redirect_uri || typeof redirect_uri !== 'string') {
    return res.status(400).json({ error: 'Bad Request: Missing redirect_uri.' })
  }

  // ── Step 1: Exchange authorization code for access token ─────────────────
  let tokenData
  try {
    const tokenParams = new URLSearchParams({
      grant_type: 'authorization_code',
      client_id: clientId,
      client_secret: clientSecret,
      redirect_uri: redirect_uri,
      code: code,
    })

    const tokenRes = await fetch(`${ZOHO_ACCOUNTS_DOMAIN}/oauth/v2/token`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: tokenParams.toString(),
    })

    tokenData = await tokenRes.json()

    if (!tokenRes.ok || tokenData.error) {
      console.error('[zoho-auth] Token exchange failed:', tokenData)
      return res.status(401).json({
        error: `Zoho token exchange failed: ${tokenData.error || tokenData.message || 'Unknown error'}`
      })
    }
  } catch (err) {
    console.error('[zoho-auth] Network error during token exchange:', err)
    return res.status(502).json({ error: 'Could not reach Zoho Accounts server. Please try again.' })
  }

  const accessToken = tokenData.access_token
  if (!accessToken) {
    console.error('[zoho-auth] No access_token in Zoho response:', tokenData)
    return res.status(401).json({ error: 'Zoho did not return an access token.' })
  }

  // ── Step 2: Fetch user profile from Zoho UserInfo endpoint ───────────────
  let userInfo
  try {
    const userRes = await fetch(`${ZOHO_ACCOUNTS_DOMAIN}/oauth/user/info`, {
      headers: { Authorization: `Zoho-oauthtoken ${accessToken}` }
    })

    if (!userRes.ok) {
      const errText = await userRes.text()
      console.error('[zoho-auth] UserInfo fetch failed:', userRes.status, errText)
      return res.status(401).json({ error: 'Failed to fetch user profile from Zoho.' })
    }

    userInfo = await userRes.json()
  } catch (err) {
    console.error('[zoho-auth] Network error fetching user info:', err)
    return res.status(502).json({ error: 'Could not retrieve Zoho user profile. Please try again.' })
  }

  // ── Step 3: Extract and validate user fields ─────────────────────────────
  // Zoho UserInfo response fields:
  //   Email, First_Name, Last_Name, Display_Name, ZPUID, etc.
  const email = (userInfo.Email || userInfo.email || '').trim().toLowerCase()
  const firstName = userInfo.First_Name || ''
  const lastName = userInfo.Last_Name || ''
  const displayName = userInfo.Display_Name || `${firstName} ${lastName}`.trim() || email
  // Zoho does not return a profile picture URL in the basic UserInfo response
  const picture = userInfo.profile_pic || userInfo.picture || ''

  if (!email) {
    console.error('[zoho-auth] Zoho UserInfo returned no email:', userInfo)
    return res.status(401).json({ error: 'Zoho account did not return a valid email address.' })
  }

  // ── Return sanitized user profile ────────────────────────────────────────
  return res.status(200).json({
    email,
    name: displayName,
    picture,
    provider: 'zoho'
  })
}
