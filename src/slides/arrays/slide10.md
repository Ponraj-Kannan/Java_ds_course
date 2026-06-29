<Slide2 topic="1D Arrays">
  <template #content>

<div class="slide-h1" style="margin-bottom:10px;"><span class="highlight">for-each</span> Loop &amp; <span class="highlight">length</span></div>

<div class="g2" style="gap:14px;">

<div class="flex-col">
  <div v-click class="card-navy" style="border-radius:10px;">
    <div style="font-size:.82rem;line-height:1.6;color:var(--slate);">
      The <strong style="color:var(--red);">enhanced for</strong> (also called <strong>for-each</strong>) loop reads each element directly — no index variable needed.
    </div>
  </div>

  <div v-click class="code-block">
    <span style="color:#0e6ead;">int</span>[] <span style="color:#0e6ead;">marks</span> = {<span style="color:#b45309;">90</span>, <span style="color:#b45309;">85</span>, <span style="color:#b45309;">78</span>, <span style="color:#b45309;">92</span>, <span style="color:#b45309;">88</span>};<br>
    <br>
    <span style="color:#ef5050;">for</span>(<span style="color:#0e6ead;">int</span> <span style="color:#0e6ead;">mark</span> : <span style="color:#0e6ead;">marks</span>)<br>
    {<br>
    <span style="padding-left:20px;display:block;"><span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">mark</span>);</span>
    }
  </div>

  <div v-click class="output-box">90<br>85<br>78<br>92<br>88</div>
</div>

<div class="flex-col">
  <div v-click class="section-label">.length Property</div>

  <div v-after class="code-block">
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">marks</span>.<span style="color:#0e6ead;">length</span>);  <span style="color:#6b7280;">// 5</span><br>
    <br>
    <span style="color:#6b7280;">// safer last-element access</span><br>
    <span style="color:#0e6ead;">System</span>.<span style="color:#0e6ead;">out</span>.<span style="color:#0e6ead;">println</span>(<span style="color:#0e6ead;">marks</span>[<span style="color:#0e6ead;">marks</span>.<span style="color:#0e6ead;">length</span> - <span style="color:#b45309;">1</span>]);
  </div>

  <table v-click class="cmp-table">
    <thead>
      <tr><th>Form</th><th>for</th><th>for-each</th></tr>
    </thead>
    <tbody>
      <tr><td>Index available?</td><td class="yes">Yes</td><td class="no">No</td></tr>
      <tr><td>Can modify slot?</td><td class="yes">Yes</td><td class="no">No</td></tr>
      <tr><td>Code length</td><td>Longer</td><td class="yes">Shorter</td></tr>
      <tr><td>Best for</td><td>Updates</td><td>Reading</td></tr>
    </tbody>
  </table>
</div>

</div>

  </template>
</Slide2>
