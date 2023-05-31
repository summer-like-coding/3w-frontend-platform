---
title: Offer58-1-翻转单词顺序
author: Summer
date: 2023-05-28
category:
  - 算法题解
  - 剑指Offer

tag:
  - 双指针
  - 字符串
---

### 题目链接

[翻转单词顺序](https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/)

### 题目描述

输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。
但是需要注意:

- 输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括
- 反转单词之间只有一个空格

### 题目思路

1. 可以将字符串转化为数组,然后再将数组转变为字符串
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function reverseWords(s: string): string {
     // 将字符串转化为数组
     let arr = s.split(" ");
     // 去除数组中的空字符串
     arr = arr.filter((item) => item !== "");
     // 反转数组
     arr.reverse();
     // 将数组转化为字符串
     return arr.join(" ");
   }
   ```

   :::

2. 使用双指针,从后往前去寻找单词,遇到空格,就将单词添加到结果中
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function reverseWords(s: string): string {
     // 采用双指针，从后往前进行遍历，遇到空格就将单词添加到结果中
     // 首先去除字符串首尾的空格
     s = s.trim();
     let left = s.length - 1;
     let right = s.length - 1;
     // 结果字符串
     let res = "";
     // 设置临时字符串，用于存储单词
     let temp = "";
     while (left >= 0) {
       // left 指针指向空格，说明遇到了单词
       if (s[left] === " ") {
         temp = s.substring(left + 1, right + 1);
         res += temp + " ";
         // 跳过单词之间的空格
         while (s[left] === " ") {
           left--;
         }
         // right 指针指向单词的最后一个字母
         right = left;
       } else {
         // left 指针不指向空格，left 指针继续向前移动
         left--;
         // 如果 left 指针指向了-1，说明遍历到了字符串的开头，此时将第一个单词添加到结果中
         if (left === -1) {
           temp = s.substring(left + 1, right + 1);
           res += temp;
         }
       }
     }
     return res.trim();
   }
   ```

   :::
