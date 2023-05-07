---
# 这是文章的标题
title: 链表基本概念
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-07
# 一个页面可以有多个分类
category:
  - 算法题解
# 一个页面可以有多个标签
tag:
  - 链表
---


## 定义

链表是指指针串在一起的线性数据结构

## 类型

为了在本地也可以非常愉快的写链表题，我们可以定义`LinkList`类型

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

`创建链表`  
一般情况下，力扣给的都是一个数组，这时候我们就需要将数组转为链表

```typescript
export function createLinkedList(arr:number[]):ListNode {
    if (arr.length === 0) {
        return null
    }
    let head = new ListNode(arr[0])
    let current = head;
    for (let i = 1; i < arr.length; i++){
        current.next = new ListNode(arr[i])
        current = current.next
    }
    return head
}
```

`打印链表`  
有时候，做题目的时候我们需要将链表打印出来，判断是否符合预期

```typescript
export function printLinkedList(head: ListNode): number[]{
    let res:number[] = []
    let current = head;
    while (current !== null) {
        // console.log(current.val + "->")
        res.push(current.val)
        current = current.next
    }
    // console.log("Null")
    return res
}
```

