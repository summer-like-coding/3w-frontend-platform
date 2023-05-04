import { hopeTheme } from "vuepress-theme-hope";
import { Navbar } from "./navbar/index.js";
import { Sidebar } from "./sidebar/index.js";

export default hopeTheme({
  // 当前网站需要部署到的域名
  hostname: "https://summer.alexsun.top/3w-frontend-platform/",

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "summer-like-coding/3w-frontend-platform",

  docsDir: "src",
  //可以在locales里，为多种语言进行不同的配置

  // navbar
  navbar: Navbar,

  // sidebar
  sidebar: Sidebar,

  footer: "默认页脚",

  displayFooter: true,

  // page meta
  metaLocales: {
    editLink: "在 GitHub 上编辑此页",
  },

  plugins: {
    // all features are enabled for demo, only preserve features you need here
    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      demo: true,
      echarts: true,
      figure: true,
      flowchart: true,
      gfm: true,
      imgLazyload: true,
      imgSize: true,
      include: true,
      katex: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      // 幻灯片，暂时用不到
      // presentation: {
      //   plugins: ["highlight", "math", "search", "notes", "zoom"],
      // },
      stylize: [
        {
          matcher: "Recommended",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommended",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      vPre: true,
      vuePlayground: true,
    },
  },
});
