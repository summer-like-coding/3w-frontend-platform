---
title: Offer32-2-从上到下打印二叉树
anthor: Summer
date: 2023-05-31
category:
  - 剑指Offer
  - 算法题解

tag:
  - 二叉树
  - BFS
---

### 题目链接

[从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-ii-lcof/)

### 题目描述

从上到下打印二叉树的每个节点，同层节点从左至右打印。

**注意和 32-1 的区别，这题希望你每一层用一个数组包裹起来**

### 题目思路

大致思路和 offer32-1 差不多，但是需要注意的是，如何保证每一层的节点都在一个数组？

我们可以在每一层遍历的时候，记录一下**当前队列的长度**，然后在这个长度内，将队列中的元素都取出来，放入一个数组中，然后将这个数组放入结果数组中即可。

::: code-tabs#code
@tab typescript

```typescript
function levelOrder(root: TreeNode | null): number[][] {
  // 1. 结果数组
  let res: number[][] = [];
  // 2.设置一个队列，里面存放TreeNode类型
  let deque: TreeNode[] = [];
  // 3. 如果根节点不为空，就把根节点放入队列中
  if (root !== null) {
    deque.push(root);
  } else {
    return [];
  }
  // 4. 当队列不为空的时候，就一直循环
  while (deque.length !== 0) {
    // 5.表示每一层的数组
    let level: number[] = [];
    // 6. 当前队列的长度
    let size = deque.length;
    // 7. 遍历当前队列：其实就是用size来控制每一层有多少个元素
    for (let i = 0; i < size; i++) {
      let cur = deque.shift();
      level.push(cur.val);
      if (cur.left !== null) {
        deque.push(cur.left);
      }
      if (cur.right !== null) {
        deque.push(cur.right);
      }
    }
    // 8. 把当前层的数组放入结果数组中
    res.push(level);
  }
  // 9. 返回结果数组
  return res;
}
```

:::
