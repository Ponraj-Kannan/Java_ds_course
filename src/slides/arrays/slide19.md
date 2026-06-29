<Slide2 topic="2D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Matrix <span class="highlight">Addition</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">A</span> = {<span style="color:#b45309;">1</span>,<span style="color:#b45309;">2</span>},{<span style="color:#b45309;">3</span>,<span style="color:#b45309;">4</span>};<br>
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">B</span> = {<span style="color:#b45309;">5</span>,<span style="color:#b45309;">6</span>},{<span style="color:#b45309;">7</span>,<span style="color:#b45309;">8</span>};<br>
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">C</span> = <span style="color:#ef5050;">new</span> <span style="color:#0e6ead;">int</span>[<span style="color:#b45309;">2</span>][<span style="color:#b45309;">2</span>];<br>
    <br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#b45309;">2</span>; <span style="color:#0e6ead;">i</span>++)<br>
    <span style="padding-left:14px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">j</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">j</span> &lt; <span style="color:#b45309;">2</span>; <span style="color:#0e6ead;">j</span>++)</span>
    <span style="padding-left:28px;display:block;"><span style="color:#0e6ead;">C</span>[<span style="color:#0e6ead;">i</span>][<span style="color:#0e6ead;">j</span>] = <span style="color:#0e6ead;">A</span>[<span style="color:#0e6ead;">i</span>][<span style="color:#0e6ead;">j</span>] + <span style="color:#0e6ead;">B</span>[<span style="color:#0e6ead;">i</span>][<span style="color:#0e6ead;">j</span>];</span>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Both matrices must have the <strong>same size</strong> — add cell-by-cell.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Visualization</div>

  <div v-after style="display:flex;gap:10px;align-items:center;justify-content:center;flex-wrap:wrap;">
    <div class="mtx" style="grid-template-columns: repeat(2, 1fr);">
      <div class="mtx-cell">1</div><div class="mtx-cell">2</div>
      <div class="mtx-cell">3</div><div class="mtx-cell">4</div>
    </div>
    <div style="font-family:'Fira Code',monospace;font-weight:900;font-size:1.2rem;color:var(--orange);">+</div>
    <div class="mtx" style="grid-template-columns: repeat(2, 1fr);">
      <div class="mtx-cell">5</div><div class="mtx-cell">6</div>
      <div class="mtx-cell">7</div><div class="mtx-cell">8</div>
    </div>
    <div style="font-family:'Fira Code',monospace;font-weight:900;font-size:1.2rem;color:var(--orange);">=</div>
    <div class="mtx" style="grid-template-columns: repeat(2, 1fr);">
      <div class="mtx-cell done">6</div><div class="mtx-cell done">8</div>
      <div class="mtx-cell done">10</div><div class="mtx-cell done">12</div>
    </div>
  </div>

  <div v-click class="card card-green" style="margin-top:6px;">
    <div class="small-text"><strong>Cell-by-cell:</strong> 1+5=6, 2+6=8, 3+7=10, 4+8=12.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
