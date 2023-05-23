---
# 这是文章的标题
title: Offer18-删除链表里面的节点
# 这是侧边栏的顺序
# order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-23
# 一个页面可以有多个分类
category:
  - 算法题解
  - 剑指Offer
# 一个页面可以有多个标签
tag:
  - 双指针
---

## 题目链接

[删除链表里面的节点](https://leetcode-cn.com/problems/shan-chu-lian-biao-de-jie-dian-lcof/)

## 题目描述

给定单向链表的头指针和一个要删除的节点的值，定义一个函数删除该节点。
返回删除的链表的头节点

## 题目思路

1. 依次遍历链表，直到遇到`val`,直接跳过这个节点
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function deleteNode(head: ListNode | null, val: number): ListNode | null {
     if (!head) return null;
     // 但是这个需要排除节点是head节点情况
     if (current.val === val) {
       return current.next;
     }
     let node = head;
     while (node.next) {
       if (node.next.val === val) {
         node.next = node.next.next;
         break;
       }
       node = node.next;
     }
     return head;
   }
   ```

2. 指针指向当前节点
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function deleteNode(head: ListNode | null, val: number): ListNode | null {
     // 使用一个虚拟头节点
     let dummyHead = head;
     while (dummyHead !== null) {
       // 需要处理删除节点是最后一个节点的情况
       if (dummyHead.val === val && dummyHead.next !== null) {
         dummyHead.val = dummyHead.next.val;
         dummyHead.next = dummyHead.next.next;
         break;
       }
       // 如果删除的节点是最后一个节点，那么直接删除那个节点
       if (dummyHead.val === val && dummyHead.next === null) {
         dummyHead = null;
         // wa
         break;
       }
       dummyHead = dummyHead.next;
     }
     return head;
   }
   ```

   但是这种会出现问题，最后的节点无法删除，因为无法找到前一个节点

3. 使用双指针，一个指针指向当前节点，一个指针指向前一个节点
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function deleteNode(head: ListNode | null, val: number): ListNode | null {
     // 使用一个虚拟头节点
     let dummyHead = new ListNode(-1);
     dummyHead.next = head;
     let pre = dummyHead;
     let current = head;
     while (current !== null) {
       if (current.val === val) {
         pre.next = current.next;
         break;
       }
       pre = current;
       current = current.next;
     }
     return dummyHead.next;
   }
   ```
