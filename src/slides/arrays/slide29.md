<script setup>
const contents = [
  { text: '<b>Question</b> — Add two matrices and store the result in a new matrix.' },
  { text: '<b>Constraints</b> — Both matrices must have the same number of rows and columns for addition.' },
  { text: '<b>Input</b> — <code>A = [[1,2,3],[4,5,6]], B = [[7,8,9],[1,2,3]]</code>' },
  { text: '<b>Process</b> — Traverse each row and column using nested loops, then add corresponding elements of both matrices and store them in the result matrix.' },
  { text: '<b>Output</b> — <code>[[8,10,12],[5,7,9]]</code>' }
]
</script>

<Slide
  topic="2D Arrays"
  sub-topic="Coding Problem 1"
  :contents="contents"
/>