<script setup>
const contents = [
  { text: '<b>Question</b> — Search for a given element in an array and return its index position.' },
  { text: '<b>Constraints</b> — The array contains 4 integer values. If the element is not found, return <code>-1</code>.' },
  { text: '<b>Input</b> — <code>10 25 33 42</code>, Search Key = <code>33</code>' },
  { text: '<b>Process</b> — Traverse the array from the beginning, compare each element with the search key, and stop when a match is found.' },
  { text: '<b>Output</b> — <code>2</code>' }
]
</script>

<Slide
  topic="1D Arrays"
  sub-topic="Coding Problem 6"
  :contents="contents"
/>