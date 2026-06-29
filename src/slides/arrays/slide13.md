<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;">Count Even/Odd &amp; <span class="highlight">Reverse</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Count Even &amp; Odd</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">a</span> = {<span style="color:#b45309;">3</span>, <span style="color:#b45309;">4</span>, <span style="color:#b45309;">7</span>, <span style="color:#b45309;">8</span>, <span style="color:#b45309;">10</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">e</span> = <span style="color:#b45309;">0</span>, <span style="color:#0e6ead;">o</span> = <span style="color:#b45309;">0</span>;<br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">x</span> : <span style="color:#0e6ead;">a</span>)<br>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">if</span>(<span style="color:#0e6ead;">x</span> % <span style="color:#b45309;">2</span> == <span style="color:#b45309;">0</span>) <span style="color:#0e6ead;">e</span>++;</span>
    <span style="padding-left:20px;display:block;"><span style="color:#ef5050;">else</span> <span style="color:#0e6ead;">o</span>++;</span>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">e</span> + <span style="color:#319795;">" "</span> + <span style="color:#0e6ead;">o</span>);
  </div>

  <div v-click class="output-box">3 2</div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Reverse In Place</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">a</span> = {<span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>, <span style="color:#b45309;">3</span>, <span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>};<br>
    <span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">l</span> = <span style="color:#b45309;">0</span>, <span style="color:#0e6ead;">r</span> = <span style="color:#0e6ead;">a</span>.<span style="color:#0e6ead;">length</span> - <span style="color:#b45309;">1</span>;<br>
    <span style="color:#ef5050;">while</span>(<span style="color:#0e6ead;">l</span> &lt; <span style="color:#0e6ead;">r</span>) {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">t</span> = <span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">l</span>];</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">l</span>++] = <span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">r</span>];</span>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">a</span>[<span style="color:#0e6ead;">r</span>--] = <span style="color:#0e6ead;">t</span>;</span>
    }
  </div>

  <div v-click class="arr-strip-with-idx" style="margin-top:4px;">
    <div class="small-text" style="margin-bottom:2px;">Before</div>
    <div class="arr-strip">
      <div class="arr-cell">1</div><div class="arr-cell">2</div><div class="arr-cell">3</div><div class="arr-cell">4</div><div class="arr-cell">5</div>
    </div>
  </div>

  <div v-click class="arr-strip-with-idx" style="margin-top:4px;">
    <div class="small-text" style="margin-bottom:2px;">After</div>
    <div class="arr-strip">
      <div class="arr-cell done">5</div><div class="arr-cell done">4</div><div class="arr-cell done">3</div><div class="arr-cell done">2</div><div class="arr-cell done">1</div>
    </div>
  </div>
</div>

</div>

  </template>
</Slide2>
