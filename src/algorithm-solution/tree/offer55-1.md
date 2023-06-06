---
title: Offer-55-1-二叉树的深度
anthor: Summer
date: 2023-06-06
category:
  - 剑指Offer
  - 算法题解

tag:
  - 二叉树
  - 递归
  - BFS
  - DFS
---

### 题目链接

[二叉树的深度](https://leetcode-cn.com/problems/er-cha-shu-de-shen-du-lcof/)

### 题目描述

输入一棵二叉树的根节点，求该树的深度。
深度就是根节点到最远叶子节点的最长路径上的节点数。

### 题目思路

1. 层序遍历的思路  
   我们找出一共有多少层，就是树的深度。
   但是因为我们只要获得**最大深度**，所以我们可以不用记录每一层的节点，只需要记录每一层的节点个数就可以了。

   **所以其实我们只需要一个 deque(队列)来进行遍历就好了**

   ::: code-tabs#code
   @tab typescript

   ```typescript
   function maxDepth(root: TreeNode | null): number {
     // 可以使用类似层序遍历的方式，每次遍历一层，深度加一
     // 设置深度
     let depth = 0;
     let deque: TreeNode[] = [];
     if (root === null) {
       return depth;
     } else {
       deque.push(root);
     }
     // 遍历这个队列
     while (deque.length !== 0) {
       // 获取这一层的节点个数
       let size = deque.length;
       for (let i = 0; i < size; i++) {
         // 遍历这一层
         let cur = deque.shift();
         if (cur.left !== null) {
           deque.push(cur.left);
         }
         if (cur.right !== null) {
           deque.push(cur.right);
         }
       }
       // 深度++
       depth++;
     }
     return depth;
   }
   ```

   :::

2. 递归的思路  

   > 最大深度 = 左子树的最大深度 和 右子树的最大深度 中的最大值 + 1

   考虑递归三部曲：

   1. 确定递归参数和返回值
      - 参数：根节点
      - 返回值：树的最大深度
   2. 确定终止条件
      - 当前节点为 null，返回 0
   3. 确定单层递归逻辑
      - 返回左子树和右子树的最大深度中的最大值 + 1

    ::: code-tabs#code
    @tab typescript

    ```typescript
    function maxDepth(root: TreeNode | null): number {
    // 实现一种后序遍历的方法
    if (root === null) {
        return 0;
    }
    // 最大深度 = 左子树深度和右子树深度的最大值 + 1
    let left = maxDepth(root.left);
    let right = maxDepth(root.right);
    return Math.max(left, right) + 1;
    }
    ```

    :::
