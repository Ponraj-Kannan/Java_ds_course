<Slide2 topic="2D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Declaring</span> &amp; Creating 2D Arrays</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="section-label">Syntax</div>

  <div v-after class="code-block" style="font-size:.78rem;line-height:2;">
    <span style="color:#0e6ead;">datatype</span>[][] <span style="color:#0e6ead;">arrayName</span>;
  </div>

  <div v-click class="code-block">
    <span style="color:#6b7280;">// declare only</span><br>
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">matrix</span>;<br>
    <br>
    <span style="color:#6b7280;">// declare + allocate</span><br>
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">matrix</span> = <span style="color:#ef5050;">new</span> <span style="color:#0e6ead;">int</span>[<span style="color:#b45309;">3</span>][<span style="color:#b45309;">3</span>];<br>
    <br>
    <span style="color:#6b7280;">// declare + initialize</span><br>
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">matrix</span> = {<br>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>, <span style="color:#b45309;">3</span>},</span>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>, <span style="color:#b45309;">6</span>},</span>
    <span style="padding-left:10px;display:block;">{<span style="color:#b45309;">7</span>, <span style="color:#b45309;">8</span>, <span style="color:#b45309;">9</span>}</span>
    };
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">After new int[3][3]</div>

  <div v-after class="mtx" style="grid-template-columns: repeat(3, 1fr);">
    <div class="mtx-cell">0</div><div class="mtx-cell">0</div><div class="mtx-cell">0</div>
    <div class="mtx-cell">0</div><div class="mtx-cell">0</div><div class="mtx-cell">0</div>
    <div class="mtx-cell">0</div><div class="mtx-cell">0</div><div class="mtx-cell">0</div>
  </div>

  <div v-click class="section-label" style="margin-top:6px;">After direct init</div>

  <div v-after class="mtx" style="grid-template-columns: repeat(3, 1fr);">
    <div class="mtx-cell done">1</div><div class="mtx-cell done">2</div><div class="mtx-cell done">3</div>
    <div class="mtx-cell done">4</div><div class="mtx-cell done">5</div><div class="mtx-cell done">6</div>
    <div class="mtx-cell done">7</div><div class="mtx-cell done">8</div><div class="mtx-cell done">9</div>
  </div>

  <div v-click class="callout callout-info" style="font-size:.7rem;">
    <div>The first <span class="mono">[3]</span> is the row count; the second <span class="mono">[3]</span> is the column count.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
