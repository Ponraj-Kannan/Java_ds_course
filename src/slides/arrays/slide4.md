<Slide2 topic="Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Memory &amp; <span class="highlight">Index</span> Visualization</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Logical View</div>

  <div v-after class="arr-strip-with-idx">
    <div class="arr-strip">
      <div class="arr-cell">10</div>
      <div class="arr-cell">20</div>
      <div class="arr-cell">30</div>
      <div class="arr-cell">40</div>
      <div class="arr-cell">50</div>
    </div>
    <div class="idx-row">
      <div>0</div><div>1</div><div>2</div><div>3</div><div>4</div>
    </div>
  </div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div>For a 5-element array, valid indices are <span class="mono">0</span> to <span class="mono">4</span>. <span class="mono">arr[5]</span> is out of bounds!</div>
  </div>

  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Counting trick</div>
    <div class="body-text">Last index = length - 1. For 5 items: 5 - 1 = 4.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Physical Memory View</div>

  <div v-after class="mem-row">
    <div class="mem-box"><div class="mem-val">10</div><div class="mem-addr">100</div></div>
    <div class="mem-box"><div class="mem-val">20</div><div class="mem-addr">104</div></div>
    <div class="mem-box"><div class="mem-val">30</div><div class="mem-addr">108</div></div>
    <div class="mem-box"><div class="mem-val">40</div><div class="mem-addr">112</div></div>
    <div class="mem-box"><div class="mem-val">50</div><div class="mem-addr">116</div></div>
  </div>

  <div v-click class="card card-purple">
    <div class="small-text"><strong>4 bytes apart</strong> — each <span class="mono">int</span> occupies 4 bytes, so addresses advance by 4 each step.</div>
  </div>

  <div v-click class="card card-navy">
    <div class="small-text">
      <strong>arr[2] address</strong> = base 100 + 2 &times; 4 = <span class="mono">108</span> &rarr; value <span class="mono">30</span>.
    </div>
  </div>
</div>

</div>

  </template>
</Slide2>
