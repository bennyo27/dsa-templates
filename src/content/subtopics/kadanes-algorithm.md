---
author: Benny Oseguera
pubDatetime: 2024-02-27
modDatetime: 2024-02-27
title: Kadane's Algorithm
slug: kadanes-algorithm
featured: false
draft: false
topics:
  - arrays
description: Kadane's Algorithm template.
---

## Kadane's Algorithm

_Time: O(n) Space: O(1)_

_Keywords: Maximum Subarray, Contiguous_
<br><br>

Kadane's Algorithm is a dynamic programming algorithm used to find the maximum sum of a contiguous subarray in an array of integers.

Here is an example of Kadane's Algorithm implemented in Pseudo Code:

```javascript
kadanesAlgorithm(array)
  currentMaximum = 0;
  overallMaximum = 0;

  for each element of array
    currentMaximum = Maximum of (currentMax + element, element);
    overallMaximum = Maximum of (overallMaximum, currentMaximum);

  return overallMaximum;
```

Notice:
As we move through the array, we are making the constant decision if the current element is greater than the current max,
if it is then we take it. Then of course we check against the over all maximum.

Here is an example of Kadane's Algorithm implemented in JavaScript:

```javascript
function kadanesAlgorithm(array) {
  let currentMaximum = 0;
  let overallMaximum = 0;

  for (let i = 0; i < array.length; i++) {
    const num = array[i];
    currentMaximum = Math.max(currentMaximum + num, num);
    overallMaximum = Math.max(overallMaximum, currentMaximum);
  }
  return overallMaximum;
}
```

Sample Question:

```javascript
function maxSubArray(nums) {
  // Current and overall maximums
  let currMax = 0;
  let maxSum = nums[0];

  for (let i = 0; i < nums.length; i++) {
    // Make decisions on which is greater
    currMax = Math.max(currMax + nums[i], nums[i]);
    maxSum = Math.max(maxSum, currMax);
  }

  return maxSum;
}
```

<a href="https://leetcode.com/problems/maximum-subarray" target="_blank">Sample Question Link</a>
