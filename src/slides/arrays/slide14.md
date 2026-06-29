<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Common <span class="highlight">Errors</span> in 1D Arrays</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card card-red">
    <div class="slide-h3" style="color:var(--red-dark);">ArrayIndexOutOfBoundsException</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">arr</span> = <span style="color:#ef5050;">new</span> <span style="color:#0e6ead;">int</span>[<span style="color:#b45309;">5</span>];<br>
      <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">arr</span>[<span style="color:#b45309;">10</span>]);<br>
      <span style="color:#c0392b;font-weight:700;">// Exception at runtime</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> Always check <span class="mono">i &lt; arr.length</span>.</div>
  </div>

  <div v-click class="card card-orange">
    <div class="slide-h3" style="color:var(--orange);">NullPointerException</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">arr</span>;          <span style="color:#6b7280;">// declared only</span><br>
      <span style="color:#0e6ead;">arr</span>[<span style="color:#b45309;">0</span>] = <span style="color:#b45309;">5</span>;       <span style="color:#6b7280;">// crash</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> Always <span class="mono">new int[size]</span> before use.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="card card-blue">
    <div class="slide-h3" style="color:var(--blue);">Wrong type assignment</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">arr</span> = <span style="color:#ef5050;">new</span> <span style="color:#0e6ead;">int</span>[<span style="color:#b45309;">3</span>];<br>
      <span style="color:#0e6ead;">arr</span>[<span style="color:#b45309;">0</span>] = <span style="color:#319795;">"hi"</span>;<br>
      <span style="color:#c0392b;font-weight:700;">// compile error</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> Match the value's type with the array's type.</div>
  </div>

  <div v-click class="card card-purple">
    <div class="slide-h3" style="color:var(--purple);">Off-by-one in loops</div>
    <div class="code-block" style="margin-top:6px;font-size:.7rem;">
      <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span> = <span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span> &lt;= <span style="color:#0e6ead;">arr</span>.<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">i</span>++)<br>
      <span style="color:#c0392b;font-weight:700;">// last i overshoots</span>
    </div>
    <div class="small-text" style="margin-top:4px;"><strong>Fix:</strong> use <span class="mono">&lt;</span> (strictly less than), not <span class="mono">&lt;=</span>.</div>
  </div>

  <div v-click class="callout callout-success" style="font-size:.7rem;">
    <div>Use <strong>for-each</strong> when reading only — it cannot go out of bounds.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
