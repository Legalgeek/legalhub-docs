import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'



export default defineUserConfig({
  lang: 'zh-CN',
  title: '中国法律术语汇编',
  description: 'Glossary of Chinese Legal Terms',

  theme: defaultTheme({
    // 在这里进行配置
    logo: '/images/logo.png',
    navbar: [
        
        // NavbarGroup
        {
          text: '术语分类',
          children: ['/civil_law/README.md', '/criminal_law/README.md'],
        },
        // NavbarItem
        {
            text: '团队成员',
            link: '/contributing/',
          },
        // 字符串 - 页面文件路径
        '/contributing.md',
      ],
  })
})

