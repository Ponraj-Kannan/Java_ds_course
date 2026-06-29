<script setup>
import { computed, ref, watch, onMounted, onUnmounted, nextTick } from 'vue'
import { useNav, useSlideContext } from '@slidev/client'
import LoginOverlay from './components/LoginOverlay.vue'
import { authState, logout } from './auth'

const { currentPage, total, currentSlideRoute, go } = useNav()
const { $frontmatter } = useSlideContext()

const sessionLabel = computed(() => $frontmatter.value?.sessionLabel || 'Session')
const sessionTitle = computed(() => $frontmatter.value?.sessionTitle || $frontmatter.value?.title || 'Untitled Deck')

// ── Info Button state ──────────────────────────────────────────────────────
const showInfoPopover = ref(false)

/** Resolve the source file path for the current slide.
 *  Priority:
 *  1. currentSlideRoute.meta?.slide?.filepath  — resolved absolute path set by Slidev parser
 *  2. $frontmatter.src                         — raw `src:` value from the slide's frontmatter
 *  3. Friendly fallback message
 */
const currentFilePath = computed(() => {
  const routeMeta = currentSlideRoute.value?.meta?.slide
  if (routeMeta?.filepath) return routeMeta.filepath
  if ($frontmatter.value?.src) return $frontmatter.value.src
  return 'File path not available'
})

/** Split path into { prefix, highlight } where highlight = last 2 segments (Folder/file.md) */
const currentFilePathParts = computed(() => {
  const full = currentFilePath.value
  // Normalise separators
  const normalised = full.replace(/\\/g, '/')
  const parts = normalised.split('/')
  if (parts.length >= 2) {
    const highlight = parts.slice(-2).join('/')
    const prefix = parts.slice(0, -2).join('/') + '/'
    return { prefix, highlight }
  }
  return { prefix: '', highlight: normalised }
})

function toggleInfoPopover() {
  showInfoPopover.value = !showInfoPopover.value
}

function closeInfoPopover() {
  showInfoPopover.value = false
}

/** Only show slide file info on local dev — hide on Vercel / any production host */
const isLocalhost = typeof window !== 'undefined'
  && (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1')

async function handleLogout() {
  try {
    if (document.fullscreenElement || document.webkitFullscreenElement) {
      await (document.exitFullscreen?.() || document.webkitExitFullscreen?.())
    }
  } catch (e) {
    // ignore fullscreen errors
  } finally {
    logout()
  }
}

// ── Scroll Guard ───────────────────────────────────────────────────────────
const showScrollToast = ref(false)
const isScrolledToBottom = ref(true)   // default: allow navigation
const isScrollable = ref(false)         // true only when content overflows
let scrollEl = null
let toastTimer = null
let shakeActive = ref(false)
let mutationObserver = null
let pollTimer = null

/** Threshold in px — considered "at bottom" within this distance */
const BOTTOM_THRESHOLD = 40

function getScrollContainer() {
  // Slide2.vue uses .row-main, Slide.vue uses .col-sidebar
  // Try multiple selectors to find the scrollable container
  const candidates = [
    document.querySelector('.slidev-slide--current .row-main'),
    document.querySelector('.slidev-slide--current .col-sidebar'),
    document.querySelector('.row-main'),
    document.querySelector('.col-sidebar'),
  ]
  for (const el of candidates) {
    if (el) return el
  }
  return null
}

function checkScrollState() {
  const el = getScrollContainer()
  if (!el) {
    isScrollable.value = false
    isScrolledToBottom.value = true
    return
  }

  // Detach from old element and attach to new one if changed
  if (scrollEl !== el) {
    if (scrollEl) scrollEl.removeEventListener('scroll', onSlideScroll)
    el.addEventListener('scroll', onSlideScroll, { passive: true })
    scrollEl = el
  }

  const overflowY = el.scrollHeight - el.clientHeight
  const scrollable = overflowY > BOTTOM_THRESHOLD
  isScrollable.value = scrollable

  if (!scrollable) {
    isScrolledToBottom.value = true
    return
  }
  const distFromBottom = el.scrollHeight - el.scrollTop - el.clientHeight
  isScrolledToBottom.value = distFromBottom <= BOTTOM_THRESHOLD
}

function onSlideScroll() {
  checkScrollState()
  if (isScrolledToBottom.value && showScrollToast.value) {
    dismissToast()
  }
}

function showToast() {
  showScrollToast.value = true
  shakeActive.value = false
  nextTick(() => { shakeActive.value = true })
  setTimeout(() => { shakeActive.value = false }, 600)
  if (toastTimer) clearTimeout(toastTimer)
  toastTimer = setTimeout(dismissToast, 4000)
}

function dismissToast() {
  showScrollToast.value = false
  if (toastTimer) { clearTimeout(toastTimer); toastTimer = null }
}

function scrollToBottom() {
  const el = getScrollContainer()
  if (el) el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' })
  dismissToast()
}

/** Intercept forward navigation keyboard events before Slidev handles them */
function onKeyDown(e) {
  const forwardKeys = ['ArrowRight', 'Space', 'PageDown']
  if (!forwardKeys.includes(e.code)) return
  // Re-check scroll state fresh on each keypress
  checkScrollState()
  if (isScrollable.value && !isScrolledToBottom.value) {
    e.stopPropagation()
    e.preventDefault()
    showToast()
  }
}

/** Use MutationObserver to detect when the slide DOM changes */
function startObserver() {
  if (mutationObserver) mutationObserver.disconnect()
  mutationObserver = new MutationObserver(() => {
    // DOM changed — recheck scroll state
    checkScrollState()
  })
  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
    attributes: false,
  })
}

/** Poll scroll state every 500ms as a reliable fallback */
function startPolling() {
  if (pollTimer) clearInterval(pollTimer)
  pollTimer = setInterval(() => {
    checkScrollState()
  }, 500)
}

/** Re-check scroll state on every slide change */
watch(currentPage, async () => {
  dismissToast()
  isScrolledToBottom.value = true
  isScrollable.value = false
  if (scrollEl) {
    scrollEl.removeEventListener('scroll', onSlideScroll)
    scrollEl = null
  }
  await nextTick()
  // Multiple retries to catch Slidev's transition timing
  setTimeout(() => checkScrollState(), 200)
  setTimeout(() => checkScrollState(), 500)
  setTimeout(() => checkScrollState(), 1000)
})

onMounted(() => {
  // Use capture so we intercept before Slidev's own keydown handler
  window.addEventListener('keydown', onKeyDown, { capture: true })
  startObserver()
  startPolling()
  setTimeout(() => checkScrollState(), 500)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown, { capture: true })
  if (scrollEl) scrollEl.removeEventListener('scroll', onSlideScroll)
  if (mutationObserver) mutationObserver.disconnect()
  if (pollTimer) clearInterval(pollTimer)
  if (toastTimer) clearTimeout(toastTimer)
})
</script>

<template>
  <div>
    <!-- Authentication Overlay -->
    <LoginOverlay />

    <!-- ── Scroll Guard Toast ─────────────────────────────────────────────── -->
    <transition name="sg-toast">
      <div
        v-if="showScrollToast"
        class="sg-toast"
        :class="{ 'sg-toast--shake': shakeActive }"
        role="alert"
      >
        <div class="sg-toast-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2">
            <circle cx="12" cy="12" r="10"/>
            <line x1="12" y1="8" x2="12" y2="12"/>
            <line x1="12" y1="16" x2="12.01" y2="16" stroke-linecap="round" stroke-width="3"/>
          </svg>
        </div>
        <div class="sg-toast-body">
          <div class="sg-toast-title">Scroll down first!</div>
          <div class="sg-toast-msg">Please read the full slide before moving to the next one.</div>
        </div>
        <div class="sg-toast-actions">
          <button class="sg-btn-scroll" @click="scrollToBottom" title="Scroll to bottom">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
            Scroll down
          </button>
          <button class="sg-btn-close" @click="dismissToast" aria-label="Dismiss">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="12" height="12">
              <line x1="18" y1="6" x2="6" y2="18"/>
              <line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>
      </div>
    </transition>

    <!-- Slides Footer - only visible when logged in -->
    <div class="fp-footer" v-if="authState.isLoggedIn" >
      <div class="fp-right-section">
        <!-- Whitelist Admin Panel Button -->
        <button 
          v-if="authState.isAdmin" 
          @click="authState.showAdminPanel = !authState.showAdminPanel" 
          class="fp-admin-btn"
          :class="{ 'fp-admin-btn--active': authState.showAdminPanel }"
          title="Whitelist Administration"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fp-icon">
            <circle cx="12" cy="12" r="3"/>
            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
          </svg>
        </button>

        <!-- User profile and logout -->
        <div class="fp-user-badge" :title="`${authState.userName} (${authState.userEmail})`">
          <img v-if="authState.userPicture" :src="authState.userPicture" class="fp-avatar" referrerpolicy="no-referrer" />
          <div v-else class="fp-avatar-placeholder">
            {{ authState.userName ? authState.userName.charAt(0).toUpperCase() : authState.userEmail.charAt(0).toUpperCase() }}
          </div>
          <button @click="handleLogout" class="fp-logout-btn" title="Sign Out">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fp-logout-icon">
              <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
              <polyline points="16 17 21 12 16 7"/>
              <line x1="21" y1="12" x2="9" y2="12"/>
            </svg>
          </button>
        </div>

        <!-- Page numbers + Info Button -->
        <div class="fp-page-group">
          <div class="fp-page">
            <span class="fp-page-num">{{ currentPage }}</span>
            <span class="fp-page-sep">/</span>
            <span class="fp-page-total">{{ total }}</span>
          </div>

          <!-- Info Button (localhost only) -->
          <div v-if="isLocalhost" class="fp-info-wrap">
            <button
              class="fp-info-btn"
              :class="{ 'fp-info-btn--active': showInfoPopover }"
              @click.stop="toggleInfoPopover"
              title="Show current slide file path"
              aria-label="Slide file info"
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" class="fp-icon">
                <circle cx="12" cy="12" r="10"/>
                <line x1="12" y1="8" x2="12" y2="8" stroke-linecap="round" stroke-width="2.5"/>
                <line x1="12" y1="12" x2="12" y2="16"/>
              </svg>
            </button>

            <!-- File path popover -->
            <transition name="fp-pop">
              <div
                v-if="showInfoPopover"
                class="fp-info-popover"
                @click.stop
              >
                <div class="fp-info-popover-header">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="fp-info-popover-icon">
                    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                  <span>Current Slide File</span>
                </div>
                <div class="fp-info-popover-path">
                  <span class="fp-path-prefix">{{ currentFilePathParts.prefix }}</span><span class="fp-path-highlight">{{ currentFilePathParts.highlight }}</span>
                </div>
              </div>
            </transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.fp-footer {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  border-top: 1px solid #ef5050;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  padding: 0 1.5rem;
  z-index: 100;
  font-family: 'Inter', system-ui, sans-serif;
  width: 95%;
  margin-left: 2.5%;
  /* backdrop blur  */
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);

  background-color: #ffffff;
}

.fp-module {
  color: #475569;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Auth enhancements */
.fp-right-section {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.fp-admin-btn {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.fp-admin-btn:hover,
.fp-admin-btn--active {
  color: #ef5050;
  background: #ef505046;
}

.fp-icon {
  width: 16px;
  height: 16px;
}

.fp-user-badge {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #232323e9;
  border-radius: 20px;
  padding: 3px 4px 3px 3px;
}

.fp-avatar {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  object-fit: cover;
}

.fp-avatar-placeholder {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: #ff5900;
  color: white;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.fp-logout-btn {
  background: none;
  border: none;
  color: #94a3b8;
  cursor: pointer;
  padding: 2px;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.fp-logout-btn:hover {
  color: #ef5050;
}

.fp-logout-icon {
  width: 14px;
  height: 14px;
}

.fp-page-group {
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.fp-page {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: right;
  gap: 0.25rem;
  width: 70px;
}

.fp-page-num {
  color: #ef5050;
  font-weight: 700;
  font-size: 0.85rem;
}

.fp-page-sep {
  color: #334155;
  font-size: 0.75rem;
}

.fp-page-total {
  color: #475569;
  font-size: 0.8rem;
}

/* ── Info Button ─────────────────────────────────────────────────────────── */
.fp-info-wrap {
  position: relative;
  display: flex;
  align-items: center;
}

.fp-info-btn {
  background: none;
  border: none;
  color: #64748b;
  cursor: pointer;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  line-height: 0;
}

.fp-info-btn:hover,
.fp-info-btn--active {
  color: #ef5050;
  background: #ef505046;
}

/* ── File path popover (light mode) ─────────────────────────────────────── */
.fp-info-popover {
  position: absolute;
  bottom: calc(100% + 10px);
  right: 0;
  min-width: 280px;
  max-width: 480px;
  background: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
  padding: 10px 14px 12px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.10), 0 1px 4px rgba(0,0,0,0.06);
  z-index: 200;
}

.fp-info-popover-header {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #ef5050;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 8px;
  border-bottom: 1px solid #f1f5f9;
  padding-bottom: 6px;
}

.fp-info-popover-icon {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

.fp-info-popover-path {
  font-family: 'JetBrains Mono', 'Fira Code', 'Consolas', monospace;
  font-size: 0.72rem;
  word-break: break-all;
  line-height: 1.6;
  user-select: all;
}

.fp-path-prefix {
  color: #94a3b8;
}

.fp-path-highlight {
  color: #ef5050;
  font-weight: 700;
}

/* ── Popover transition ──────────────────────────────────────────────── */
.fp-pop-enter-active,
.fp-pop-leave-active {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.fp-pop-enter-from,
.fp-pop-leave-to {
  opacity: 0;
  transform: translateY(4px) scale(0.97);
}

/* ── Scroll Guard Toast ──────────────────────────────────────────────── */
.sg-toast {
  position: fixed;
  bottom: 56px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #1a1f36 0%, #2d3561 100%);
  border: 1px solid #ef5050;
  border-radius: 14px;
  padding: 12px 16px 12px 14px;
  box-shadow: 0 8px 32px rgba(239,80,80,0.25), 0 2px 8px rgba(0,0,0,0.3);
  min-width: 320px;
  max-width: 480px;
  pointer-events: all;
}

.sg-toast-icon {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  background: rgba(239,80,80,0.18);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ef5050;
}

.sg-toast-icon svg {
  width: 18px;
  height: 18px;
}

.sg-toast-body {
  flex: 1;
  min-width: 0;
}

.sg-toast-title {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.82rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 2px;
}

.sg-toast-msg {
  font-family: 'Inter', system-ui, sans-serif;
  font-size: 0.7rem;
  color: #94a3b8;
  line-height: 1.4;
}

.sg-toast-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
}

.sg-btn-scroll {
  display: flex;
  align-items: center;
  gap: 4px;
  background: #ef5050;
  color: #fff;
  border: none;
  border-radius: 8px;
  padding: 5px 10px;
  font-size: 0.7rem;
  font-weight: 600;
  cursor: pointer;
  font-family: 'Inter', system-ui, sans-serif;
  transition: background 0.2s ease, transform 0.15s ease;
  white-space: nowrap;
}

.sg-btn-scroll:hover {
  background: #c73c3c;
  transform: translateY(-1px);
}

.sg-btn-close {
  background: rgba(255,255,255,0.08);
  border: 1px solid rgba(255,255,255,0.12);
  color: #94a3b8;
  border-radius: 6px;
  padding: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.sg-btn-close:hover {
  background: rgba(239,80,80,0.2);
  color: #ef5050;
  border-color: #ef5050;
}

/* Toast entrance / exit animation */
.sg-toast-enter-active {
  transition: opacity 0.25s ease, transform 0.28s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.sg-toast-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}
.sg-toast-enter-from {
  opacity: 0;
  transform: translateX(-50%) translateY(16px) scale(0.92);
}
.sg-toast-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(8px) scale(0.96);
}

/* Shake animation when navigation is blocked */
@keyframes sg-shake {
  0%   { transform: translateX(-50%) translateX(0); }
  15%  { transform: translateX(-50%) translateX(-6px); }
  30%  { transform: translateX(-50%) translateX(6px); }
  45%  { transform: translateX(-50%) translateX(-4px); }
  60%  { transform: translateX(-50%) translateX(4px); }
  75%  { transform: translateX(-50%) translateX(-2px); }
  90%  { transform: translateX(-50%) translateX(2px); }
  100% { transform: translateX(-50%) translateX(0); }
}

.sg-toast--shake {
  animation: sg-shake 0.55s ease;
}
</style>