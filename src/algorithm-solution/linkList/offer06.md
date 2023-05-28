---
# 这是文章的标题
title: Offer06-从尾到头打印这个链表
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-07
# 一个页面可以有多个分类
category:
  - 算法题解
  - 剑指Offer
# 一个页面可以有多个标签
tag:
  - 链表
---

## 题目链接

[从尾到头打印这个链表](https://leetcode.cn/problems/cong-wei-dao-tou-da-yin-lian-biao-lcof/)

## 题目描述

输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

## 题目思路

1.  题目要求返回一个数组，所以可以将数组反转
    :::code-tabs#code
    @tab typescript

    ```typescript
    function reversePrint(head: ListNode | null): number[] {
      // 因为返回结果为数组，直接reverse
      let res: number[] = [];
      while (head !== null) {
        res.push(head.val);
        head = head.next;
      }
      return res.reverse();
    }
    ```

2.  将链表反转以后，然后再将链表一个一个打印出来
    :::code-tabs#code
    @tab typescript
    ```typescript
    function reversePrint(head: ListNode | null): number[] {
      let pre: ListNode | null = null;
      let cur: ListNode | null = head;
      let next: ListNode | null = null;
      const res: number[] = [];
      // 遍历链表
      while (cur !== null) {
        // 搞好退路
        next = cur.next;
        // 反转
        cur.next = pre;
        // 更新指针
        pre = cur;
        cur = next;
      }
      // 此时pre指向反转后的头结点
      // 遍历打印反转链表
      while (pre !== null) {
        res.push(pre.val);
        pre = pre.next;
      }
      return res;
    }
    ```
    注意：
    1.  如何去反转链表，一定是需要**三个指针**，分别表示`pre`,`cur`,`next`
    2.  注意他们三个指针的替换顺序
