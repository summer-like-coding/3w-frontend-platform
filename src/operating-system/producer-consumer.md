---
title: 生产者消费者问题
author: Summer
data: 2023-06-10
category:
  - 操作系统
---

### 问题描述

有一块缓冲区，可以容纳 n 个数据。生产者进程和消费者进程共享该缓冲区，生产者进程向缓冲区中放入数据，消费者进程从缓冲区中取出数据。当缓冲区中没有数据时，消费者进程将被阻塞；当缓冲区中没有空闲位置时，生产者进程将被阻塞。

### 问题分析

我们可以那生活中的例子来解释:

1. 有一个手机生产商和买手机的顾客
2. 手机生产商在生产的时候，顾客不可以买
3. 顾客在买的时候，手机生产商不可以生产
4. 在一开始的时候，手机生产商还没有生产`empty`,手机生产商会将商店装满`full`

按照上面的分析

1. 我们就需要引入一个互斥变量`mutex`，来表示，生产者和消费者是互斥的,**值是唯一的，且只能是 1**
2. 刚开始，商品个数为`0` <=> `n = 0`,`empty = 要生产的个数`

在生产者函数中，

- 首先生产数据，`produce()`
- 然后等待空缓冲区，`empty--`
- 获取互斥锁，`mutex`
- 将数据放入缓冲区，`append()`
- 释放互斥锁，`mutex`
- 发送满缓冲区的信号量。`n++`

在消费者函数中，

- 首先等待满缓冲区，`n--`
- 获取互斥锁，`mutex`
- 从缓冲区取出数据，`take()`
- 释放互斥锁，`mutex`
- 发送空缓冲区的信号量，`empty++`
- 最后消费数据。`consume()`

### 伪代码描述

`buffer`是用来存放数据的缓冲区，`buffer_size`是缓冲区的大小。`full`和`empty`分别是缓冲区满和空的信号量，它们的初值分别为 0 和`buffer_size`。`mutex`是一个互斥锁，用来保证同一时间只有一个线程可以访问缓冲区。`producer`和`consumer`分别是生产者和消费者的函数，它们无限循环，直到程序结束。

::: code-tabs
@tab c

```c
  int mutex = 1;
  int empty = Sizeof(product)

  int n = 0
  // 生产者
  function producer(){
    while(true){
      produce()
      // 空间--
      semWait(empty)
      // 互斥
      semWait(mutex)
      // 生产
      append()
      // 互斥
      semSingal(mutex)
      // 商品个数++
      semSingal(n)
    }
  }
  // 消费者
  function consumer(){
    while(true){
      // 商品个数--
      semWait(n)
      // 最后消耗完，商品个数--
      semWait(mutex)
      take()
      semSingal(mutex)
      // 空间++
      semSingal(empty)
      // 消费者消费
      consume()
    }
  }
```

@tab python

```python
// 定义互斥锁
mutex = Semaphore(1)
// 定义信号量
full = Semaphore(0)
empty = Semaphore(buffer_size)
// 生产者代码
def producer():
    while True:
        // 生产数据
        data = produce_data()
        // 等待空缓冲区
        semWait(empty)
        // 获取互斥锁
        semWait(mutex)
        // 将数据放入缓冲区
        append(data)
        // 释放互斥锁
        semSignal(mutex)
        // 发送信号量
        semSignal(full)
// 消费者代码
def consumer():
    while True:
        // 等待满缓冲区
        semWait(full)
        // 获取互斥锁
        semWait(mutex)
        // 从缓冲区取出数据
        take()
        // 释放互斥锁
        semSignal(mutex)
        // 发送信号量
        semSignal(empty)
        // 消费数据
        consumer(data)
```

:::
