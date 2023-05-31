---
title: Offer28-对称的二叉树
anthor: Summer
date: 2023-05-31
category:
  - 剑指Offer
  - 算法题解

tag:
  - 二叉树
  - 递归
  - BFS
---

### 题目链接

[对称的二叉树](https://leetcode-cn.com/problems/dui-cheng-de-er-cha-shu-lcof/)

### 题目描述

请实现一个函数，用来判断一棵二叉树是不是对称的。
**注意这个对称，不仅仅是值对称，他需要保证位置的相对对称**

### 题目思路

1. BFS
   使用类似于层序遍历的方式，每次遍历一层，然后判断这一层的值是否对称，如果对称则继续遍历下一层，如果不对称则直接返回 false

   **但是需要注意，怎么将遍历到的`TreeNode`放入到`deque`里面**，注意是不是和原来的层序遍历一样(bushi)

   ::: code-tabs#code
   @tab typescript

   ```typescript
   function isSymmetric(root: TreeNode | null): boolean {
     // 用数组来存储每一层的节点
     // 然后判断每一层的节点是否对称
     if (root === null) {
       return true;
     }
     let deque: TreeNode[] = [root];
     while (deque.length) {
       // 获取每一层数据
       let size = deque.length;
       let level: number[] = [];
       for (let i = 0; i < size; i++) {
         let node = deque.shift()!;
         if (node !== null) {
           level.push(node.val);
           deque.push(node.left);
           deque.push(node.right);
         } else {
           level.push(null);
         }
       }
       // 判断是否对称
       let left = 0;
       let right = level.length - 1;
       while (left < right) {
         if (level[left] !== level[right]) {
           return false;
         }
         left++;
         right--;
       }
     }
     return true;
   }
   ```

   :::

2. 递归方法
   判断是不是对称，其实就是比较几个地方：

   - 左子树的左子树和右子树的右子树是否相等(left.left.val === right.right.val)
   - 左子树的右子树和右子树的左子树是否相等(left.right.val === right.left.val)
   - 因为是相对位置的对称，所以需要还判断一个地方，会不会出现左或右节点为空的情况，如果出现了，那么就不是对称的

    ::: code-tabs#code
    @tab typescript

    ```typescript
    function isSymmetricRoot(
    left: TreeNode | null,
    right: TreeNode | null
    ): boolean {
    // 如果左右节点都为空
    if (left === null && right === null) {
        return true;
    } else if (left === null || right === null) {
        return false;
    } else if (left.val !== right.val) {
        return false;
    } else {
        return (
        isSymmetricRoot(left.left, right.right) &&
        isSymmetricRoot(left.right, right.left)
        );
    }
    }

    function isSymmetric(root: TreeNode | null): boolean {
    // 如果根节点为空
    if (root === null) {
        return true;
    }
    // 其实就是判断左树左节点和右树右节点是否相等
    // 左树右节点和右树左节点是否相等
    return isSymmetricRoot(root.left, root.right);
    }
    ```

    :::
