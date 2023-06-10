---
title: 读者写者问题
author: Summer
data: 2023-06-10
category:
  - 操作系统
---

### 问题描述

- 读者优先：如果有读者在等待，写者将无法进入临界区

- 写者优先：如果有写者在等待，读者将无法进入临界区

### 问题分析

同样，我们使用生活中的例子:

- 一个作者会有**多个**读者
- 作者在写作的时候，读者是不可以阅读的
- 读者在阅读的时候，作者是不可以写作的
- 并且，**读者在阅读的时候，是一个个的读**

按照上面的分析

1. 需要一个互斥变量`mutex`来表示，读者和作者是互斥的，**值是唯一的，且只能是 1**
2. 需要设置 reader_count 来表示当前有多少个读者在阅读，**值是可以是多个的，且只能是正整数**

在写者函数中，

- 首先生产数据，
- 然后获取写互斥锁，
- 写入数据，
- 释放写互斥锁。

在读者函数中，

- 首先获取读互斥锁，
- 读者计数器加 1，
- 如果是第一个读者，获取写互斥锁，然后释放读互斥锁，
- 读取数据，
- 再次获取读互斥锁，
- 读者计数器减 1，
- 如果是最后一个读者，释放写互斥锁，最后释放读互斥锁，
- 处理数据。

### 伪代码

`mutex`是一个互斥锁，用来保证同一时间只有一个线程可以访问共享资源。 `write_mutex`是一个写互斥锁，用来保证同一时间只有一个写者可以访问共享资源。 `read_mutex`是一个读互斥锁，用来保证同一时间只有一个读者可以修改读者计数器。 `read_count`是读者计数器，用来记录当前有多少个读者在访问共享资源。
`writer`和`reader`分别是写者和读者的函数，它们无限循环，直到程序结束。

::: code-tabs
@tab c

```c
// 设置互斥变量
int mutex= 1;
// 设置读者数量
int reader_count = 0;
// 设置读者锁
int reader_lock = 1;
// 设置写者锁
int writer_lock = 1;
// 写者
function writer(){
  while(true){
    // 写者写的时候，读者不可以读
    semWait(writer_lock);
    // 写者写
    write();
    semSignal(writer_lock);
  }
}
// 读者
function reader(){
  while(true){
    // 获取读互斥锁
    semWait(reader_lock);
    // 读者数量加一
    reader_count++;
    // 判断是不是第一个读者，如果是，那么需要判断，写者是否在写
    if(reader_count == 0){
      // 如果写者在写，那么读者就需要等待
      semWait(writer_lock);
    }
    semSignal(reader_lock);
    // 读者读
    read();
    // 获取读互斥锁
    semWait(reader_lock);
    // 读者数量减一
    reader_count--;
    // 如果是最后一个读者，那么需要判断，写者是否在写
    if(reader_count == 0){
      // 如果写者在写，那么读者就需要等待
      semSignal(writer_lock);
    }
    semSignal(reader_lock);
  }
}
```

@tab python

```python
// 定义互斥锁和信号量
mutex = Semaphore(1)
write_mutex = Semaphore(1)
read_mutex = Semaphore(1)
read_count = 0
// 写者代码
def writer():
    while True:
        // 获取写互斥锁
        semWait(write_mutex)
        // 写入数据
        write_data(data)
        // 释放写互斥锁
        semSignal(write_mutex)
// 读者代码
def reader():
    while True:
        // 获取读互斥锁
        semWait(read_mutex)
        // 读者计数器+1
        read_count += 1
        // 如果是第一个读者，获取写互斥锁
        if read_count == 1:
            semWait(write_mutex)
        // 释放读互斥锁
        semSignal(read_mutex)
        // 读取数据
        data = read_data()
        // 获取读互斥锁
        semWait(read_mutex)
        // 读者计数器-1
        read_count -= 1
        // 如果是最后一个读者，释放写互斥锁
        if read_count == 0:
            semSignal(write_mutex)
        // 释放读互斥锁
        semSignal(read_mutex)
```
:::