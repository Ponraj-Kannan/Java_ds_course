<script setup>
const contents = [
  { text: '<b>Question</b> — Find the largest element from a given array of integers.' },
  { text: '<b>Constraints</b> — The array contains 5 integer values, and only one largest element exists.' },
  { text: '<b>Input</b> — <code>12 45 9 78 23</code>' },
  { text: '<b>Process</b> — Assume the first element as maximum, compare each remaining element, and update the maximum value whenever a larger number is found.' },
  { text: '<b>Output</b> — <code>78</code>' }
]
</script>

<Slide
  topic="1D Arrays"
  sub-topic="Coding Problem 2"
  :contents="contents"
/>