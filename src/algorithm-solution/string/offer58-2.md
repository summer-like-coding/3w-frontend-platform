---
# 这是文章的标题
title: Offer58-2-左旋转字符串
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

## 题目描述
题目写了一大串，重要的一句：**把字符串前面的若干个字符转移到字符串的尾部**。

## 题目示例

```bash
输入: s = "abcdefg", k = 2
输出: "cdefgab"
```

```bash
输入: s = "lrloseumgh", k = 6
输出: "umghlrlose"
```

## 题目思路

1. 先裁剪出需要旋转到后面的数组，然后拼接
   ::: code-tabs#code
   @tab typescript 

   ```typescript
   function reverseLeftWords(s: string, n: number): string {
       // 第一种直接就是剪切n个，然后拼接到后面
       // 1 <= k < s.length <= 10000
       let arr = s.split("")
       let backArr = arr.splice(n)    
       return [...backArr, ...arr].join("")
   };
   ```

   注意点：

   2. 需要注意`Array.splice(startIndex,delCount,item)`

      会改变数组，改变的数组为被裁减后的数组

      会返回一个数组，返回的数组是，被裁减了的数组

   3. 注意`ES6`的解构赋值

2. 使用遍历，一个一个去旋转
   ::: code-tabs#code
   @tab typescript

   ```typescript
   function reverseLeftWords(s: string, n: number): string {
       let arr = s.split("")
       for (let i = 0; i < n; i++){
           let value = arr.shift()
           arr.push(value)
       }
       return arr.join("")
   };
   ```

   注意：**需要看一下循环里面是如何如理旋转的，一定是不可以颠倒的**

