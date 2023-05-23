---
# 这是文章的标题
title: Offer53-0~n-1中缺失的数字2
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-23
# 一个页面可以有多个分类
category:
  - 算法题解
  - 剑指Offer
# 一个页面可以有多个标签
tag:
  - 双指针
  - 二分查找
---

## 题目链接

[0 ～ n-1 中缺失的数字](https://leetcode-cn.com/problems/que-shi-de-shu-zi-lcof/)

## 题目描述

在范围 0 ～ n-1 内的 n 个数字中有且只有一个数字不在该数组中，请找出这个数字。

## 题目思路

1.  使用两数相减的方式
    ::: code-tabs#code
    @tab typescript
    ```typescript
    function missingNumber(nums: number[]): number {
        let sum = nums.reduce((pre, cur) => {
            return pre + cur;
        });
        let num = nums.length + 1;
        let RealSum = (num \* (num - 1)) / 2;
        return RealSum - sum;
    }
    ```
2.  使用二分查找的方式
    当`nums[mid] === mid`时，说明缺失的数字在右边，`left = mid + 1`；
    当`nums[mid] !== mid`时，说明缺失的数字在左边，`right = mid - 1`。
    因为，数字是从 0 开始，呈现递增的方式的
    ::: code-tabs#code
    @tab typescript
    ```typescript
    function missingNumber(nums: number[]): number {
      let left = 0;
      let right = nums.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === mid) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
      return left;
    }
    ```