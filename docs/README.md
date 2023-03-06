---
home: true
title: 首页
heroImage: /images/logo-300.svg
actions:
  - text: 快速上手
    link: /get-started/
    type: primary
  - text: 项目简介
    link: /introduction/
    type: secondary
features:
  - title: 简约至上
    details: 轻量优雅的交互方式，让您快速掌握，专注于知识内容本身。
  - title: 持续更新
    details: 通过搭建内容生产、上线、更新的自动化流程，让知识保持最新。
  - title: 保持开放
    details: 开源项目，支持非商业化利用，欢迎为网站的可持续发展作出贡献。

footer: CC BY-NC-SA 4.0 |  © 2023 LegalGeek
---

### 快速参与该项目

<CodeGroup>
  <CodeGroupItem title="Github" active>

```bash
# 在你的项目中安装
pnpm add -D vuepress@next @vuepress/client@next vue

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
pnpm vuepress dev

# 构建静态文件
pnpm vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="YARN">

```bash
# 在你的项目中安装
yarn add -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
yarn vuepress dev

# 构建静态文件
yarn vuepress build
```

  </CodeGroupItem>

  <CodeGroupItem title="NPM">

```bash
# 在你的项目中安装
npm install -D vuepress@next

# 新建一个 markdown 文件
echo '# Hello VuePress' > README.md

# 开始写作
npx vuepress dev

# 构建静态文件
npx vuepress build
```

  </CodeGroupItem>
</CodeGroup>
