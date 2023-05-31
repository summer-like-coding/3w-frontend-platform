---
title: Offer21-调整数组顺序使奇数位于偶数前面
author: summer
date: 2023-05-28
category:
  - 算法题解
  - 剑指Offer
tag:
  - 双指针
---

### 题目链接

[调整数组顺序使奇数位于偶数前面](https://leetcode.cn/problems/diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof/?envType=study-plan-v2&envId=coding-interviews)

### 题目描述

输入一个整数数组，实现一个函数来调整该数组中数字的顺序，使得所有奇数位于数组的前半部分，所有偶数位于数组的后半部分

### 题目思路

1. 双指针，一个指向头，一个指向尾，头指针去寻找偶数,尾指针去寻找奇数，找到后交换位置，直到头指针大于尾指针
   ::: code-tabs#code
   @tab typescript
   ```typescript
   function exchange(nums: number[]): number[] {
     // 使用左右双指针，左指针找偶数，右指针找奇数
     let left = 0,
       right = nums.length - 1;
     while (left < right) {
       // 左指针找偶数，右指针找奇数
       while (nums[left] % 2 === 1 && left < right) left++;
       while (nums[right] % 2 === 0 && left < right) right--;
       // 交换
       let temp = nums[left];
       nums[left] = nums[right];
       nums[right] = temp;
     }
     return nums;
   }
   ```
   :::
