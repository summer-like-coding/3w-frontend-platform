---
title: Offer32-1-从上到下打印二叉树
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

[从上到下打印二叉树](https://leetcode-cn.com/problems/cong-shang-dao-xia-da-yin-er-cha-shu-lcof/)

### 题目描述

从上到下打印出二叉树的每个节点，同层节点从左至右打印。

### 题目思路

其实就是一道层序遍历的题目，使用队列来实现即可。
我们使用队列来存储每一层的节点，然后遍历队列，将每一层的节点的值存储到数组中即可。
**注意什么时候将队列里面的数据去掉**

::: code-tabs#code
@tab typescript

```typescript
function levelOrder(root: TreeNode | null): number[] {
  // 1. 创建一个数组，里面存放结果
  let res: number[] = [];
  // 2. 创建一个队列，里面存放TreeNode类型
  let deque: TreeNode[] = [];
  // 3. 如果根节点不为空，就把根节点放入队列中
  if (root !== null) {
    deque.push(root);
  } else {
    return [];
  }
  // 4. 当队列不为空的时候，就一直循环
  while (deque.length !== 0) {
    // 5. 取出队列的第一个元素
    let cur = deque.shift();
    // 6. 把当前元素的值放入结果数组中
    res.push(cur.val);
    // 7. 如果当前元素的左右子树不为空，就把左子树放入队列中
    if (cur.left !== null) {
      deque.push(cur.left);
    }
    if (cur.right !== null) {
      deque.push(cur.right);
    }
  }
  // 8. 返回结果数组
  return res;
}
```

:::
