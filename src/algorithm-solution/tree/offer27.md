---
title: Offer27-二叉树的镜像
anthor: Summer
date: 2023-05-31
category:
  - 剑指Offer
  - 算法题解

tag:
  - 二叉树
  - 递归
---

### 题目链接

[二叉树的镜像](https://leetcode-cn.com/problems/er-cha-shu-de-jing-xiang-lcof/)

### 题目描述

请完成一个函数，输入一个二叉树，该函数输出它的镜像。

### 题目思路

其实镜像的意思就是把二叉树的左右子树交换一下，那么我们可以使用递归来实现。
这里面会分为几种情况：

1. 左右子树都为空，直接返回
2. 左子树为空但是右子树不为空，那么把右子树赋值给左子树
3. 右子树为空但是左子树不为空，那么把左子树赋值给右子树
4. 左右子树都不为空，那么把左子树和右子树交换一下

::: code-tabs#code
@tab typescript

```typescript
function Swap(root: TreeNode | null): void {
  // root为空
  if (root === null) {
    return null;
  }
  // 如果左右节点都为空
  if (root.left === null && root.right === null) {
    return null;
  }
  // 如果左节点为空,右节点不为空
  else if (root.left === null && root.right !== null) {
    // 交换左右节点
    root.left = root.right;
    root.right = null;
  }
  // 如果右节点为空,左节点不为空
  else if (root.left !== null && root.right === null) {
    // 交换左右节点
    root.right = root.left;
    root.left = null;
  }
  // 如果左右节点都不为空
  else if (root.left !== null && root.right !== null) {
    // 交换左右节点
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
  }
}

function mirrorTree(root: TreeNode | null): TreeNode | null {
  if (root === null) {
    return null;
  }
  Swap(root);
  mirrorTree(root.left);
  mirrorTree(root.right);
  return root;
}
```

:::
