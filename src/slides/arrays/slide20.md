<Slide2 topic="2D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Matrix — <span class="highlight">Sum</span>, <span class="highlight">Largest</span>, <span class="highlight">Smallest</span></div>

<div class="g3" style="gap:10px;">

<div v-click class="card">
  <div class="slide-h3" style="color:var(--blue);">Sum of all</div>
  <div class="code-block" style="margin-top:6px;font-size:.65rem;">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">s</span> = <span style="color:#b45309;">0</span>;<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">row</span> : <span style="color:#0e6ead;">m</span>)<br>
    <span style="padding-left:12px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">v</span> : <span style="color:#0e6ead;">row</span>) <span style="color:#0e6ead;">s</span> += <span style="color:#0e6ead;">v</span>;</span>
  </div>
</div>

<div v-click class="card">
  <div class="slide-h3" style="color:var(--green);">Largest</div>
  <div class="code-block" style="margin-top:6px;font-size:.65rem;">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">mx</span> = <span style="color:#0e6ead;">m</span>[<span style="color:#b45309;">0</span>][<span style="color:#b45309;">0</span>];<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">row</span> : <span style="color:#0e6ead;">m</span>)<br>
    <span style="padding-left:12px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">v</span> : <span style="color:#0e6ead;">row</span>)</span>
    <span style="padding-left:24px;display:block;"><span style="color:#ef5050;">if</span>(<span style="color:#0e6ead;">v</span>&gt;<span style="color:#0e6ead;">mx</span>) <span style="color:#0e6ead;">mx</span>=<span style="color:#0e6ead;">v</span>;</span>
  </div>
</div>

<div v-click class="card">
  <div class="slide-h3" style="color:var(--red-dark);">Smallest</div>
  <div class="code-block" style="margin-top:6px;font-size:.65rem;">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">mn</span> = <span style="color:#0e6ead;">m</span>[<span style="color:#b45309;">0</span>][<span style="color:#b45309;">0</span>];<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">row</span> : <span style="color:#0e6ead;">m</span>)<br>
    <span style="padding-left:12px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">v</span> : <span style="color:#0e6ead;">row</span>)</span>
    <span style="padding-left:24px;display:block;"><span style="color:#ef5050;">if</span>(<span style="color:#0e6ead;">v</span>&lt;<span style="color:#0e6ead;">mn</span>) <span style="color:#0e6ead;">mn</span>=<span style="color:#0e6ead;">v</span>;</span>
  </div>
</div>

</div>

<div v-click style="margin-top:10px;">
  <div class="section-label" style="margin-bottom:6px;">Example matrix</div>
  <div style="display:flex;gap:10px;align-items:center;">
    <div class="mtx" style="grid-template-columns: repeat(3, 1fr);">
      <div class="mtx-cell">1</div><div class="mtx-cell">2</div><div class="mtx-cell">3</div>
      <div class="mtx-cell">4</div><div class="mtx-cell">5</div><div class="mtx-cell">6</div>
      <div class="mtx-cell">7</div><div class="mtx-cell">8</div><div class="mtx-cell">9</div>
    </div>
    <div class="flex-col" style="gap:6px;">
      <div class="pill pill-blue">sum = 45</div>
      <div class="pill pill-green">max = 9</div>
      <div class="pill pill-red">min = 1</div>
    </div>
  </div>
</div>

  </template>
</Slide2>
