---
title: Offer22-链表中倒数第k个节点
anthor: summer
date: 2023-05-30
category:
  - 算法题解
  - 剑指Offer
tag:
  - 双指针
  - 链表
---

### 题目链接

[链表中倒数第 k 个节点](https://leetcode-cn.com/problems/lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof/)

### 题目描述

给定一个链表: `listNode`，请返回倒数第 `k` 个节点的值。规定下标从`1`开始

### 题目思路

1. 双指针
   使用两个指针`fast`和`slow`,保证他们之间距离`k`个节点  
   当`fast`指针到达链表尾部时，`slow`指针指向的就是倒数第`k`个节点

   ::: code-tabs#code
   @tab typescript

   ```typescript
   function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
     // 设置两个指针，快慢指针，两者相距k个节点
     let fast = head;
     let slow = head;
     // 两者相距k个节点
     while (k > 0) {
       fast = fast.next;
       k--;
     }
     // 快慢指针一起走
     while (fast) {
       fast = fast.next;
       slow = slow.next;
     }
     return slow;
   }
   ```

   :::

2. 常规做法
   获取整个链表长度`len`，然后遍历到`len-k`个节点即可

   ::: code-tabs#code
   @tab typescript

   ```typescript
   function getKthFromEnd(head: ListNode | null, k: number): ListNode | null {
     // 首先找到倒数第k个节点
     // 获取当前链表长度
     let len = 0;
     let cur = head;
     while (cur) {
       len++;
       cur = cur.next;
     }
     // 获取倒数第k个节点
     let index = len - k;
     cur = head;
     while (index > 0) {
       cur = cur.next;
       index--;
     }
     return cur;
   }
   ```

   :::
