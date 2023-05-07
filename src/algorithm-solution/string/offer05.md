---
# 这是文章的标题
title: Offer05-替换空格
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

[替换空格](https://leetcode.cn/problems/ti-huan-kong-ge-lcof/)

## 题目描述

将字符串里面的的空格替换为`%20`

## 题目思路

1. 可以使用正则匹配方法

    ::: code-tabs#code
    @tab typescript

    ```typescript
    function replaceSpace(s: string): string {
        // ts，直接替换,但是需要lib在ES2021以上
        return s.replaceAll(" ",'%20')
    };
    ```

   但是存在一些问题，那就是你的`lib`需要在`ES2021`以上，因为`replaceAll()`是`ES6`以上的新语法。

2. 转为数组，然后拼接
    ::: code-tabs#code
    @tab typescript
   ```typescript
   function replaceSpace(s: string): string {
       return s.split(" ").join("%20")
   };
   ```

3. 遍历，在遍历中修改
    ::: code-tabs#code
    @tab typescript
   ```typescript
   function replaceSpace(s: string): string {
       let arr:String[] = s.split("")
       arr = arr.map((item, index) => {
           if (item === " ") {
               item = '%20'
           }
           return item
       })
       return arr.join("")
   };
   ```

   但是需要注意一些问题：

   1. `map`遍历永远不会改变原数组
   2. 你无法对`String`进行直接修改，如果想要修改，只能先复制，然会修改。
   3. 你可以将`String`理解为`string[]`,只是它是**只读**，不可直接修改。