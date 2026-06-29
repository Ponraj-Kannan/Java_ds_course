<Slide2 topic="2D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Row Sum</span>, <span class="highlight">Column Sum</span> &amp; <span class="highlight">Transpose</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Row &amp; Column Sums</div>

  <div v-after class="code-block">
    <span style="color:#6b7280;">// row sum (each row total)</span><br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#b45309;">3</span>; <span style="color:#0e6ead;">i</span>++) {<br>
    <span style="padding-left:14px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">s</span> = <span style="color:#b45309;">0</span>;</span>
    <span style="padding-left:14px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">j</span>=<span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">j</span>&lt;<span style="color:#b45309;">3</span>; <span style="color:#0e6ead;">j</span>++) <span style="color:#0e6ead;">s</span> += <span style="color:#0e6ead;">m</span>[<span style="color:#0e6ead;">i</span>][<span style="color:#0e6ead;">j</span>];</span>
    <span style="padding-left:14px;display:block;"><span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">s</span>);</span>
    }
  </div>

  <div v-click class="output-box">
    Row sums: 6, 15, 24<br>
    Col sums: 12, 15, 18
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>For column sum, just swap the loops — outer becomes <span class="mono">j</span>, inner becomes <span class="mono">i</span>.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Transpose: rows ↔ columns</div>

  <div v-after style="display:flex;gap:10px;align-items:center;justify-content:center;">
    <div class="flex-col" style="gap:2px;">
      <div class="small-text">Original</div>
      <div class="mtx" style="grid-template-columns: repeat(3, 1fr);">
        <div class="mtx-cell">1</div><div class="mtx-cell">2</div><div class="mtx-cell">3</div>
        <div class="mtx-cell">4</div><div class="mtx-cell">5</div><div class="mtx-cell">6</div>
        <div class="mtx-cell">7</div><div class="mtx-cell">8</div><div class="mtx-cell">9</div>
      </div>
    </div>
    <div style="font-size:1.4rem;color:var(--orange);">&rarr;</div>
    <div class="flex-col" style="gap:2px;">
      <div class="small-text">Transposed</div>
      <div class="mtx" style="grid-template-columns: repeat(3, 1fr);">
        <div class="mtx-cell done">1</div><div class="mtx-cell done">4</div><div class="mtx-cell done">7</div>
        <div class="mtx-cell done">2</div><div class="mtx-cell done">5</div><div class="mtx-cell done">8</div>
        <div class="mtx-cell done">3</div><div class="mtx-cell done">6</div><div class="mtx-cell done">9</div>
      </div>
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span>=<span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span>&lt;<span style="color:#b45309;">3</span>; <span style="color:#0e6ead;">i</span>++)<br>
    <span style="padding-left:12px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">j</span>=<span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">j</span>&lt;<span style="color:#b45309;">3</span>; <span style="color:#0e6ead;">j</span>++)</span>
    <span style="padding-left:24px;display:block;"><span style="color:#0e6ead;">T</span>[<span style="color:#0e6ead;">j</span>][<span style="color:#0e6ead;">i</span>] = <span style="color:#0e6ead;">m</span>[<span style="color:#0e6ead;">i</span>][<span style="color:#0e6ead;">j</span>];</span>
  </div>
</div>

</div>

  </template>
</Slide2>
