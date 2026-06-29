<Slide2 topic="2D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Accessing</span> 2D Elements</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Use <span class="mono">matrix[row][col]</span>. First index picks the <strong>row</strong>, second picks the <strong>column</strong>. Both start at 0.
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">m</span> = {<br>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>, <span style="color:#b45309;">3</span>},</span>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>, <span style="color:#b45309;">6</span>},</span>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">7</span>, <span style="color:#b45309;">8</span>, <span style="color:#b45309;">9</span>}</span>
    };<br>
    <br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">m</span>[<span style="color:#b45309;">0</span>][<span style="color:#b45309;">0</span>]);  <span style="color:#6b7280;">// 1</span><br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">m</span>[<span style="color:#b45309;">1</span>][<span style="color:#b45309;">2</span>]);  <span style="color:#6b7280;">// 6</span><br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">m</span>[<span style="color:#b45309;">2</span>][<span style="color:#b45309;">1</span>]);  <span style="color:#6b7280;">// 8</span>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Coordinate Visualization</div>

  <div v-after class="mtx" style="grid-template-columns: repeat(4, 1fr);">
    <div class="mtx-cell head"></div>
    <div class="mtx-cell head">[0]</div>
    <div class="mtx-cell head">[1]</div>
    <div class="mtx-cell head">[2]</div>
    <div class="mtx-cell head">[0]</div>
    <div class="mtx-cell">1</div><div class="mtx-cell">2</div><div class="mtx-cell">3</div>
    <div class="mtx-cell head">[1]</div>
    <div class="mtx-cell">4</div><div class="mtx-cell">5</div><div class="mtx-cell hl">6</div>
    <div class="mtx-cell head">[2]</div>
    <div class="mtx-cell">7</div><div class="mtx-cell hl2">8</div><div class="mtx-cell">9</div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div><span class="mono">m[1][2]</span> highlighted red = <strong>6</strong>.<br><span class="mono">m[2][1]</span> highlighted orange = <strong>8</strong>.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
