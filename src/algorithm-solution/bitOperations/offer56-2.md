---
title: 剑指Offer56-2-数组中数字出现的次数II
author: Summer
date: 2023-05-28
category:
  - 剑指Offer
  - 算法题解

tag:
  - 位运算
  - 数组
---


### 题目链接

[数组中数字出现的次数 II](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-ii-lcof/)

### 题目描述

在一个数组 `nums` 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。

### 题目思路

这个位运算方法,并不是很了解,所以这边先给出传统做法,后续再补充位运算的解法

1. 使用`Map`,记录数字出现的次数,然后遍历`Map`,找出出现次数为`1`的数字
    ::: code-tabs#code
    @tab typescript

    ```typescript
    function singleNumber(nums: number[]): number {
      const map = new Map<number, number>();
      nums.forEach((item) => {
        if (map.has(item)) {
          map.set(item, map.get(item) + 1);
        } else {
          map.set(item, 1);
        }
      });
      for (const [key, value] of map) {
        if (value === 1) {
          return key;
        }
      }
      return -1;
    }
    ```

    :::