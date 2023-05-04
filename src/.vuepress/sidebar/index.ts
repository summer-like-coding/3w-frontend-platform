import { sidebar } from "vuepress-theme-hope";

export const Sidebar = sidebar({
  "/": [
    "",
    {
      text: "案例",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文档",
      prefix: "guide/",
      children: "structure",
    },
    // 幻灯片
    // "slides",
  ],
});
