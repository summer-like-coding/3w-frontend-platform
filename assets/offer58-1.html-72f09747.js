import{_ as u,X as r,Y as k,$ as n,a2 as s,a0 as a,a1 as e,E as o}from"./framework-71fc1c0e.js";const d={},m=n("h3",{id:"题目链接",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目链接","aria-hidden":"true"},"#"),s(" 题目链接")],-1),b={href:"https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof/",target:"_blank",rel:"noopener noreferrer"},v=n("h3",{id:"题目描述",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目描述","aria-hidden":"true"},"#"),s(" 题目描述")],-1),f=n("p",null,"输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。 但是需要注意:",-1),h=n("ul",null,[n("li",null,"输入字符串可以在前面或者后面包含多余的空格，但是反转后的字符不能包括"),n("li",null,"反转单词之间只有一个空格")],-1),_=n("h3",{id:"题目思路",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#题目思路","aria-hidden":"true"},"#"),s(" 题目思路")],-1),g=n("p",null,"可以将字符串转化为数组,然后再将数组转变为字符串",-1),y=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reverseWords"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 将字符串转化为数组"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" arr "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 去除数组中的空字符串"),s(`
  arr `),n("span",{class:"token operator"},"="),s(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"filter"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),s("item"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(" item "),n("span",{class:"token operator"},"!=="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 反转数组"),s(`
  arr`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"reverse"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 将数组转化为字符串"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" arr"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"join"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("p",null,"使用双指针,从后往前去寻找单词,遇到空格,就将单词添加到结果中",-1),x=n("div",{class:"language-typescript line-numbers-mode","data-ext":"ts"},[n("pre",{class:"language-typescript"},[n("code",null,[n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"reverseWords"),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),n("span",{class:"token punctuation"},")"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token builtin"},"string"),s(),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token comment"},"// 采用双指针，从后往前进行遍历，遇到空格就将单词添加到结果中"),s(`
  `),n("span",{class:"token comment"},"// 首先去除字符串首尾的空格"),s(`
  s `),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" left "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" right "),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),s("length "),n("span",{class:"token operator"},"-"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 结果字符串"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" res "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token comment"},"// 设置临时字符串，用于存储单词"),s(`
  `),n("span",{class:"token keyword"},"let"),s(" temp "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},'""'),n("span",{class:"token punctuation"},";"),s(`
  `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},">="),s(),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token comment"},"// left 指针指向空格，说明遇到了单词"),s(`
    `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
      temp `),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
      res `),n("span",{class:"token operator"},"+="),s(" temp "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// 跳过单词之间的空格"),s(`
      `),n("span",{class:"token keyword"},"while"),s(),n("span",{class:"token punctuation"},"("),s("s"),n("span",{class:"token punctuation"},"["),s("left"),n("span",{class:"token punctuation"},"]"),s(),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token string"},'" "'),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        left`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
      `),n("span",{class:"token comment"},"// right 指针指向单词的最后一个字母"),s(`
      right `),n("span",{class:"token operator"},"="),s(" left"),n("span",{class:"token punctuation"},";"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(),n("span",{class:"token keyword"},"else"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token comment"},"// left 指针不指向空格，left 指针继续向前移动"),s(`
      left`),n("span",{class:"token operator"},"--"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token comment"},"// 如果 left 指针指向了-1，说明遍历到了字符串的开头，此时将第一个单词添加到结果中"),s(`
      `),n("span",{class:"token keyword"},"if"),s(),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"==="),s(),n("span",{class:"token operator"},"-"),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token punctuation"},"{"),s(`
        temp `),n("span",{class:"token operator"},"="),s(" s"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"substring"),n("span",{class:"token punctuation"},"("),s("left "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},","),s(" right "),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
        res `),n("span",{class:"token operator"},"+="),s(" temp"),n("span",{class:"token punctuation"},";"),s(`
      `),n("span",{class:"token punctuation"},"}"),s(`
    `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
  `),n("span",{class:"token keyword"},"return"),s(" res"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"trim"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},";"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function C(E,B){const c=o("ExternalLinkIcon"),t=o("CodeTabs");return r(),k("div",null,[m,n("p",null,[n("a",b,[s("翻转单词顺序"),a(c)])]),v,f,h,_,n("ol",null,[n("li",null,[g,a(t,{id:"32",data:[{title:"typescript"}],"tab-id":"code"},{tab0:e(({title:l,value:p,isActive:i})=>[y]),_:1})]),n("li",null,[w,a(t,{id:"42",data:[{title:"typescript"}],"tab-id":"code"},{tab0:e(({title:l,value:p,isActive:i})=>[x]),_:1})])])])}const T=u(d,[["render",C],["__file","offer58-1.html.vue"]]);export{T as default};
