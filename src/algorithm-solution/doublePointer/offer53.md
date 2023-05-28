---
# 这是文章的标题
title: Offer53-1-在排序数组中查找数字I
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

[在排序数组中查找数字 I](https://leetcode-cn.com/problems/zai-pai-xu-shu-zu-zhong-cha-zhao-shu-zi-lcof/)

## 题目描述

统计一个数字`target`在**排序数组**中出现的次数。

## 题目思路

1.  使用二分查找的方法，找到`target`，然后再左右两边分别找到`target`的边界。
    ::: code-tabs#code
    @tab typescript

    ```typescript
    function search(nums: number[], target: number): number {
      // 双指针，二分查找
      let left = 0;
      let right = nums.length - 1;
      while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        // 如果找到了，那么就向左右两边扩散
        if (nums[mid] === target) {
          let count = 1;
          let i = mid - 1;
          let j = mid + 1;
          // 向左边扩散
          while (nums[i] === target) {
            count++;
            i--;
          }
          // 向右边扩散
          while (nums[j] === target) {
            count++;
            j++;
          }
          return count;
        }
        // 如果没找到，那么就继续二分查找
        if (nums[mid] > target) {
          right = mid - 1;
        }
        if (nums[mid] < target) {
          left = mid + 1;
        }
      }
    }
    ```
