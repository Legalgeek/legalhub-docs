import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: "zh-CN",
  title: "中文法律术语汇编",
  description: "Glossary of Chinese Legal Terms",

  theme: defaultTheme({
    // 在这里进行配置
    logo: "/images/logo-300-w.svg",
    logoDark: "/images/logo-300-b.svg",
    navbar: [
      // 字符串 - 页面文件路径
      
      {
        text: "项目简介",
        link: "/introduction/",
      },

      // NavbarGroup
      {
        text: "术语列表",
        children: [
          "/startup/",
          "/civil-law/",
          "/criminal-law/",
          "/jurisprudence/",
        ],
      },
      // NavbarItem
      {
        text: "参与项目",
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
      "/startup/": [
        {
          text: "快速上手",
          children: [
            "/civil-law/",
            "/criminal-law/",
            "/jurisprudence/",
          ],
        },
      ],
      "/criminal-law/": [
        {
          text: "刑法",
          children: ["/criminal-law/zongze.md", "/criminal-law/fenze-c1.md", "/criminal-law/fenze-c2.md", "/criminal-law/fenze-c3.md", "/criminal-law/fenze-c4.md", "/criminal-law/fenze-c5.md", "/criminal-law/fenze-c6.md", "/criminal-law/fenze-c7.md", "/criminal-law/fenze-c8.md", "/criminal-law/fenze-c9.md", "/criminal-law/fenze-c10.md"],
        },
      ],
    },
    locales:{
      '/': {
        
        // page meta
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdatedText: '上次更新',
        contributorsText: '贡献者',
        // custom containers
        tip: '提示',
        warning: '注意',
        danger: '警告',
        // 404 page
        notFound: [
          '这里什么都没有',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      }
    }
    
  }),
  plugins: [
    docsearchPlugin({
    appId: 'EC6G1N6CHD',
    apiKey: '5a92479103978f4a6d9edeb23feee731',
    indexName: 'terms-legalhub',
    }),
  ],
});
