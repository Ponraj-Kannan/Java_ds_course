<Slide2 topic="Jagged Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">Jagged</span> Arrays — Uneven Rows</div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      A <strong style="color:var(--red);">jagged array</strong> is a 2D array where rows can have <strong style="color:var(--green);">different lengths</strong>.
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[][] <span style="color:#0e6ead;">arr</span> = {<br>
    <span style="padding-left:14px;display:block;">{<span style="color:#b45309;">1</span>, <span style="color:#b45309;">2</span>},</span>
    <span style="padding-left:14px;display:block;">{<span style="color:#b45309;">3</span>, <span style="color:#b45309;">4</span>, <span style="color:#b45309;">5</span>},</span>
    <span style="padding-left:14px;display:block;">{<span style="color:#b45309;">6</span>}</span>
    };
  </div>

  <div v-click class="code-block">
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">i</span>=<span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">i</span>&lt;<span style="color:#0e6ead;">arr</span>.<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">i</span>++)<br>
    <span style="padding-left:12px;display:block;"><span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">j</span>=<span style="color:#b45309;">0</span>; <span style="color:#0e6ead;">j</span>&lt;<span style="color:#0e6ead;">arr</span>[<span style="color:#0e6ead;">i</span>].<span style="color:#0e6ead;">length</span>; <span style="color:#0e6ead;">j</span>++)</span>
    <span style="padding-left:24px;display:block;"><span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">print</span>(<span style="color:#0e6ead;">arr</span>[<span style="color:#0e6ead;">i</span>][<span style="color:#0e6ead;">j</span>] + <span style="color:#319795;">" "</span>);</span>
  </div>

  <div v-click class="callout callout-warn" style="font-size:.7rem;">
    <div>Always use <span class="mono">arr[i].length</span> in the inner loop — each row may differ.</div>
  </div>
</div>

<div class="flex-col">
  <div v-click class="section-label">Irregular Visualization</div>

  <div v-after style="display:flex;flex-direction:column;gap:4px;background:#f7f8fc;padding:12px;border:1px solid var(--border);border-radius:10px;">
    <div style="display:flex;align-items:center;gap:8px;">
      <div class="small-text mono" style="min-width:36px;">row 0</div>
      <div class="arr-strip" style="padding:6px;">
        <div class="arr-cell" style="min-width:42px;height:34px;font-size:.75rem;">1</div>
        <div class="arr-cell" style="min-width:42px;height:34px;font-size:.75rem;">2</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <div class="small-text mono" style="min-width:36px;">row 1</div>
      <div class="arr-strip" style="padding:6px;">
        <div class="arr-cell" style="min-width:42px;height:34px;font-size:.75rem;">3</div>
        <div class="arr-cell" style="min-width:42px;height:34px;font-size:.75rem;">4</div>
        <div class="arr-cell" style="min-width:42px;height:34px;font-size:.75rem;">5</div>
      </div>
    </div>
    <div style="display:flex;align-items:center;gap:8px;">
      <div class="small-text mono" style="min-width:36px;">row 2</div>
      <div class="arr-strip" style="padding:6px;">
        <div class="arr-cell" style="min-width:42px;height:34px;font-size:.75rem;">6</div>
      </div>
    </div>
  </div>

  <div v-click class="card card-blue" style="margin-top:6px;">
    <div class="small-text"><strong>Use case:</strong> sparse data — say, weekly schedules where some days have more events than others.</div>
  </div>
</div>

</div>

  </template>
</Slide2>
