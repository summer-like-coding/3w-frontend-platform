---
title: Offer56-1-数组中数字出现的次数
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

[数组中数字出现的次数](https://leetcode-cn.com/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/)

### 题目描述

一个整型数组 `nums` 里除两个数字之外，其他数字都出现了两次。
请写程序找出这两个只出现一次的数字。

### 题目思路

1.  传统做法,可以使用一个`Map`,记录数字出现的次数,然后遍历`Map`,找出出现次数为`1`的数字
    ::: code-tabs#code
    @tab typescript

    ```typescript
    function singleNumbers(nums: number[]): number[] {
      const map = new Map<number, number>();
      nums.forEach((item) => {
        if (map.has(item)) {
          map.set(item, map.get(item) + 1);
        } else {
          map.set(item, 1);
        }
      });
      const res: number[] = [];
      for (const [key, value] of map) {
        if (value === 1) {
          res.push(key);
        }
      }
      return res;
    }
    ```

    :::

2.  使用`XOR`(异或),因为题目表达,除了两个数字以外,其他数字都出现两次
    ::: code-tabs#code
    @tab typescript

    ```typescript
    function singleNumbers(nums: number[]): number[] {
      let res: number[] = [];
      nums.sort((a, b) => a - b);
      // 遍历 nums，进行异或运算
      for (let i = 0; i < nums.length; i += 2) {
        if ((nums[i] ^ nums[i + 1]) !== 0) {
          res.push(nums[i]);
          i--;
        }
      }
      return res;
    }
    ```

    :::

    但是其实这个方法并不是很好,关于真正的使用异或的方法,可以参考[这篇文章](https://leetcode.cn/problems/shu-zu-zhong-shu-zi-chu-xian-de-ci-shu-lcof/solution/jian-zhi-offer-56-i-shu-zu-zhong-shu-zi-tykom/)
