import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
    {
      text: "算法题解",
      prefix: "algorithm-solution/",
      link: "algorithm-solution/",
      // 设置structure会根据本地文件，自动生成侧边栏
      children: "structure",
    },
    {
      text: "掘金小册阅读感悟",
      prefix: "booklet/",
      link: "booklet/",
      // 设置structure会根据本地文件，自动生成侧边栏
      children: "structure",
    },
    {
      text:"杂项",
      prefix:"others",
      link:"others/",
      children:"structure"
    }
    // 幻灯片
    // "slides",
  ],
});
