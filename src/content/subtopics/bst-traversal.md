---
author: Benny Oseguera
pubDatetime: 2024-02-27
modDatetime: 2024-02-27
title: BST Traversal
slug: bst-traversal
featured: false
draft: false
topics:
  - binary-tree
description: Kadane's Algorithm template.
---

## BST in JavaScript

_Time: O(n) Space: O(n)_

_Keywords: Binary Tree_
<br><br>

This is not the only way to traverse a binary tree but due to the recursive nature of trees, I feel that the best way to traverse trees is with recursion and it's the easiest to implement.

Here is an example of traversing a Binary Tree implemented in Pseudo Code:

```javascript
traversal(root)
  if root does not exist return null;

  left side traversal = traversal(root.left)
  right side traversal = traversal(root.right)

  return root;
```

Notice:
Our base case is if the root does not exist then return null. This will not always be the exact base case. We traverse the left and right paths respectively then return root.

Example of traversing a Binary Tree implemented in JavaScript:

```javascript
function traversal(root) {
  if (!root) return null;

  let left = traversal(root.left);
  let right = traversal(root.right);

  return root;
}
```

Sample Question:

```javascript
function invertTree(root) {
  // Base case
  if (root === null) return null;

  // Traverse left and right paths
  let left = invertTree(root.left);
  let right = invertTree(root.right);

  // Invert the paths
  root.left = right;
  root.right = left;

  // Return
  return root;
}
```

<a href="https://leetcode.com/problems/invert-binary-tree" target="_blank">Sample Question Link</a>
