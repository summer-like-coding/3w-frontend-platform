---
# 这是文章的标题
title: 滑动窗口基本概念
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
  - 滑动窗口
---


## 定义

滑动窗口的本质其实就是双指针，使用`left`和`right`指针构成一个窗口

一般来说我们不固定窗口的大小，`left = 0,right = 0`

`right`指针：向右移动

`left`指针：当`[left,right)`里面满足了条件，这时候我们的`left`就需要向右移动，直到不再满足条件

再次移动`right`，直到再次满足条件，然后一直循环，直到无法构成窗口

## 滑动窗口解题模板

```typescript
var minWindow = function (s:string, t:string) : string{
    // need是target的集合
    const need = new Map<string, number>();
    // window是当前选中框的集合
    const window = new Map<string, number>();
    for (let value of t) {
        if (need.has(value)) {
            need.set(value, need.get(value) + 1)
        } else {
            need.set(value, 1)
        }
    }

    // 设置两个边界，left和right
    let left = 0;
    let right = 0;

    while (right < s.length) {
        let d = s[right];
        right++
        //进行窗口内数据的更新
        
        
        //当满足条件，进行收缩
        while (valid === need.size) {
            if (right - left < len) {
                start = left
                len = right - left
            }
            // 开始收缩
            let e = s[left]
            left++
            //进行窗口的数据更新
            
            
            //
        }
    }
    
    return ....
};
```

**个人觉得，滑动窗口一般都是给你两个字符串，然后在S中找T啥的**

**一定要注意好收缩的条件，就是啥时候收缩**