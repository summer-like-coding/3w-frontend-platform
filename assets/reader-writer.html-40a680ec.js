import{_ as l,X as i,Y as u,a0 as p,a1 as a,Z as r,E as k,$ as n,a2 as s}from"./framework-71fc1c0e.js";const d={},m=r('<h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述" aria-hidden="true">#</a> 问题描述</h3><ul><li><p>读者优先：如果有读者在等待，写者将无法进入临界区</p></li><li><p>写者优先：如果有写者在等待，读者将无法进入临界区</p></li></ul><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析" aria-hidden="true">#</a> 问题分析</h3><p>同样，我们使用生活中的例子:</p><ul><li>一个作者会有<strong>多个</strong>读者</li><li>作者在写作的时候，读者是不可以阅读的</li><li>读者在阅读的时候，作者是不可以写作的</li><li>并且，<strong>读者在阅读的时候，是一个个的读</strong></li></ul><p>按照上面的分析</p><ol><li>需要一个互斥变量<code>mutex</code>来表示，读者和作者是互斥的，<strong>值是唯一的，且只能是 1</strong></li><li>需要设置 reader_count 来表示当前有多少个读者在阅读，<strong>值是可以是多个的，且只能是正整数</strong></li></ol><p>在写者函数中，</p><ul><li>首先生产数据，</li><li>然后获取写互斥锁，</li><li>写入数据，</li><li>释放写互斥锁。</li></ul><p>在读者函数中，</p><ul><li>首先获取读互斥锁，</li><li>读者计数器加 1，</li><li>如果是第一个读者，获取写互斥锁，然后释放读互斥锁，</li><li>读取数据，</li><li>再次获取读互斥锁，</li><li>读者计数器减 1，</li><li>如果是最后一个读者，释放写互斥锁，最后释放读互斥锁，</li><li>处理数据。</li></ul><h3 id="伪代码" tabindex="-1"><a class="header-anchor" href="#伪代码" aria-hidden="true">#</a> 伪代码</h3><p><code>mutex</code>是一个互斥锁，用来保证同一时间只有一个线程可以访问共享资源。 <code>write_mutex</code>是一个写互斥锁，用来保证同一时间只有一个写者可以访问共享资源。 <code>read_mutex</code>是一个读互斥锁，用来保证同一时间只有一个读者可以修改读者计数器。 <code>read_count</code>是读者计数器，用来记录当前有多少个读者在访问共享资源。 <code>writer</code>和<code>reader</code>分别是写者和读者的函数，它们无限循环，直到程序结束。</p>',13),b=n("div",{class:"language-c line-numbers-mode","data-ext":"c"},[n("pre",{class:"language-c"},[n("code",null,[n("span",{class:"token comment"},"// 设置互斥变量"),s(`
`),n("span",{class:"token keyword"},"int"),s(" mutex"),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 设置读者数量"),s(`
`),n("span",{class:"token keyword"},"int"),s(" reader_count "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 设置读者锁"),s(`
`),n("span",{class:"token keyword"},"int"),s(" reader_lock "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 设置写者锁"),s(`
`),n("span",{class:"token keyword"},"int"),s(" writer_lock "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token comment"},"// 写者"),s(`
function `),n("span",{class:"token function"},"writer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 写者写的时候，读者不可以读"),s(`
    `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("writer_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 写者写"),s(`
    `),n("span",{class:"token function"},"write"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token function"},"semSignal"),n("span",{class:"token punctuation"},"("),s("writer_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token comment"},"// 读者"),s(`
function `),n("span",{class:"token function"},"reader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"while"),n("span",{class:"token punctuation"},"("),s("true"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// 获取读互斥锁"),s(`
    `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("reader_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 读者数量加一"),s(`
    reader_count`),n("span",{class:"token operator"},"++"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 判断是不是第一个读者，如果是，那么需要判断，写者是否在写"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("reader_count "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 如果写者在写，那么读者就需要等待"),s(`
      `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("writer_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"semSignal"),n("span",{class:"token punctuation"},"("),s("reader_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 读者读"),s(`
    `),n("span",{class:"token function"},"read"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 获取读互斥锁"),s(`
    `),n("span",{class:"token function"},"semWait"),n("span",{class:"token punctuation"},"("),s("reader_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 读者数量减一"),s(`
    reader_count`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token comment"},"// 如果是最后一个读者，那么需要判断，写者是否在写"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("reader_count "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// 如果写者在写，那么读者就需要等待"),s(`
      `),n("span",{class:"token function"},"semSignal"),n("span",{class:"token punctuation"},"("),s("writer_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token function"},"semSignal"),n("span",{class:"token punctuation"},"("),s("reader_lock"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token operator"},"//"),s(` 定义互斥锁和信号量
mutex `),n("span",{class:"token operator"},"="),s(" Semaphore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
write_mutex `),n("span",{class:"token operator"},"="),s(" Semaphore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
read_mutex `),n("span",{class:"token operator"},"="),s(" Semaphore"),n("span",{class:"token punctuation"},"("),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
read_count `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token number"},"0"),s(`
`),n("span",{class:"token operator"},"//"),s(` 写者代码
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"writer"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token boolean"},"True"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 获取写互斥锁
        semWait`),n("span",{class:"token punctuation"},"("),s("write_mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 写入数据
        write_data`),n("span",{class:"token punctuation"},"("),s("data"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 释放写互斥锁
        semSignal`),n("span",{class:"token punctuation"},"("),s("write_mutex"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token operator"},"//"),s(` 读者代码
`),n("span",{class:"token keyword"},"def"),s(),n("span",{class:"token function"},"reader"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},":"),s(`
    `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token boolean"},"True"),n("span",{class:"token punctuation"},":"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 获取读互斥锁
        semWait`),n("span",{class:"token punctuation"},"("),s("read_mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(" 读者计数器"),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),s(`
        read_count `),n("span",{class:"token operator"},"+="),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 如果是第一个读者，获取写互斥锁
        `),n("span",{class:"token keyword"},"if"),s(" read_count "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},":"),s(`
            semWait`),n("span",{class:"token punctuation"},"("),s("write_mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 释放读互斥锁
        semSignal`),n("span",{class:"token punctuation"},"("),s("read_mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 读取数据
        data `),n("span",{class:"token operator"},"="),s(" read_data"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 获取读互斥锁
        semWait`),n("span",{class:"token punctuation"},"("),s("read_mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(" 读者计数器"),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(`
        read_count `),n("span",{class:"token operator"},"-="),s(),n("span",{class:"token number"},"1"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 如果是最后一个读者，释放写互斥锁
        `),n("span",{class:"token keyword"},"if"),s(" read_count "),n("span",{class:"token operator"},"=="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},":"),s(`
            semSignal`),n("span",{class:"token punctuation"},"("),s("write_mutex"),n("span",{class:"token punctuation"},")"),s(`
        `),n("span",{class:"token operator"},"//"),s(` 释放读互斥锁
        semSignal`),n("span",{class:"token punctuation"},"("),s("read_mutex"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(h,w){const e=k("CodeTabs");return i(),u("div",null,[m,p(e,{id:"134",data:[{title:"c"},{title:"python"}]},{tab0:a(({title:t,value:o,isActive:c})=>[b]),tab1:a(({title:t,value:o,isActive:c})=>[v]),_:1})])}const x=l(d,[["render",_],["__file","reader-writer.html.vue"]]);export{x as default};
