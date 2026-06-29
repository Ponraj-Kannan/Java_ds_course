<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Operations — <span class="highlight">Sum</span> &amp; <span class="highlight">Maximum</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Sum of Elements</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">a</span> = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">30</span>, <span style="color:#b45309;">40</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">sum</span> = <span style="color:#b45309;">0</span>;<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span> : <span style="color:#0e6ead;">a</span>) <span style="color:#0e6ead;">sum</span> += <span style="color:#0e6ead;">x</span>;<br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">sum</span>);
  </div>

  <div v-click class="output-box">100</div>

  <table v-click class="trace-table" style="margin-top:6px;">
    <thead><tr><th>Step</th><th>x</th><th>sum</th></tr></thead>
    <tbody>
      <tr><td>1</td><td>10</td><td>10</td></tr>
      <tr><td>2</td><td>20</td><td>30</td></tr>
      <tr><td>3</td><td>30</td><td>60</td></tr>
      <tr class="hl"><td>4</td><td>40</td><td>100</td></tr>
    </tbody>
  </table>
</div>

<div class="flex-col">
  <div v-click class="section-label">Find Maximum</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">a</span> = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">45</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">7</span>, <span style="color:#b45309;">33</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">max</span> = <span style="color:#0e6ead;">a</span>[<span style="color:#b45309;">0</span>];<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">1</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#0e6ead;">a</span>.<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">i</span>++)<br>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">if</span>(<span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">i</span>] &gt; <span style="color:#0e6ead;">max</span>) <span style="color:#0e6ead;">max</span> = <span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">i</span>];</span>
  </div>

  <div v-click class="output-box">max = 45</div>

  <table v-click class="trace-table" style="margin-top:6px;">
    <thead><tr><th>i</th><th>a[i]</th><th>max</th></tr></thead>
    <tbody>
      <tr><td>0</td><td>10</td><td>10</td></tr>
      <tr class="hl"><td>1</td><td>45</td><td>45</td></tr>
      <tr><td>2</td><td>20</td><td>45</td></tr>
      <tr><td>3</td><td>7</td><td>45</td></tr>
      <tr><td>4</td><td>33</td><td>45</td></tr>
    </tbody>
  </table>
</div>

</div>

  </template>
</Slide2>
