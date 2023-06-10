import{_ as l,X as i,Y as u,a0 as p,a1 as a,Z as r,E as d,$ as n,a2 as s}from"./framework-71fc1c0e.js";const m={},k=r('<h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h3><p>有一块缓冲区，可以容纳 n 个数据。生产者进程和消费者进程共享该缓冲区，生产者进程向缓冲区中放入数据，消费者进程从缓冲区中取出数据。当缓冲区中没有数据时，消费者进程将被阻塞；当缓冲区中没有空闲位置时，生产者进程将被阻塞。</p><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3><p>我们可以那生活中的例子来解释:</p><ol><li>有一个手机生产商和买手机的顾客</li><li>手机生产商在生产的时候，顾客不可以买</li><li>顾客在买的时候，手机生产商不可以生产</li><li>在一开始的时候，手机生产商还没有生产<code>empty</code>,手机生产商会将商店装满<code>full</code></li></ol><p>按照上面的分析</p><ol><li>我们就需要引入一个互斥变量<code>mutex</code>，来表示，生产者和消费者是互斥的,<strong>值是唯一的，且只能是 1</strong></li><li>刚开始，商品个数为<code>0</code> &lt;=&gt; <code>n = 0</code>,<code>empty = 要生产的个数</code></li></ol><p>在生产者函数中，</p><ul><li>首先生产数据，<code>produce()</code></li><li>然后等待空缓冲区，<code>empty--</code></li><li>获取互斥锁，<code>mutex</code></li><li>将数据放入缓冲区，<code>append()</code></li><li>释放互斥锁，<code>mutex</code></li><li>发送满缓冲区的信号量。<code>n++</code></li></ul><p>在消费者函数中，</p><ul><li>首先等待满缓冲区，<code>n--</code></li><li>获取互斥锁，<code>mutex</code></li><li>从缓冲区取出数据，<code>take()</code></li><li>释放互斥锁，<code>mutex</code></li><li>发送空缓冲区的信号量，<code>empty++</code></li><li>最后消费数据。<code>consume()</code></li></ul><h3 id="伪代码描述" tabindex="-1"><a class="header-anchor" href="#伪代码描述" aria-hidden="true">#</a> 伪代码描述</h3><p><code>buffer</code>是用来存放数据的缓冲区，<code>buffer_size</code>是缓冲区的大小。<code>full</code>和<code>empty</code>分别是缓冲区满和空的信号量，它们的初值分别为 0 和<code>buffer_size</code>。<code>mutex</code>是一个互斥锁，用来保证同一时间只有一个线程可以访问缓冲区。<code>producer</code>和<code>consumer</code>分别是生产者和消费者的函数，它们无限循环，直到程序结束。</p>',13),b=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[s("  "),n("span",{class:"token keyword"},"int"),s(" mutex "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"int"),s(" empty "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token function"},"Sizeof"),n("span",{class:"token punctuation"},"("),s("product"),n("span",{class:"token punctuation"},")"),s(`

  `),n("span",{class:"token keyword"},"int"),s(" n "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
  `),n("span",{class:"token comment"},"// 生产者"),s(`
  function `),n("span",{class:"token function"},"producer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"produce"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 空间--"),s(`
      `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("empty"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 互斥"),s(`
      `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 生产"),s(`
      `),n("span",{class:"token function"},"append"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 互斥"),s(`
      `),n("span",{class:"token function"},"semSingal"),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 商品个数++"),s(`
      `),n("span",{class:"token function"},"semSingal"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token comment"},"// 消费者"),s(`
  function `),n("span",{class:"token function"},"consumer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 商品个数--"),s(`
      `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("n"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 最后消耗完，商品个数--"),s(`
      `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token function"},"take"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token function"},"semSingal"),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 空间++"),s(`
      `),n("span",{class:"token function"},"semSingal"),n("span",{class:"token punctuation"},"("),s("empty"),n("span",{class:"token punctuation"},")"),s(`
      `),n("span",{class:"token comment"},"// 消费者消费"),s(`
      `),n("span",{class:"token function"},"consume"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token operator"},"//"),s(` 定义互斥锁
mutex `),n("span",{class:"token operator"},"="),s(" Semaphore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token operator"},"//"),s(` 定义信号量
full `),n("span",{class:"token operator"},"="),s(" Semaphore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(`
empty `),n("span",{class:"token operator"},"="),s(" Semaphore"),n("span",{class:"token punctuation"},"("),s("buffer_size"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token operator"},"//"),s(` 生产者代码
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"producer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token boolean"},"True"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 生产数据
        data `),n("span",{class:"token operator"},"="),s(" produce_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 等待空缓冲区
        semWait`),n("span",{class:"token punctuation"},"("),s("empty"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 获取互斥锁
        semWait`),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 将数据放入缓冲区
        append`),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 释放互斥锁
        semSignal`),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 发送信号量
        semSignal`),n("span",{class:"token punctuation"},"("),s("full"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token operator"},"//"),s(` 消费者代码
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"consumer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token boolean"},"True"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 等待满缓冲区
        semWait`),n("span",{class:"token punctuation"},"("),s("full"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 获取互斥锁
        semWait`),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 从缓冲区取出数据
        take`),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 释放互斥锁
        semSignal`),n("span",{class:"token punctuation"},"("),s("mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 发送信号量
        semSignal`),n("span",{class:"token punctuation"},"("),s("empty"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 消费数据
        consumer`),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function f(h,x){const e=d("CodeTabs");return i(),u("div",null,[k,p(e,{id:"125",data:[{title:"c"},{title:"python"}]},{tab0:a(({title:t,value:c,isActive:o})=>[b]),tab1:a(({title:t,value:c,isActive:o})=>[v]),_:1})])}const y=l(m,[["render",f],["__file","producer-consumer.html.vue"]]);export{y as default};
