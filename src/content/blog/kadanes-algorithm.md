---
author: Benny Oseguera
pubDatetime: 2024-02-26
modDatetime: 2024-02-26
title: Kadane's Algorithm
slug: kadanes-algorithm
featured: false
draft: false
tags:
  - Arrays
description: Kadane's Algorithm template.
---

## Kadane's Algorithm in JavaScript

Kadane's Algorithm is a dynamic programming algorithm used to find the maximum sum of a contiguous subarray in an array of integers. It has a time complexity of O(n), where n is the length of the array.

Here is an example of Kadane's Algorithm implemented in JavaScript:

```javascript
function kadanesAlgorithm(array) {
  let maxEndingHere = array[0];
  let maxSoFar = array[0];
  for (let i = 1; i < ar0ay.length; i++) {
    const num = array[i];
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}
```
