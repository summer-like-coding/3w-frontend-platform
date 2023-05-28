---
title: Offer15-二进制中1的个数
author: Summer
date: 2023-05-28
category:
  - 剑指Offer
  - 算法题解
tag:
  - 位运算
---

## 题目链接

[二进制中 1 的个数](https://leetcode-cn.com/problems/er-jin-zhi-zhong-1de-ge-shu-lcof/)

## 题目描述

请实现一个函数，输入一个整数，输出该数二进制表示中 1 的个数。

## 题目思路

1. 使用`toString()`方法将数字转换为二进制字符串,遍历字符串,统计`1`的个数
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function hammingWeight(n: number): number {
     let count = 0;
     const str = n.toString(2);
     for (let i = 0; i < str.length; i++) {
       if (str[i] === "1") {
         count++;
       }
     }
     return count;
   }
   ```

   :::

上面的这个方法虽然简单,但是效率不高,因为需要将数字转换为字符串,然后再遍历字符串,效率较低
我们可以可以利用字符串的分隔方法,将字符串中的`1`分隔出来,然后统计分隔出来的数组的长度即可

2. 使用`toString()`方法将数字转换为二进制字符串,使用`split()`方法将字符串中的`1`分隔出来,然后统计分隔出来的数组的长度即可
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function hammingWeight(n: number): number {
     const str = n.toString(2);
     return str.split("1").length - 1;
   }
   ```

   :::

3. 可以使用位运算,通过`n&(n-1)`可以将`n`的二进制表示中的最低位的`1`变为`0`,直到`n`变为`0`
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function hammingWeight(n: number): number {
     let count = 0;
     while (n) {
       n = n & (n - 1);
       count++;
     }
     return count;
   }
   ```
   :::
