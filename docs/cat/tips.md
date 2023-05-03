---
lang: zh-CN
title: 💡 使用技巧与建议
description: cat文档
---

# Cat 使用技巧✨

::: tip 注意
高阶技巧并非刚需，且具有折腾成本，可以有余力再尝试。
:::

## 高阶玩法 1 : 部署自己专用的 Cat 服务

在用户较多的情况下，该项目服务器可能触发源网站的反爬机制，导致服务不稳定。

如果你熟悉 Docker 并具有网站搭建经验，建议自己部署该项目，

### 选项一 ：使用 Docker 安装

参考一键脚本：

```shell
docker run -d --name legalhub_cat -p 1200:1200 legalgeek/cat:1.X
```

以上命令当中最后的`1.X`仅作示范，需要修改成真实的 Tag 版本号，项目最新镜像版本见：[https://hub.docker.com/r/legalgeek/cat/tags](https://hub.docker.com/r/legalgeek/cat/tags)

成功运行后，即可在你服务器的 1200 端口查看到与[https://cat.legalhub.cn/](https://cat.legalhub.cn/)相同的提示信息。

### 选项二 : 使用 Docker-compose 安装

通过 [Docker compose](https://www.runoob.com/docker/docker-compose.html) 方式的可以设置更多环境变量，例如缓存方式，缓存过期时间等

**关键步骤：**

第一步：修改下方的 `docker-compose.yml` 配置文件；

第二步：执行 `docker volume create redis-data` 为Redis 缓存服务准备持久化数据卷；

第三步：启动时执行 `docker-compose up -d` ；关闭时执行 `docker-compose down`

附 `docker-compose.yml`参考配置：

```yml
version: "4"

services:
  cat_legalhub:
    image: legalgeek/cat:1.1 # 注意！需要修改成最新的版本号
    restart: always
    ports:
      - "1400:1200"
    environment:
      NODE_ENV: production
      CACHE_TYPE: redis
      REDIS_URL: "redis://redis:6379/"
      PUPPETEER_WS_ENDPOINT: "ws://browserless:3000" 
      CACHE_EXPIRE: 360
      CACHE_CONTENT_EXPIRE: 86400
    depends_on:
      - redis
      - browserless 

  browserless: 
    image: browserless/chrome 
    restart: always 
    ulimits: 
      core: 
        hard: 0 
        soft: 0 

  redis:
    image: redis:alpine
    restart: always
    volumes:
      - redis-data:/data

volumes:
  redis-data:
```

## 高阶玩法 2 : 使用云服务实现 RSS 的多终端同步

如果不使用云服务，你可能会遇到一些小问题：

- 只有打开了电脑或手机 RSS 客户端软件才能获取到更新，如果某个网站一天更新了 100 篇文章，而 RSS 的输出数量是有限的，等一天后再开电脑，这时候阅读器刷新，你只能看到最近的几篇。（其实不用太担心：正经官方网站不太可能一天水 100 篇文章，所以问题不大）

- 你同时在手机和电脑上订阅了 RSS 链接，在电脑上看完，手机上还是未读状态，如果订阅了很多内容，这会很糟糕。（其实不用太担心：从个人经验来看，一般只在手机端使用碎片时间阅读，多端同步非刚需）

如果你希望解决上面 2 个问题，可以考虑自建一个负责**管理各种 RSS 订阅源**的后台云服务，推荐使用 [Tiny Tiny RSS](https://tt-rss.org/) 。这里有非常详细的介绍与安装教程：[http://ttrss.henry.wang/zh/](http://ttrss.henry.wang/zh/)
