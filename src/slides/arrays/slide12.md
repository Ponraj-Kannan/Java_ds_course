<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Operations — <span class="highlight">Minimum</span> &amp; <span class="highlight">Search</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Find Minimum</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">a</span> = {<span style="color:#b45309;">10</span>, <span style="color:#b45309;">45</span>, <span style="color:#b45309;">20</span>, <span style="color:#b45309;">7</span>, <span style="color:#b45309;">33</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">min</span> = <span style="color:#0e6ead;">a</span>[<span style="color:#b45309;">0</span>];<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">1</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#0e6ead;">a</span>.<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">i</span>++)<br>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">if</span>(<span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">i</span>] &lt; <span style="color:#0e6ead;">min</span>) <span style="color:#0e6ead;">min</span> = <span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">i</span>];</span>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">min</span>);
  </div>

  <div v-click class="output-box">7</div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>Mirror of the max-pattern — start with first element, then check if each next is smaller.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Linear Search</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">target</span> = <span style="color:#b45309;">20</span>;<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">pos</span> = -<span style="color:#b45309;">1</span>;<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt; <span style="color:#0e6ead;">a</span>.<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">i</span>++)<br>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">if</span>(<span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">i</span>] == <span style="color:#0e6ead;">target</span>) { <span style="color:#0e6ead;">pos</span> = <span style="color:#0e6ead;">i</span>; <span style="color:#ef5050;">break</span>; }</span>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">pos</span>);  <span style="color:#6b7280;">// 2</span>
  </div>

  <div v-click class="arr-strip-with-idx" style="margin-top:4px;">
    <div class="arr-strip">
      <div class="arr-cell">10</div>
      <div class="arr-cell">45</div>
      <div class="arr-cell hl">20</div>
      <div class="arr-cell">7</div>
      <div class="arr-cell">33</div>
    </div>
    <div class="idx-row"><div>0</div><div>1</div><div><span class="ptr">2</span></div><div>3</div><div>4</div></div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div><strong>Found.</strong> If the loop ends without a match, <span class="mono">pos</span> stays -1.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
