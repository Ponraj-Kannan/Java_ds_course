<Slide2 topic="1D vs 2D Arrays — Comparison">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">1D</span> vs <span class="highlight">2D</span> Arrays</div>

<table class="cmp-table">
  <thead>
    <tr><th>Feature</th><th>1D Array</th><th>2D Array</th></tr>
  </thead>
  <tbody>
    <tr v-click><td><strong>Structure</strong></td><td>Single row of values</td><td>Rows and columns (grid)</td></tr>
    <tr v-click><td><strong>Dimensions</strong></td><td>One <span class="mono">[ ]</span></td><td>Two <span class="mono">[ ][ ]</span></td></tr>
    <tr v-click><td><strong>Memory Layout</strong></td><td>Single contiguous block</td><td>Array of arrays (row-major)</td></tr>
    <tr v-click><td><strong>Access</strong></td><td class="mono">arr[i]</td><td class="mono">arr[i][j]</td></tr>
    <tr v-click><td><strong>Traversal</strong></td><td>Single for loop</td><td>Nested for loops</td></tr>
    <tr v-click><td><strong>Use Cases</strong></td><td>List of marks, scores, names</td><td>Matrices, grids, tables, images</td></tr>
  </tbody>
</table>

<div class="g2" style="gap:10px;margin-top:12px;">
  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Use 1D when</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Data is a flat list</li>
      <li>Order matters along one axis only</li>
      <li>You loop linearly over items</li>
    </ul>
  </div>
  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Use 2D when</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Data has rows AND columns</li>
      <li>You need a grid or table</li>
      <li>Examples: marksheets, chess boards, matrices</li>
    </ul>
  </div>
</div>

  </template>
</Slide2>
