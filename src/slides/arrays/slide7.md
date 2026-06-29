<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Accessing</span> Array Elements</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Read any element with the syntax <span class="mono">arrayName[index]</span>. The index starts at <strong>0</strong>.
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">marks</span> = {<span style="color:#b45309;">90</span>, <span style="color:#b45309;">85</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>, <span style="color:#b45309;">88</span>};<br>
    <br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">marks</span>[<span style="color:#b45309;">0</span>]);  <span style="color:#6b7280;">// 90</span><br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">marks</span>[<span style="color:#b45309;">2</span>]);  <span style="color:#6b7280;">// 78</span><br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">marks</span>[<span style="color:#b45309;">4</span>]);  <span style="color:#6b7280;">// 88</span>
  </div>

  <div v-click class="callout callout-danger" style="font-size:.7rem;">
    <div><span class="mono">marks[5]</span> throws <strong>ArrayIndexOutOfBoundsException</strong> — last valid index is 4.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Trace: marks[2]</div>

  <div v-after class="arr-strip-with-idx">
    <div class="arr-strip">
      <div class="arr-cell">90</div>
      <div class="arr-cell">85</div>
      <div class="arr-cell hl">78</div>
      <div class="arr-cell">92</div>
      <div class="arr-cell">88</div>
    </div>
    <div class="idx-row">
      <div>0</div><div>1</div><div><span class="ptr">2</span></div><div>3</div><div>4</div>
    </div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">Trace: marks[4]</div>

  <div v-after class="arr-strip-with-idx">
    <div class="arr-strip">
      <div class="arr-cell">90</div>
      <div class="arr-cell">85</div>
      <div class="arr-cell">78</div>
      <div class="arr-cell">92</div>
      <div class="arr-cell hl">88</div>
    </div>
    <div class="idx-row">
      <div>0</div><div>1</div><div>2</div><div>3</div><div><span class="ptr">4</span></div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Random access cost is <strong>O(1)</strong> — same time whether you fetch index 0 or index 10000.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
