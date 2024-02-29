---
author: Benny Oseguera
pubDatetime: 2024-02-28
modDatetime: 2024-02-28
title: Union-Find Class
slug: union-find-class
featured: false
draft: false
topics:
  - union-find
description: Creating Union-Find template.
---

## Creating Union-Find

_Time: O(α(n)) (Amoritized / Inverse Ackermann) Space: O(n)_

\_Keywords: Connected Components, Disjoint Sets, Find/Union Operations, Cycle Detection in Graphs
<br><br>

Union-Find, also known as Disjoint Set Union (DSU), is a data structure that keeps track of elements partitioned into a number of disjoint (non-overlapping) sets. It supports two useful operations: find, which identifies the set a particular element belongs to, and union, which merges two sets. We will be referencing the optimized version of a Union-Find with "Union by Rank" and "Path Compression". It is very simple to set up and well worth the gained efficiency.

Path Compression is the technique of flattening the structure of the tree so that all nodes along a path point to the root node. This makes it easier to find the root of any node.

Union by Rank is the technique of unifying parent nodes in response to their depth from the root node or "rank". For example, if we are given a list of edges like so [[0,1],[1,2],[2,3]] and we iterate through forming the connections we can see that:

0 <- 1 <- 2

So what "Union by Rank" essentially tells us is that if 2 is connected to 1 and eventually connects to the root 0, we can give 0 a rank of 2.

0 <- 1 is the first level

0 <- 2 is the second level

Here is an example of a Union-Find Class implemented in Pseudo Code:

```javascript
Union-Find{
  constructor
    parent as a map {}
    rank as a map {}

  find(x)
    if x is not in parent
      parent[x] = x
      rank[x] = 0

    if parent[x] is not x
      parent[x] = find(parent[x])

    return parent[x]

  union(x1,x2)
    parent1 = find(x1)
    parent2 = find(x2)

    if parent1 === parent2
      return true
    else if rank[parent1] > rank[parent2]
      parent[parent2] = parent1
    else if rank[parent1] < rank[parent2]
      parent[parent1] = parent2
    else
      parent[parent2] = parent1
      rank[parent1]++;

    return false;
}
```

Notice:
In `find(x)`, if `x` is not its own root, we continue to search up the tree through recursion until we find the root of the set that `x` belongs to.

In `union(x1, x2)`, we find the roots of `x1` and `x2`. If they have the same roots, they're already in the same set, so we return `true`. If they have different parents, they're in disjoint sets, so we unite them. We do this by making the parent of the root with smaller rank point to the root with larger rank. If they have the same rank, we arbitrarily choose one as the new root and increment its rank. After performing the union, we return `false`.

Here is an example of a Union-Find Class implemented in JavaScript:

```javascript
class UnionFind {
  constructor() {
    this.par = {};
    this.rank = {};
  }

  find(x) {
    if (this.par[x] === undefined) {
      this.par[x] = x;
      this.rank[x] = 0;
    }
    if (this.par[x] !== x) {
      this.par[x] = this.find(this.par[x]);
    }

    return this.par[x];
  }

  union(x1, x2) {
    let p1 = this.find(x1);
    let p2 = this.find(x2);

    if (p1 === p2) return true;
    else if (this.rank[p1] > this.rank[p2]) this.par[p2] = p1;
    else if (this.rank[p1] < this.rank[p2]) this.par[p1] = p2;
    else {
      this.par[p2] = p1;
      this.rank[p1]++;
    }

    return false;
  }
}
```

Sample Question:

```javascript
var findRedundantConnection = function (edges) {
  let uf = new UnionFind();

  for ([x1, x2] of edges) {
    if (uf.union(x1, x2)) return [x1, x2];
  }
};
```

<a href="https://leetcode.com/problems/redundant-connection/" target="_blank">Sample Question Link</a>
