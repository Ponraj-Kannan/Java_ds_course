<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Updating</span> Array Elements</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      Assigning to a slot <strong style="color:var(--green);">overwrites</strong> its current value with a new one.
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">marks</span> = {<span style="color:#b45309;">90</span>, <span style="color:#b45309;">85</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>, <span style="color:#b45309;">88</span>};<br>
    <br>
    <span style="color:#6b7280;">// retest: mark[1] increased to 95</span><br>
    <span style="color:#0e6ead;">marks</span>[<span style="color:#b45309;">1</span>] = <span style="color:#b45309;">95</span>;<br>
    <br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">marks</span>[<span style="color:#b45309;">1</span>]);  <span style="color:#6b7280;">// 95</span>
  </div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div>The old value is gone forever — there's no built-in undo. Save a copy first if you need it.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Before</div>
  <div v-after class="arr-strip-with-idx">
    <div class="arr-strip">
      <div class="arr-cell">90</div>
      <div class="arr-cell hl2">85</div>
      <div class="arr-cell">78</div>
      <div class="arr-cell">92</div>
      <div class="arr-cell">88</div>
    </div>
    <div class="idx-row"><div>0</div><div>1</div><div>2</div><div>3</div><div>4</div></div>
  </div>

  <div v-click class="section-label" style="margin-top:15px">After marks[1] = 95</div>
  <div v-after class="arr-strip-with-idx">
    <div class="arr-strip">
      <div class="arr-cell">90</div>
      <div class="arr-cell done">95</div>
      <div class="arr-cell">78</div>
      <div class="arr-cell">92</div>
      <div class="arr-cell">88</div>
    </div>
    <div class="idx-row"><div>0</div><div>1</div><div>2</div><div>3</div><div>4</div></div>
  </div>
</div>

</div>

  </template>
</Slide2>
