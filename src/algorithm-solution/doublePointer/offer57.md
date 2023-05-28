---
title: Offer57-和为s的两个数字
author: summer
date: 2023-5-28
category:
  - 算法题解
  - 剑指Offer

tag:
  - 双指针
  - 数组
---

### 题目链接

[和为 s 的两个数字](https://leetcode-cn.com/problems/he-wei-sde-liang-ge-shu-zi-lcof/)

### 题目描述

输入一个递增排序的数组和一个数字 s，在数组中查找两个数，使得它们的和正好是 s。如果有多对数字的和等于 s，则输出任意一对即可

### 题目思路

1. 使用双指针，一个指向头，一个指向尾
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function twoSum(nums: number[], target: number): number[] {
     // 使用双指针
     let left = 0;
     let right = nums.length - 1;
     while (left < right) {
       let sum = nums[left] + nums[right];
       if (sum === target) {
         return [nums[left], nums[right]];
       } else if (sum < target) {
         left++;
       } else {
         right--;
       }
     }
   }
   ```

   :::
