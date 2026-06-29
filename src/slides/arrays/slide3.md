<Slide2 topic="Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:12px;">Characteristics of <span class="highlight">Arrays</span></div>

<div class="g3" style="gap:10px;">

  <div v-click class="card card-red" style="text-align:center;">
    <div class="icon-circle ic-red" style="margin:0 auto 6px;">F</div>
    <div class="slide-h3" style="color:var(--red-dark);">Fixed Size</div>
    <div class="small-text" style="margin-top:4px;">Size set at creation. Cannot grow or shrink later.</div>
  </div>

  <div v-click class="card card-blue" style="text-align:center;">
    <div class="icon-circle ic-blue" style="margin:0 auto 6px;">S</div>
    <div class="slide-h3" style="color:var(--blue);">Same Type</div>
    <div class="small-text" style="margin-top:4px;">All elements share the same data type.</div>
  </div>

  <div v-click class="card card-green" style="text-align:center;">
    <div class="icon-circle ic-green" style="margin:0 auto 6px;">C</div>
    <div class="slide-h3" style="color:var(--green);">Contiguous</div>
    <div class="small-text" style="margin-top:4px;">Elements live in adjacent memory locations.</div>
  </div>

  <div v-click class="card card-orange" style="text-align:center;">
    <div class="icon-circle ic-orange" style="margin:0 auto 6px;">I</div>
    <div class="slide-h3" style="color:var(--orange);">Indexed</div>
    <div class="small-text" style="margin-top:4px;">Each slot has a numeric position.</div>
  </div>

  <div v-click class="card card-purple" style="text-align:center;">
    <div class="icon-circle ic-purple" style="margin:0 auto 6px;">R</div>
    <div class="slide-h3" style="color:var(--purple);">Random Access</div>
    <div class="small-text" style="margin-top:4px;"><span class="mono">arr[i]</span> takes the same time for any <span class="mono">i</span>.</div>
  </div>

  <div v-click class="card card-teal" style="text-align:center;">
    <div class="icon-circle ic-teal" style="margin:0 auto 6px;">0</div>
    <div class="slide-h3" style="color:var(--teal);">Zero-Based</div>
    <div class="small-text" style="margin-top:4px;">First element is at index <span class="mono">0</span>, not 1.</div>
  </div>

</div>

<div v-click class="callout callout-info" style="margin-top:12px;">
  <div><strong>Address formula:</strong> <span class="mono">addr(arr[i]) = base + i &times; size_of(type)</span> — that's why random access is so fast.</div>
</div>

  </template>
</Slide2>
