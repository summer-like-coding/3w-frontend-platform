---
title: Offer-54-二叉搜索树的第k大节点
anthor: Summer
date: 2023-06-06
category:
  - 剑指Offer
  - 算法题解

tag:
  - 二叉树
  - 中序遍历
  - 递归
  - 迭代
---

### 题目链接

[二叉搜索树的第 k 大节点](https://leetcode-cn.com/problems/er-cha-sou-suo-shu-de-di-kda-jie-dian-lcof/)

### 题目描述

给定一棵二叉搜索树，请找出其中第 k 大的节点。

### 题目思路

利用二叉搜索树的特点：

1. 左子树的值 < 根节点的值 < 右子树的值
2. 中序遍历是升序的

可以使用中序遍历找到第`k`大的节点。

::: code-tabs#code
@tab typescript

```typescript
// 中序遍历
function traverse(root: TreeNode | null): number[] {
  let res: number[] = [];
  //   遍历终止条件
  if (root === null) return [];
  res.push(root.val);
  //   遍历逻辑
  if (root.left) {
    res = res.concat(traverse(root.left));
  }
  if (root.right) {
    res = res.concat(traverse(root.right));
  }
  return res;
}

function kthLargest(root: TreeNode | null, k: number): number {
  // 二叉搜索树的中序遍历是升序的
  // 中序遍历
  const res = traverse(root);
  // 倒序
  res.sort((a, b) => b - a);
  return res[k - 1];
}
```

:::
