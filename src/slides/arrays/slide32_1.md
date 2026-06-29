<script setup>
const contents = [
  { text: '<b>Question</b> — Find the largest element present in a matrix.' },
  { text: '<b>Constraints</b> — The matrix contains integer values arranged in rows and columns, and only one largest value exists.' },
  { text: '<b>Input</b> — <code>[[3,9,1],[7,5,8]]</code>' },
  { text: '<b>Process</b> — Assume the first matrix element as maximum, traverse every row and column, compare each value, and update the maximum whenever a larger value is found.' },
  { text: '<b>Output</b> — <code>9</code>' }
]
</script>

<Slide
  topic="2D Arrays"
  sub-topic="Coding Problem 5"
  :contents="contents"
/>