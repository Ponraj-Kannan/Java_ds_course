<script setup>
const contents = [
  { text: '<b>Question</b> — Find the sum of each row (or column) in a matrix.' },
  { text: '<b>Constraints</b> — The matrix is a 3 × 3 matrix, and the sum must be calculated separately for every row or column.' },
  { text: '<b>Input</b> — <code>[[1,2,3],[4,5,6],[7,8,9]]</code>' },
  { text: '<b>Process</b> — Use nested loops to traverse each row (or column), calculate the sum for that row (or column), and print the result separately.' },
  { text: '<b>Output</b> — <code>Row 0 = 6, Row 1 = 15, Row 2 = 24</code>' }
]
</script>

<Slide
  topic="2D Arrays"
  sub-topic="Coding Problem 3"
  :contents="contents"
/>