<script setup>
const contents = [
  { text: '<b>Question</b> — Find the transpose of a given matrix by converting rows into columns.' },
  { text: '<b>Constraints</b> — If the original matrix has <code>r × c</code> dimensions, the transpose matrix will have <code>c × r</code> dimensions.' },
  { text: '<b>Input</b> — <code>[[1,2,3],[4,5,6]]</code>' },
  { text: '<b>Process</b> — Create a new matrix with reversed dimensions, then use nested loops and assign each element using <code>t[j][i] = m[i][j]</code>.' },
  { text: '<b>Output</b> — <code>[[1,4],[2,5],[3,6]]</code>' }
]
</script>

<Slide
  topic="2D Arrays"
  sub-topic="Coding Problem 4"
  :contents="contents"
/>