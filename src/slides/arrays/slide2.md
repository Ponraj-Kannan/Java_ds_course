<Slide2 topic="Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Why <span class="highlight">Arrays</span> — Real-World</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Top Reasons</div>

  <div v-after class="card" style="display:flex;gap:10px;align-items:center;">
    <div class="icon-circle ic-red">G</div>
    <div>
      <div class="slide-h3">Group related values</div>
      <div class="small-text">All marks of a student belong together.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;">
    <div class="icon-circle ic-blue">L</div>
    <div>
      <div class="slide-h3">Loop through values</div>
      <div class="small-text">One <span class="mono">for</span> loop processes all elements.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;">
    <div class="icon-circle ic-green">F</div>
    <div>
      <div class="slide-h3">Fast random access</div>
      <div class="small-text">Reach element #500 in one step using its index.</div>
    </div>
  </div>

  <div v-click class="card" style="display:flex;gap:10px;align-items:center;">
    <div class="icon-circle ic-orange">M</div>
    <div>
      <div class="slide-h3">Model the real world</div>
      <div class="small-text">Marks, sales, attendance, scores — all are lists.</div>
    </div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Real-World Examples</div>

  <div v-after class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Student Marks</div>
    <div class="body-text">Five marks for one student — one array of 5 ints.</div>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">Monthly Sales</div>
    <div class="body-text">12 monthly totals — one array of 12 floats.</div>
  </div>

  <div v-click class="card card-green">
    <div class="slide-h3" style="color:var(--green);">Attendance Sheet</div>
    <div class="body-text">365 daily values — one array of 365 booleans.</div>
  </div>

  <div v-click class="card card-purple">
    <div class="slide-h3" style="color:var(--purple);">Game High Scores</div>
    <div class="body-text">Top 10 scores — one array of 10 ints.</div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Whenever you'd write <span class="mono">var1, var2, var3 ...</span> — reach for an array.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
