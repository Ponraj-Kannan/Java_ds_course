<script setup>
const contents = [
  { text: '<b>Question</b> — Count how many even and odd numbers are present in a given array.' },
  { text: '<b>Constraints</b> — The array contains 6 integer values. Every element must be checked and counted as either even or odd.' },
  { text: '<b>Input</b> — <code>2 5 8 7 3 6</code>' },
  { text: '<b>Process</b> — Traverse each array element, check whether the number is divisible by <code>2</code>, then increment the even or odd counter accordingly.' },
  { text: '<b>Output</b> — <code>Even = 3, Odd = 3</code>' }
]
</script>

<Slide
  topic="1D Arrays"
  sub-topic="Coding Problem 7"
  :contents="contents"
/>