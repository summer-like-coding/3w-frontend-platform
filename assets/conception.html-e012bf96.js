import{_ as n,X as s,Y as a,Z as t}from"./framework-71fc1c0e.js";const e={},p=t(`<h2 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念" aria-hidden="true">#</a> 核心概念</h2><p><code>BFS</code>一般都是解决：从一个点到一个点的<strong>最短</strong>距离和层序遍历问题</p><p><code>BFS</code>的核心其实就是处理一个队列<code>queue</code>,不断地压入和弹出数据，进行判断，他是不是距离最近的那个节点</p><h2 id="模板" tabindex="-1"><a class="header-anchor" href="#模板" aria-hidden="true">#</a> 模板</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token comment">// 判断最小次数</span>
<span class="token keyword">function</span> <span class="token constant">BFS</span><span class="token punctuation">(</span>start<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">,</span>target<span class="token operator">:</span><span class="token builtin">number</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">number</span> <span class="token punctuation">{</span>
    <span class="token comment">// BFS基本，首先新建一个队列</span>
    <span class="token keyword">const</span> queue<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name"><span class="token builtin">Array</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 设置一个set，表示已访问的点</span>
    <span class="token keyword">const</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment">// 将start加入到queue里面</span>
    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>start<span class="token punctuation">)</span>
    <span class="token comment">// 设置次数</span>
    <span class="token keyword">let</span> count <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span> <span class="token punctuation">(</span>queue<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// BFS需要层层遍历</span>
        <span class="token keyword">let</span> size <span class="token operator">=</span> queue<span class="token punctuation">.</span>length<span class="token punctuation">;</span>
        <span class="token comment">// 遍历</span>
        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> size<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token keyword">let</span> cur<span class="token operator">=</span> queue<span class="token punctuation">.</span><span class="token function">shift</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token comment">// 将周边的节点放进去</span>
            <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> cur<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>visited<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                    queue<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span>
                    visited<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>up<span class="token punctuation">)</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>

        <span class="token punctuation">}</span>
        count<span class="token operator">++</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">return</span> <span class="token operator">-</span><span class="token number">1</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(e,[["render",c],["__file","conception.html.vue"]]);export{r as default};
