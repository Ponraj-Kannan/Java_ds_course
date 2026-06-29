<Slide2 topic="2D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">2D Arrays</span> — Tables &amp; Matrices</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">2D array</strong> stores values in <strong style="color:var(--green);">rows and columns</strong> — like a spreadsheet or a chess board.
    </div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Real-world examples</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>Marks of <strong>5 students</strong> across <strong>3 subjects</strong></li>
      <li>Pixels of an image (rows &times; cols)</li>
      <li>Game board (tic-tac-toe, chess)</li>
      <li>Mathematical matrices</li>
    </ul>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Think of it as an <strong>array of arrays</strong> — each row is itself a 1D array.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">3 &times; 3 Matrix Visualization</div>

  <div v-after class="mtx" style="grid-template-columns: repeat(4, 1fr);">
    <div class="mtx-cell head"></div>
    <div class="mtx-cell head">col0</div>
    <div class="mtx-cell head">col1</div>
    <div class="mtx-cell head">col2</div>
    <div class="mtx-cell head">row0</div>
    <div class="mtx-cell">1</div><div class="mtx-cell">2</div><div class="mtx-cell">3</div>
    <div class="mtx-cell head">row1</div>
    <div class="mtx-cell">4</div><div class="mtx-cell">5</div><div class="mtx-cell">6</div>
    <div class="mtx-cell head">row2</div>
    <div class="mtx-cell">7</div><div class="mtx-cell">8</div><div class="mtx-cell">9</div>
  </div>
  
  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Two indices: <span class="mono">matrix[row][col]</span>. <span class="mono">matrix[1][2]</span> = 6.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
