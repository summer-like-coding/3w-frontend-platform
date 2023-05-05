---
# 这是文章的标题
title: 数组基本概念
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-05
# 一个页面可以有多个分类
category:
  - 算法题解
# 一个页面可以有多个标签
tag:
  - 数组
---


## 定义

链表是指指针串在一起的线性数据结构

`ListNode`定义

```typescript
export default class ListNode{
    public val: number;
    public next: ListNode | null;
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}
```