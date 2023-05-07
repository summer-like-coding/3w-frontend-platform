import{_ as r,X as d,Y as k,$ as n,a2 as s,a0 as a,a1 as t,Z as u,E as p}from"./framework-71fc1c0e.js";const m={},v=n("h2",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),b={href:"https://leetcode.cn/problems/shu-zu-zhong-zhong-fu-de-shu-zi-lcof/",target:"_blank",rel:"noopener noreferrer"},h=n("h2",{id:"题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),s(" 题目描述")],-1),f=n("p",null,"找数组中重复的数字",-1),_=n("h2",{id:"题目思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目思路","aria-hidden":"true"},"#"),s(" 题目思路")],-1),y=n("p",null,[s("遍历使用"),n("code",null,"indexOf()"),s("(用变量存储)")],-1),w=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" num "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(`
nums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s("index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"indexOf"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"!=="),s(" index"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        num `),n("span",{class:"token operator"},"="),s(` value
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"return"),s(` num
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),g=u(`<li><p>直接使用<code>indexOf()</code>(但是直接过滤) ::: code-tab#code @tab typescript</p><div class="language-typescript line-numbers-mode" data-ext="ts"><pre class="language-typescript"><code><span class="token keyword">let</span> arr <span class="token operator">=</span>  nums<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span>value<span class="token punctuation">,</span>index<span class="token punctuation">)</span><span class="token operator">=&gt;</span><span class="token punctuation">{</span>
    <span class="token keyword">return</span> nums<span class="token punctuation">.</span><span class="token function">lastIndexOf</span><span class="token punctuation">(</span>value<span class="token punctuation">)</span> <span class="token operator">!==</span> index
<span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token keyword">return</span> arr<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>但是这个方法会超时。</p></li>`,1),x=n("p",null,[s("使用"),n("code",null,"hash"),s("来记录每个值出现的次数")],-1),E=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" map"),n("span",{class:"token operator"},":"),s("Map"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token punctuation"},","),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Map"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
nums`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"forEach"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},"=>"),n("span",{class:"token punctuation"},"{"),s(`
    map`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"set"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},","),s("map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"?"),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"get"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),n("span",{class:"token number"},"1"),s(),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),n("span",{class:"token keyword"},"let"),s(),n("span",{class:"token punctuation"},"["),s("key"),n("span",{class:"token punctuation"},","),s("value"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token keyword"},"of"),s(" map"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"entries"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("value "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` key
    `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),A=n("p",null,[s("使用"),n("code",null,"set"),s(",因为"),n("code",null,"set"),s("，里面的值是唯一的")],-1),z=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"let"),s(" set"),n("span",{class:"token operator"},":"),s("Set"),n("span",{class:"token operator"},"<"),n("span",{class:"token builtin"},"number"),n("span",{class:"token operator"},">"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Set"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"for"),n("span",{class:"token punctuation"},"("),s(),n("span",{class:"token keyword"},"const"),s(" value "),n("span",{class:"token keyword"},"of"),s(" nums"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"if"),n("span",{class:"token punctuation"},"("),s("set"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"has"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
        `),n("span",{class:"token keyword"},"return"),s(` value
    `),n("span",{class:"token punctuation"},"}"),s(`
    set`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"add"),n("span",{class:"token punctuation"},"("),s("value"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),C=u("<p>总结：</p><ol><li><code>Array.map()</code>，会对每一个<code>value</code>都执行一遍回调函数，并且回调函数需要一个<code>return</code>,否则就会是<code>undefined</code>。</li><li><code>Array.filter()</code>,返回所有满足条件的<code>value</code>。</li><li><code>Array.forEach()</code>，返回值是<code>undefined</code>,意思就是，<code>return</code> 会被丢弃，要想获取值，只能用一个变量去接。</li></ol>",2);function N(O,V){const i=p("ExternalLinkIcon"),e=p("CodeTabs");return d(),k("div",null,[v,n("p",null,[n("a",b,[s("数组中的重复数字"),a(i)])]),h,f,_,n("ol",null,[n("li",null,[y,a(e,{id:"20",data:[{title:"typescript"}],"tab-id":"code"},{tab0:t(({title:o,value:c,isActive:l})=>[w]),_:1})]),g,n("li",null,[x,a(e,{id:"39",data:[{title:"typescript"}],"tab-id":"code"},{tab0:t(({title:o,value:c,isActive:l})=>[E]),_:1})]),n("li",null,[A,a(e,{id:"49",data:[{title:"typescript"}],"tab-id":"code"},{tab0:t(({title:o,value:c,isActive:l})=>[z]),_:1})])]),C])}const I=r(m,[["render",N],["__file","offer03.html.vue"]]);export{I as default};