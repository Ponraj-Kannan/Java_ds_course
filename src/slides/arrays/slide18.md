<Slide2 topic="2D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Traversing — <span class="highlight">Nested</span> for Loop</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">m</span> = {<br>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>, <span style="color:#b45309;">3</span>},</span>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>, <span style="color:#b45309;">6</span>},</span>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">7</span>, <span style="color:#b45309;">8</span>, <span style="color:#b45309;">9</span>}</span>
    };<br>
    <br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#0e6ead;">m</span>.<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">i</span>++) {<br>
    <span style="padding-left:14px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">j</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">j</span> &lt; <span style="color:#0e6ead;">m</span>[<span style="color:#0e6ead;">i</span>].<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">j</span>++)</span>
    <span style="padding-left:28px;display:block;"><span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">print</span>(<span style="color:#0e6ead;">m</span>[<span style="color:#0e6ead;">i</span>][<span style="color:#0e6ead;">j</span>] + <span style="color:#319795;">" "</span>);</span>
    <span style="padding-left:14px;display:block;"><span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>();</span>
    }
  </div>

  <div v-click class="output-box">
    1 2 3<br>
    4 5 6<br>
    7 8 9
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">How it scans</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li><strong>Outer loop (i)</strong> picks the row</li>
      <li><strong>Inner loop (j)</strong> walks every column in that row</li>
      <li>For a 3&times;3 matrix the body runs <strong>9</strong> times</li>
    </ul>
  </div>

  <div v-click class="section-label">Loop trace (first 5 steps)</div>

  <table v-after class="trace-table">
    <thead><tr><th>i</th><th>j</th><th>m[i][j]</th></tr></thead>
    <tbody>
      <tr><td>0</td><td>0</td><td>1</td></tr>
      <tr><td>0</td><td>1</td><td>2</td></tr>
      <tr><td>0</td><td>2</td><td>3</td></tr>
      <tr class="hl"><td>1</td><td>0</td><td>4</td></tr>
      <tr><td>1</td><td>1</td><td>5</td></tr>
    </tbody>
  </table>
</div>

</div>

  </template>
</Slide2>
