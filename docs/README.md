# 概述

这是一个 Github 风格的 Hexo 主题，简约大气 适合喜欢 Github 风格的小伙伴使用

# 安装

``` bash
git clone https://github.com/yumemor/hexo-theme-primer.git
```

> hexo/_config.yml

``` yaml
theme: hexo-theme-primer
```

# 基本
## 个人信息

> theme/_config.yml

```yaml
profile:
	location: ChengDu ＃城市
	github: yumemor #github 账号
	stackoverflow: #stackoverflow 账号
		title: 
		href: 
	organization: open #组织或者公司
```

## Github 仓库配置

``` yaml
github: 
	username: yumemor
  popular_repos: [hexo-theme-primer]
```

> 想显示多个项目 请用逗号进行分割

# 页面
## 导航

``` yaml
menus:
	- 
		name: 首页
		link: /
	- 
		name: 分类
		link: category/
		target: true
```
! `target` 代表开启一个新标签进行打开

## 开源项目

``` bash
hexo new page 'open-source'
```

> open-sourece/index.md

``` yaml
title: 开源项目
layout: open
```

## 分类

``` bash
hexo new page 'category'
```

> category/index.md

``` yaml
title: 分类
layout: categories
```

## 留言板

``` bash
hexo new page 'message'
```

> message/index.md

``` yaml
title: 留言板
layout: page
share: false
toc: false
```

# 功能

## 搜索

- 安装

``` bash
npm install hexo-generator-search --save
```

- 配置

> hexo/_config.yml

``` yaml
search:
  path: search.xml
  field: post
```

> theme/_config.yml

```
search: google
```
! 默认为 `google` 搜索，本地搜索请修改为 `local`

## 评论
> theme/_config.yml

```yaml
comment:
	disqus_username: 
```

> 由于[多说](http://dev.duoshuo.com/threads/58d1169ae293b89a20c57241) 即将关闭，所以去掉了多说的支持 目前只集成了 disqus 因为国内的网易云跟帖&畅言 都不好用 如果有这方面的需求 欢迎开 issues

## 代码高亮

由于主题没有使用 Hexo 自带的代码高亮 所以在使用时请先关闭系统的 `highlightjs` 配置

> hexo/_config.yml

``` yaml
highlight:
  enable: false
    line_number: false
      auto_detect: false
        tab_replace:
```

! 不关闭系统的高亮，代码高亮可能没有办法正常显示。


# 文章相关
## 关闭评论

``` yaml
title: Hello World
comment: false
```

## 关闭目录

``` yaml
title: Hello World
toc: false
```

## 关闭分享

``` yaml
title: Hello World
share: false
```

