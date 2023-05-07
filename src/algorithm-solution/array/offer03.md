---
# 这是文章的标题
title: Offer03-数组中重复的数字
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
  - 数组
---

## 题目链接
[数组中的重复数字](https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/)

## 题目描述
找数组中重复的数字

## 题目思路

1. 遍历使用`indexOf()`(用变量存储)
    ::: code-tabs#code
    @tab typescript

    ```typescript
    let num = -1
    nums.forEach((value,index)=>{
        if(nums.indexOf(value) !== index){
            num = value
        }
    })
    return num
    ```

2. 直接使用`indexOf()`(但是直接过滤)
    ::: code-tabs#code
    @tab typescript
    ```typescript
    let arr =  nums.filter((value,index)=>{
        return nums.lastIndexOf(value) !== index
    })
    return arr[0]
    ```

    但是这个方法会超时。

3. 使用`hash`来记录每个值出现的次数
    ::: code-tabs#code
    @tab typescript

    ```typescript
    let map:Map<number,number> = new Map()
    nums.forEach((value)=>{
        map.set(value,map.get(value) ? map.get(value) +1 : 1)
    })
    for(let [key,value] of map.entries()){
        if(value !== 1){
            return key
        }
    }
    return -1
    ```

4. 使用`set`,因为`set`，里面的值是唯一的
    ::: code-tabs#code
    @tab typescript

    ```typescript
    let set:Set<number> = new Set()
    for( const value of nums){
        if(set.has(value)){
            return value
        }
        set.add(value)
    }
    return -1
    ```

总结：
1. `Array.map()`，会对每一个`value`都执行一遍回调函数，并且回调函数需要一个`return`,否则就会是`undefined`。
2. `Array.filter()`,返回所有满足条件的`value`。
3. `Array.forEach()`，返回值是`undefined`,意思就是，`return` 会被丢弃，要想获取值，只能用一个变量去接。