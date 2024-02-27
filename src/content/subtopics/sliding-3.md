---
author: Benny Oseguera
pubDatetime: 2024-02-26
modDatetime: 2024-02-26
title: Sliding Window
slug: sliding-3
featured: false
draft: false
topics:
  - arrays
description: Sliding Window template.
---

## Sliding Window in JavaScript

The Sliding Window is a method that allows us to calculate a "window" or subset of a larger set, which can be used to solve problems like finding the longest sequence of unique characters in a string, or the maximum sum of a subarray of size 'k'. It has a time complexity of O(n), where n is the length of the array.

Here is an example of the Sliding Window implemented in JavaScript:

```javascript
function maxSum(arr, windowSize) {
  let windowSum = 0,
    maxSum = 0,
    windowStart = 0;

  // First, add up the numbers of the initial window
  for (let windowEnd = 0; windowEnd < windowSize; windowEnd++) {
    windowSum += arr[windowEnd];
  }

  maxSum = windowSum;

  // Then slide the window one element at a time
  for (let windowEnd = windowSize; windowEnd < arr.length; windowEnd++) {
    windowSum += arr[windowEnd] - arr[windowStart];
    maxSum = Math.max(maxSum, windowSum);
    windowStart += 1;
  }

  return maxSum;
}
```
