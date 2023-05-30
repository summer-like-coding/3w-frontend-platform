---
title: Offer52-两个链表的第一个公共节点
author: summer
date: 2023-5-31
category:
  - 算法题解
  - 剑指Offer

tag:
  - 链表
---

### 题目链接

[两个链表的第一个公共节点](https://leetcode-cn.com/problems/liang-ge-lian-biao-de-di-yi-ge-gong-gong-jie-dian-lcof/)

### 题目描述

输入两个链表，找出它们的第一个公共节点。

### 题目思路

1. 使用`hash`
   遍历链表`A`，将节点存入`hash`表中  
   然后遍历链表`B`，判断节点是否在`hash`表中  
   如果在，则返回该节点  
   否则返回`null`

   ::: code-tabs#code

   @tab typescript

   ```typescript
   function getIntersectionNode(
     headA: ListNode | null,
     headB: ListNode | null
   ): ListNode | null {
     // 设置hash表
     let hash = new Set();
     // 遍历链表A
     while (headA) {
       hash.add(headA);
       headA = headA.next;
     }
     // 遍历链表B
     while (headB) {
       if (hash.has(headB)) {
         return headB;
       }
       headB = headB.next;
     }
     return null;
   }
   ```

   :::

注意:**`set`里面添加的一定是 listNode 类型的，不可以是`listNode.val`,这样会导致问题**

但是这种方法的时间复杂度为`O(n)`，空间复杂度为`O(n)`，不是最优解
