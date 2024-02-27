---
author: Benny Oseguera
pubDatetime: 2024-02-26
modDatetime: 2024-02-26
title: Sliding Window
slug: sliding-window
featured: false
draft: false
topics:
  - arrays
description: Sliding Window template.
---

## Sliding Window in JavaScript

_Time: O(n) Space: O(1)_

_Keywords: Subarray, Window Size, Contiguous Elements, Optimized(longest, shortest, maximum, minimum)_
<br><br>

The Sliding Window is a method that allows us to calculate a "window" or subset of a larger set, which can be used to solve problems like finding the longest sequence of unique characters in a string, or the maximum sum of a subarray of size 'k'.

There are 2 main variations, Sliding Window Fixed and Sliding Window Variable

### Sliding Window Fixed

Here is an example of the Sliding Window Fixed implemented in Pseudo Code:

```javascript
slidingWindow(array, k)
  left = 0;

  for right = 0 of array
    if right - left >= k
      increment left as well as any other changes

    default behavior here for is only for right to increment

  return respectiveResult;
```

Keywords:

Notice:
The window is determined by right - left, if some condition is met we move the left side of the window. Meanwhile the right is moving as
well to progress through the rest of the array.

```javascript
function slidingWindow(array, k) {
  let left = 0;

  for (let right = 0; right < array.length; right++) {
    if (right - left > k) {
      left++;
    }
  }

  // Default behavior here is only for right to increment

  return respectiveResult;
}
```

Sample Question:

```javascript
function containsNearbyDuplicate(nums, k) {
  // Start at 0
  let left = 0;
  let set = new Set();

  // Iterate through the array
  for (let right = 0; right < nums.length; right++) {
    // If condition is met
    if (right - left > k) {
      // Remove left number from set and increment left
      set.delete(nums[left]);
      left++;
    }

    // Check is there is a duplicate
    if (set.has(nums[right])) {
      return true;
    }

    // The default behavior for right here is to
    // add right to the set on top of incrementing
    set.add(nums[right]);
  }

  // Respective result
  return false;
}
```

<a href="https://leetcode.com/problems/contains-duplicate-ii" target="_blank">Sample Question Link</a>

<br><br>

### Sliding Window Variable

The main difference is that instead of checking **_if a condition is met_**, we want to check **_as long as the condition is met_**.

Here is an example of the Sliding Window Variable implemented in Pseudo Code:

```javascript
slidingWindow(array, k)
  left = 0;

  for right = 0 of array
    while right - left >= k
      increment left as well as any other changes

    default behavior here is only for right to increment

  return respectiveResult;
```

Notice:
We switched the if with a while loop.

```javascript
function slidingWindow(array) {
  let left = 0;

  for (let right = 0; right < array.length; right++) {
    while (right - left > k) {
      left++;
    }
  }

  // Default behavior here is only for right to increment

  return respectiveResult;
}
```

Sample Question:

```javascript
function containsNearbyDuplicate(nums, k) {
  // Initialize
  let left = 0;
  let set = new Set();
  let longest = 0;

  // Expand window to right
  for (let right = 0; right < s.length; right++) {
    // As long as condition is met we will repeat condition
    while (set.has(s[right])) {
      set.delete(s[left]);
      left++;
    }

    // Default behavior
    longest = Math.max(longest, right - left + 1);
    set.add(s[right]);
  }

  // Return respective result
  return longest;
}
```

<a href="https://leetcode.com/problems/longest-substring-without-repeating-characters" target="_blank">Sample Question Link</a>
