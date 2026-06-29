<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">1D Arrays</span> — Introduction &amp; Syntax</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">1D array</strong> is a single row of values — like a line of lockers, each holding one item.
    </div>
  </div>

  <div v-click class="section-label">Two Ways to Declare</div>

  <div v-after class="code-block">
    <span style="color:#6b7280;">// Java's preferred form</span><br>
    <span style="color:#0e6ead;">datatype</span>[] <span style="color:#0e6ead;">arrayName</span>;<br>
    <br>
    <span style="color:#6b7280;">// C-style — also legal</span><br>
    <span style="color:#0e6ead;">datatype</span> <span style="color:#0e6ead;">arrayName</span>[];
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">numbers</span>;<br>
    <span style="color:#0e6ead;">String</span>[] <span style="color:#0e6ead;">names</span>;<br>
    <span style="color:#0e6ead;">double</span>[] <span style="color:#0e6ead;">prices</span>;
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Single-Row Memory View</div>

  <div v-after class="arr-strip-with-idx">
    <div class="arr-strip">
      <div class="arr-cell empty">?</div>
      <div class="arr-cell empty">?</div>
      <div class="arr-cell empty">?</div>
      <div class="arr-cell empty">?</div>
      <div class="arr-cell empty">?</div>
    </div>
    <div class="idx-row">
      <div>0</div><div>1</div><div>2</div><div>3</div><div>4</div>
    </div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Declaration alone doesn't reserve memory yet — that happens with <span class="mono">new</span>.</div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Java default values</div>
    <div class="body-text">After <span class="mono">new int[5]</span>, every slot is initialized to <span class="mono">0</span>. For <span class="mono">String[]</span>, slots start as <span class="mono">null</span>.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
