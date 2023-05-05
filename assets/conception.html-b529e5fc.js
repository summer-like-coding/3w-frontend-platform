import{_ as n,X as s,Y as a,Z as e}from"./framework-71fc1c0e.js";const t={},p=e(`<h2 id="定义" tabindex="-1"><a class="header-anchor" href="#定义" aria-hidden="true">#</a> 定义</h2><p>滑动窗口的本质其实就是双指针，使用<code>left</code>和<code>right</code>指针构成一个窗口</p><p>一般来说我们不固定窗口的大小，<code>left = 0,right = 0</code></p><p><code>right</code>指针：向右移动</p><p><code>left</code>指针：当<code>[left,right)</code>里面满足了条件，这时候我们的<code>left</code>就需要向右移动，直到不再满足条件</p><p>再次移动<code>right</code>，直到再次满足条件，然后一直循环，直到无法构成窗口</p><h2 id="滑动窗口解题模板" tabindex="-1"><a class="header-anchor" href="#滑动窗口解题模板" aria-hidden="true">#</a> 滑动窗口解题模板</h2><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">var</span> <span class="token function-variable function">minWindow</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>s<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> t<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">{</span>
    <span class="token comment">// need是target的集合</span>
    <span class="token keyword">const</span> need <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// window是当前选中框的集合</span>
    <span class="token keyword">const</span> window <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">number</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> value <span class="token keyword">of</span> t<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>need<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            need<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> need<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
            need<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// 设置两个边界，left和right</span>
    <span class="token keyword">let</span> left <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">let</span> right <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>

    <span class="token keyword">while</span> <span class="token punctuation">(</span>right <span class="token operator">&lt;</span> s<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">let</span> d <span class="token operator">=</span> s<span class="token punctuation">[</span>right<span class="token punctuation">]</span><span class="token punctuation">;</span>
        right<span class="token operator">++</span>
        <span class="token comment">//进行窗口内数据的更新</span>
        
        
        <span class="token comment">//当满足条件，进行收缩</span>
        <span class="token keyword">while</span> <span class="token punctuation">(</span>valid <span class="token operator">===</span> need<span class="token punctuation">.</span>size<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">if</span> <span class="token punctuation">(</span>right <span class="token operator">-</span> left <span class="token operator">&lt;</span> len<span class="token punctuation">)</span> <span class="token punctuation">{</span>
                start <span class="token operator">=</span> left
                len <span class="token operator">=</span> right <span class="token operator">-</span> left
            <span class="token punctuation">}</span>
            <span class="token comment">// 开始收缩</span>
            <span class="token keyword">let</span> e <span class="token operator">=</span> s<span class="token punctuation">[</span>left<span class="token punctuation">]</span>
            left<span class="token operator">++</span>
            <span class="token comment">//进行窗口的数据更新</span>
            
            
            <span class="token comment">//</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
    
    <span class="token keyword">return</span> <span class="token operator">...</span><span class="token punctuation">.</span>
<span class="token punctuation">}</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>个人觉得，滑动窗口一般都是给你两个字符串，然后在S中找T啥的</strong></p><p><strong>一定要注意好收缩的条件，就是啥时候收缩</strong></p>`,10),o=[p];function c(l,i){return s(),a("div",null,o)}const r=n(t,[["render",c],["__file","conception.html.vue"]]);export{r as default};
