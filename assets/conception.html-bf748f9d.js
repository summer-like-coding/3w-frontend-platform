import{_ as n,X as s,Y as a,Z as e}from"./framework-71fc1c0e.js";const c={},t=e(`<p>回溯本质其实就是穷举，就是一种暴力解，回溯的复杂度会比较高。</p><h2 id="回溯解决的问题" tabindex="-1"><a class="header-anchor" href="#回溯解决的问题" aria-hidden="true">#</a> 回溯解决的问题</h2><p>组合问题：<code>N</code>个数里面按一定规则找出<code>k</code>个数的集合</p><p>切割问题：一个字符串按一定规则有几种切割方式</p><p>子集问题：一个<code>N</code>个数的集合里有符合条件的子集</p><p>排列问题：<code>N</code>个数按一定规则全排列，有几种排列方式</p><p>棋盘问题：<code>N</code>皇后，解数独</p><h2 id="基本模板" tabindex="-1"><a class="header-anchor" href="#基本模板" aria-hidden="true">#</a> 基本模板</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">function</span> <span class="token function">backtracking</span><span class="token punctuation">(</span>参数<span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span>终止条件<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        存放结果<span class="token punctuation">;</span>
        <span class="token keyword">return</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">for</span> <span class="token punctuation">(</span>选择：本层集合中元素（树中节点孩子的数量就是集合的大小）<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        处理节点<span class="token punctuation">;</span>
        <span class="token function">backtracking</span><span class="token punctuation">(</span>路径，选择列表<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 递归</span>
        回溯，撤销处理结果
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,9),p=[t];function i(o,l){return s(),a("div",null,p)}const u=n(c,[["render",i],["__file","conception.html.vue"]]);export{u as default};
