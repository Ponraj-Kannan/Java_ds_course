<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Traversing — <span class="highlight">for</span> Loop</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">marks</span> = {<span style="color:#b45309;">90</span>, <span style="color:#b45309;">85</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>, <span style="color:#b45309;">88</span>};<br>
    <br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#0e6ead;">marks</span>.<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">i</span>++)<br>
    {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">marks</span>[<span style="color:#0e6ead;">i</span>]);</span>
    }
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">When to use it</div>
    <ul class="body-text" style="margin:4px 0 0 16px;padding:0;">
      <li>You need the <strong>index</strong> inside the loop</li>
      <li>You want to <strong>modify</strong> elements</li>
      <li>You want to traverse <strong>backwards</strong></li>
    </ul>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Loop Trace</div>

  <table class="trace-table">
    <thead v-click><tr><th>i</th><th>marks[i]</th><th>Output</th></tr></thead>
    <tbody>
      <tr v-click><td>0</td><td>90</td><td>90</td></tr>
      <tr v-click><td>1</td><td>85</td><td>85</td></tr>
      <tr v-click><td>2</td><td>78</td><td>78</td></tr>
      <tr v-click><td>3</td><td>92</td><td>92</td></tr>
      <tr v-click><td>4</td><td>88</td><td>88</td></tr>
      <tr v-click class="hl"><td>5</td><td>—</td><td>Loop exits</td></tr>
    </tbody>
  </table>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div><span class="mono">i &lt; marks.length</span> is safer than hard-coding <span class="mono">i &lt; 5</span> — works after the size changes.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
