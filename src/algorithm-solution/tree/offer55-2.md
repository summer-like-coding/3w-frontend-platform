---
title: Offer-55-2-平衡二叉树
anthor: Summer
date: 2023-06-06
category:
  - 剑指Offer
  - 算法题解

tag:
  - 二叉树
  - 递归
  - DFS
  - 平衡二叉树
---

### 题目链接

[平衡二叉树](https://leetcode-cn.com/problems/ping-heng-er-cha-shu-lcof/)

### 题目描述

输入一棵二叉树的根节点，判断该树是不是平衡二叉树。
平衡树的定义如下：

> 一棵二叉树中，每个节点的左右两个子树的高度差的绝对值不超过 1。

### 题目思路

其实就是使用递归的方式，去判断每一个节点的左右子树的高度差是否大于 1。

这边其实我们会使用到`Offer55-1`中的代码，因为我们需要获得每一个节点的高度

递归三部曲：

1. 确定递归函数的参数和返回值
   - 参数：根节点
   - 返回值：是否是平衡二叉树
2. 确定终止条件
   - 当前节点为 `null`，返回 `true`
3. 确定单层递归的逻辑
   - 获取左右子树的高度
   - 判断左右子树的高度差是否大于 1

::: code-tabs#code
@tab typescript

```typescript

// 获取树的高度
function getDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  return Math.max(getDepth(root.left), getDepth(root.right)) + 1;
}

// 判断是否平衡
function isBalanced(root: TreeNode | null): boolean {
//   判断终止条件
if(root === null) {
    return true;
}
// 判断左右子树的高度差是否大于 1
let left = getDepth(root.left);
let right = getDepth(root.right);
if(Math.abs(left - right) > 1) {
    return false;
}else{
    // 继续遍历左右子树
    return isBalanced(root.left) && isBalanced(root.right);
}
}
```

:::
