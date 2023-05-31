---
title: Offer32-3-从上到下打印二叉树
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

[从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-iii-lcof/)

### 题目描述

请实现一个函数按照之字形顺序打印二叉树，即第一行按照从左到右的顺序打印，第二层按照从右到左的顺序打印，第三行再按照从左到右的顺序打印，其他行以此类推。

简单说就是：奇数行从左到右，偶数行从右到左。

### 题目思路

整体题目思路其实和 offer32-2 非常相似，但是多了一个从左到右还是从右到左的判断。
我们可以记录当前行的行数，如果是奇数行，就从左到右，如果是偶数行，就从右到左。

::: code-tabs#code
@tab typescript

```typescript
function levelOrder(root: TreeNode | null): number[][] {
  // 设置结果
  let res: number[][] = [];
  // 设置队列
  let deque: TreeNode[] = [];
  // 设置层数
  let curLevel = 0;
  if (root !== null) {
    deque.push(root);
  } else {
    return [];
  }
  while (deque.length !== 0) {
    // 层高++
    curLevel++;
    // 设置这一层的数组
    let level: number[] = [];
    // 控制这一层数据个数
    let size = deque.length;
    // 遍历这一层的数据
    for (let i = 0; i < size; i++) {
      // 从对头取出一个元素
      let cur = deque.shift();
      level.push(cur.val);
      if (cur.left !== null) {
        deque.push(cur.left);
      }
      if (cur.right !== null) {
        deque.push(cur.right);
      }
    }
    if (curLevel % 2 === 0) {
      level.reverse();
    }
    res.push(level);
  }
  return res;
}
```
:::
