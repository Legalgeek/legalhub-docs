import { defineUserConfig } from 'vuepress'
import { defaultTheme } from '@vuepress/theme-default'



export default defineUserConfig({
  lang: 'zh-CN',
  title: '中文法律术语汇编',
  description: 'Glossary of Chinese Legal Terms',

  theme: defaultTheme({
    // 在这里进行配置
    logo: '/images/logo.png',
    navbar: [
      // 字符串 - 页面文件路径
        '/introduction/README.md',
        
        // NavbarGroup 
        {
          text: '术语列表',
          children: ['/idea/','/civil-law/', '/criminal-law/','/jurisprudence/'],
        },
        // NavbarItem
        {
            text: '贡献列表',
            link: '/contributing/',
          },
        // 字符串 - 页面文件路径
        // '/contributing.md',
      ],
  })
})

