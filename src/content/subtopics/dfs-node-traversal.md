---
author: Benny Oseguera
pubDatetime: 2024-02-27
modDatetime: 2024-02-27
title: DFS Node Traversal
slug: dfs-node-traversal
featured: false
draft: false
topics:
  - graph
description: DFS Node Traversal template.
---

## DFS Node Traversal

_Time: O(v\*e) Space: O(v)_

_Keywords: Graph, Traverse_
<br><br>

This is probably the simplest form of traversing a graph, syntax wise.

Here is an example of traversing a DFS Node Traversal implemented in Pseudo Code:

```javascript
traverseGraph(node)
  visited = {}

  dfs(node)
    if node does not exist
      return null

    if node is in visited
      return null

    visited[node] = true

    for each neighbor of node
        dfs(neighbor)

  return dfs(node)
```

Notice:
Our base case is to return null if the root does not exist. This will not always be the exact base case. We also check if the node has been visited. If it has, we don't want to repeat the visit, so we return early.

Here is an example of traversing a DFS Node Traversal implemented in JavaScript:

```javascript
function traverseGraph(node) {
  let visited = new Map();

  function dfs(currentNode) {
    if (!currentNode) return;
    if (visited.has(currentNode)) return;

    visited.set(currentNode, true);

    for (const neighbor of currentNode.neighbors) {
      if (!visited.has(neighbor)) {
        dfs(neighbor);
      }
    }
  }

  dfs(node);
}
```

Sample Question:

```javascript
var cloneGraph = function (node) {
  // Initialize visited
  let visited = new Map();

  function dfs(node) {
    // Check if node exists
    if (!node) return null;

    // Check if visited has node, in this case we return it because we are expecting a node
    if (visited.has(node)) return visited.get(node);

    let clone = new Node(node.val);
    // Add node to visited paired with the cloned node
    visited.set(node, clone);

    // Iterate through the node's neighbors
    for (neighbor of node.neighbors) {
      // Append to cloned node's neighbors while also iterating
      clone.neighbors.push(dfs(neighbor));
    }

    return clone;
  }

  return dfs(node);
};
```

<a href="https://leetcode.com/problems/clone-graph" target="_blank">Sample Question Link</a>
