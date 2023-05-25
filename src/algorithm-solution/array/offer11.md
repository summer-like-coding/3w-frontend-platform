---
# 这是文章的标题
title: Offer11-旋转数组的最小数字
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

[旋转数组的最小数字](https://leetcode-cn.com/problems/xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof/)

## 题目描述

把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。
输入一个递增排序的数组的一个旋转，输出旋转数组的最小元素。
例如，数组 `[3,4,5,1,2]` 为 `[1,2,3,4,5]` 的一个旋转，该数组的最小值为 1。

## 题目思路

1.  使用`TS`自带的`api`
    直接使用解构赋值，然后使用`Math.min`来获取最小值
    ::: code-tabs#code
    @tab typescript

    ```typescript
    function minArray(numbers: number[]): number {
      return Math.min(...numbers);
    }
    ```

2.  遍历查找
    遇到第一个比前一个元素小的元素，就返回
    ::: code-tabs#code
    @tab typescript

    ```typescript
    function minArray(numbers: number[]): number {
      // 1. 遍历找前一个比后一个大的
      // 2. 返回后一个
      for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > numbers[i + 1]) {
          return numbers[i + 1];
        }
      }
      return numbers[0];
    }
    ```
