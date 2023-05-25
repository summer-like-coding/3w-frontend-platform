---
# 这是文章的标题
title: Offer50-第一个只出现一次的字符
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
  - 字符串
---

## 题目链接

[第一个只出现一次的字符](https://leetcode-cn.com/problems/di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof/)

## 题目描述

在字符串 `s` 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 `s` 只包含小写字母。

## 题目思路

使用`Map`来存储每个字符出现的次数，然后遍历`Map`，找到第一个出现次数为`1`的字符，返回即可

::: code-tabs#code
@tab typescript

```typescript
function firstUniqChar(s: string): string {
  // 1. 哈希表
  // 2. 计算每个字符出现个数
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }
  // 3. 遍历哈希表，找到第一个出现次数为1的字符
  for (let [key, value] of map) {
    if (value === 1) {
      return key;
    }
  }
  return " ";
}
```
