<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Creating</span> &amp; Initializing</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card" style="border:1px solid var(--blue);">
    <div class="slide-h3" style="color:var(--blue);">Step 1 — Declare</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">marks</span>;
    </div>
    <div class="small-text" style="margin-top:4px;">Just creates a reference. No slots yet.</div>
  </div>

  <div v-click class="card" style="border:1px solid var(--orange);">
    <div class="slide-h3" style="color:var(--orange);">Step 2 — Allocate</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">marks</span> = <span style="color:#ef5050;">new</span> <span style="color:#0e6ead;">int</span>[<span style="color:#b45309;">5</span>];
    </div>
    <div class="small-text" style="margin-top:4px;">Reserves 5 slots, all set to <span class="mono">0</span>.</div>
  </div>

  <div v-click class="card" style="border:1px solid var(--green);">
    <div class="slide-h3" style="color:var(--green);">Combined</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">marks</span> = <span style="color:#ef5050;">new</span> <span style="color:#0e6ead;">int</span>[<span style="color:#b45309;">5</span>];
    </div>
  </div>

  <div v-click class="card" style="border:1px solid var(--red);">
    <div class="slide-h3" style="color:var(--red-dark);">Direct Initialization</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">marks</span> = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">30</span>, <span style="color:#b45309;">40</span>, <span style="color:#b45309;">50</span>};
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Before vs After Allocation</div>

  <div v-after>
    <div class="small-text" style="margin-bottom:4px;">After Step 2: <span class="mono">new int[5]</span></div>
    <div class="arr-strip-with-idx">
      <div class="arr-strip">
        <div class="arr-cell">0</div>
        <div class="arr-cell">0</div>
        <div class="arr-cell">0</div>
        <div class="arr-cell">0</div>
        <div class="arr-cell">0</div>
      </div>
      <div class="idx-row">
        <div>0</div><div>1</div><div>2</div><div>3</div><div>4</div>
      </div>
    </div>
  </div>

  <div v-click style="margin-top:6px;">
    <div class="small-text" style="margin-bottom:4px;">After direct init: <span class="mono">{10, 20, 30, 40, 50}</span></div>
    <div class="arr-strip-with-idx">
      <div class="arr-strip">
        <div class="arr-cell done">10</div>
        <div class="arr-cell done">20</div>
        <div class="arr-cell done">30</div>
        <div class="arr-cell done">40</div>
        <div class="arr-cell done">50</div>
      </div>
      <div class="idx-row">
        <div>0</div><div>1</div><div>2</div><div>3</div><div>4</div>
      </div>
    </div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Direct initialization is the cleanest — declaration + size + values in one line.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
