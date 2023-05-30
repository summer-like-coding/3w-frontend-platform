---
title: Offer25-合并两个排序的链表
author: summer
date: 2023-5-30
category:
  - 算法题解
  - 剑指Offer

tag:
  - 双指针
  - 链表
---

### 题目链接

[合并两个排序的链表](https://leetcode-cn.com/problems/he-bing-liang-ge-pai-xu-de-lian-biao-lcof/)

### 题目描述

输入两个递增排序的链表，合并这两个链表并使新链表中的节点仍然是递增排序的。

### 题目思路

1. 双指针
   为两个链表设置两个指针`p1`和`p2`  
   然后比较两个指针指向的节点的值，添加到新的链表上  
   然后再将剩下的节点添加到新的链表上即可

   ::: code-tabs#code
   @tab typescript

   ```typescript
   function mergeTwoLists(
     l1: ListNode | null,
     l2: ListNode | null
   ): ListNode | null {
     // 设置两个链表
     let cur1 = l1;
     let cur2 = l2;
     // 为新链表设置头节点
     let newHead = new ListNode(-1);
     let cur = newHead;
     // 开始遍历
     while (cur1 && cur2) {
       if (cur1.val < cur2.val) {
         cur.next = cur1;
         cur1 = cur1.next;
       } else {
         cur.next = cur2;
         cur2 = cur2.next;
       }
       // cur指针后移
       cur = cur.next;
     }
     //   将剩余链表补充到新链表中
     if (cur1) {
       cur.next = cur1;
     } else {
       cur.next = cur2;
     }
     return newHead.next;
   }
   ```

   :::
