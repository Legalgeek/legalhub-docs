import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { docsearchPlugin } from '@vuepress/plugin-docsearch'

export default defineUserConfig({
  lang: "zh-CN",
  title: "LegalHub 文档中心",
  description: "Collection of Chinese Legal Knowledge Resources",

  theme: defaultTheme({
    // 在这里进行配置
    logo: "/images/logo-300-g.svg",
    logoDark: "/images/logo-300-g.svg",
    navbar: [
      // 字符串 - 页面文件路径
      
      // {
      //   text: "项目简介",
      //   link: "/introduction/",
      // },

      // NavbarGroup
      {
        text: "文档列表",
        children: [
          "/cat/",
          // "/legis/",
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
      "/cat/": [
        {
          text: "Cat 文档",
          children: [
            "/cat/start.md",
            "/cat/list.md",
            "/cat/tips.md"
          ],
        },
      ],
      "/legis/": [
        {
          text: "Legis 文档（施工中）",
          children: [
            "/legis/start.md",
            "/legis/list.md",
            "/legis/tips.md"
          ],
        },
      ],
      "/startup/": [
        {
          text: "快速上手",
          children: [
            "/cat/",
          ],
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
    appId: '25U0QLGFN0',
    apiKey: 'caeca74829a27ee00f47dcfd9975ad55',
    indexName: 'legalhub',
    }),
  ],
});
