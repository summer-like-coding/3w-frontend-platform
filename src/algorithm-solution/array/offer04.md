---
# 这是文章的标题
title: Offer04-二维数组中的查找
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-25
# 一个页面可以有多个分类
category:
  - 算法题解
  - 剑指Offer
# 一个页面可以有多个标签
tag:
  - 数组
---

## 题目链接

[二维数组中的查找](https://leetcode-cn.com/problems/er-wei-shu-zu-zhong-de-cha-zhao-lcof/)

## 题目描述

在一个 n \* m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

## 题目思路

1.  使用`TS`自带的`api`
    首先先扁平化，然后在数组里面使用`includes`来判断是否存在
    ::: code-tabs#code
    @tab typescript

    ```typescript
    function findNumberIn2DArray(matrix: number[][], target: number): boolean {
      return matrix.flat().includes(target);
    }
    ```

2.  从右上角开始查找
    如果当前元素大于`target`，则向左移动一位
    如果当前元素小于`target`，则向下移动一位
    ::: code-tabs#code
    @tab typescript
    ```typescript
    function findNumberIn2DArray(matrix: number[][], target: number): boolean {
      // 思路：从右上角开始查找
      // 首先先将指针指向右上角
      if (matrix.length === 0) {
        return false;
      }
      let row = 0;
      let col = matrix[0].length - 1;
      while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) {
          return true;
        }
        if (matrix[row][col] > target) {
          // 如果当前值大于目标值，那么就向左移动
          col--;
        }
        // 如果当前值小于目标值，那么就向下移动
        if (matrix[row][col] < target) {
          row++;
        }
      }
      return false;
    }
    ```
