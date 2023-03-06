import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: "zh-CN",
  title: "中文法律术语汇编",
  description: "Glossary of Chinese Legal Terms",

  theme: defaultTheme({
    // 在这里进行配置
    logo: "/images/logo.png",
    navbar: [
      // 字符串 - 页面文件路径
      "/introduction/README.md",

      // NavbarGroup
      {
        text: "术语列表",
        children: [
          "/idea/",
          "/civil-law/",
          "/criminal-law/",
          "/jurisprudence/",
        ],
      },
      // NavbarItem
      {
        text: "贡献列表",
        link: "/contributing/",
      },
      // 字符串 - 页面文件路径
      // '/contributing.md',
    ],
    sidebar: {
      "/civil-law/": [
        {
          text: "民法术语",
          children: [
            "/civil-law/zongze.md",
            "/civil-law/wuquan.md",
            "/civil-law/hetong.md",
            "/civil-law/rengequan.md",
            "/civil-law/hunyinjiating.md",
            "/civil-law/jicheng.md",
            "/civil-law/qinquanzeren.md",
          ],
        },
      ],
      "/criminal-law/": [
        {
          text: "刑法",
          children: ["/criminal-law/zongze.md", "/criminal-law/fenze.md"],
        },
      ],
    }
    
  }),
  plugins: [
    docsearchPlugin({
    appId: '34YFD9IUQ2',
    apiKey: '9a9058b8655746634e01071411c366b8',
    indexName: 'vuepress',
    }),
  ],
});
