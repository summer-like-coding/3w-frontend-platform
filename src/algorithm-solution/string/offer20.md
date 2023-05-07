---
# 这是文章的标题
title: Offer20-表示数值的字符串
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-05
# 一个页面可以有多个分类
category:
  - 算法题解
  - 剑指Offer
# 一个页面可以有多个标签
tag:
  - 字符串
---

## 题目链接
[表示数值的字符串](https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/)

## 题目描述

判断这个数是不是数值，其实就是类似于实现一个`Number()`

## 题目思路

1. 官方并没有说，不可以使用库，所以浅浅使用

    ::: code-tabs#code
    @tab typescript

    ```typescript
      function isNumber(s: string): boolean {
          // 其实就是实现Number()
          if(s == ''){
              return false
          }else{
              return Number.isNaN(Number(s)) ? false : true
          }
      };
    ```

2. 使用正则匹配，我还没看明白🥲🥲🥲

    ::: code-tabs#code
    @tab typescript

    ```typescript
      function isNumber(s: string): boolean {
          s=s.trim()
          return /^(\+|\-)?(\d+(\.\d*)?|\.\d+)((e|E)(\+|\-)?\d+)?$/.test(s)
      };

    ```

