---
lang: zh-CN
title: ⚡️ 快速上手
description: cat使用教程
---

# Cat 简明教程

::: tip 注意
项目文档正在不断完善中，更多内容敬请期待，可以添加作者微信：legalgeek 反馈问题
:::

## 1、关于 RSS

RSS（Really Simple Syndication）是一种用于发布和订阅 Web 内容的标准格式，通常用于博客、新闻网站等实时更新内容的网站。

通过 RSS，网站可以将其发布的文章、新闻、博客等内容以 XML 格式的数据流形式提供，用户可以通过 RSS 阅读器（或称为聚合器）订阅这些数据流，并随时得到最新的更新。RSS 阅读器通常会自动检查订阅的 RSS 源是否有更新，如果有，则会提醒用户并展示更新的内容。

RSS 的优点在于它可以帮助用户快速地获得感兴趣的信息，同时也方便了网站管理员的内容发布和推广。

虽然 RSS 在过去曾经非常流行和广泛使用，但现在随着社交媒体和移动应用的普及，它的使用已经逐渐减少。不过，仍有一些重要的网站和博客仍在提供 RSS 订阅服务，同时也有不少一些 RSS 阅读器和客户端应用仍在使用中。

## 2、关于 CAT

[CAT](https://cat.legalhub.cn/) 是一款专注于法律领域的 RSS 生成工具，目标是实现法律领域内关键资讯信息的 RSS 化。

项目[发起者](https://blog.legalhub.cn/about/index.html)希望在算法推荐横行的今天，你有机会选择自己关注什么内容、有能力及时感知信息的存在和变化，并可以轻松地获取它们。

## 3、使用步骤

点击左侧目录：**已支持网站**，可以查看已支持内容的 RSS 链接；

你可以选择任意一款 RSS 阅读器使用这些链接，例如：

- Windows 、macOS 用户，可以考虑 [Fluent Reader](https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=Fluent%20Reader) ；

- macOS 和 iOS 用户推荐 [Reeder5](https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=REEDER5) ;
- Android 生态比较丰富，可以使用[关键词](https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&tn=baidu&wd=%E5%AE%89%E5%8D%93rss%E8%BD%AF%E4%BB%B6)搜索。

参考效果：macOS 系统下的 Reeder5

<p align="center">
<img src="https://docs.legalhub.cn/images/result01.png" >
</p>

## 4、高阶玩法

在用户较多的情况下，该项目服务器可能触发源网站的反爬机制，导致服务不稳定。

如果你熟悉 Docker 并具有网站搭建经验，建议自己部署该项目，参考一键脚本：

```shell
docker run -d --name legalhub_cat -p 1200:1200 legalgeek/cat:1.0
```

以上命令当中最后的`1.0`仅作示范，项目最新镜像 tag 见：[https://hub.docker.com/r/legalgeek/cat/tags](https://hub.docker.com/r/legalgeek/cat/tags)

成功运行后，即可在你服务器的 1200 端口查看到与[这里](https://cat.legalhub.cn/)相同的提示信息。
