---
# 这是文章的标题
title: 广度优先算法基本概念
# 这是侧边栏的顺序
order: 1
# 设置作者
author: Summer
# 设置写作时间
date: 2023-05-05
# 一个页面可以有多个分类
category:
  - 算法题解
# 一个页面可以有多个标签
tag:
  - BFS
---


## 核心概念

`BFS`一般都是解决：从一个点到一个点的**最短**距离和层序遍历问题

`BFS`的核心其实就是处理一个队列`queue`,不断地压入和弹出数据，进行判断，他是不是距离最近的那个节点

## 模板

```typescript
// 判断最小次数
function BFS(start:number,target:number): number {
    // BFS基本，首先新建一个队列
    const queue: string[] = new Array();
    // 设置一个set，表示已访问的点
    const visited = new Set()
    // 将start加入到queue里面
    queue.push(start)
    // 设置次数
    let count = 0
    while (queue.length) {
        // BFS需要层层遍历
        let size = queue.length;
        // 遍历
        for (let i = 0; i < size; i++){
            let cur= queue.shift()
            // 将周边的节点放进去
            for (let i = 0; i < cur.length; i++){
                if (!visited.has(up)) {
                    queue.push(up)
                    visited.add(up)
                }
            }

        }
        count++
    }
    return -1
};
```
