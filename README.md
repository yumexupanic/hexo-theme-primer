# Hexo-Theme-Primer
 
![image](http://o7k7yxkn2.bkt.clouddn.com/2016-08-24_Primer.png)

## 感谢原作者

本主题是基于 [Yummy-Jekyll](https://github.com/DONGChuan/Yummy-Jekyll) 主题移植过来的，首先在这里感谢原作者:[DONGChuan](https://github.com/DONGChuan)


## 安装

```shell
git clone https://github.com/yumemor/hexo-theme-primer.git
```

放在你的Hexo／theme下面

修改`_config.yml`:

```
theme: primer
```

## 开源项目页面

![开源项目](http://oct8d1mqf.bkt.clouddn.com/2016-09-27-30AD2169-8D9E-4181-9B5F-73337B1C1120.png)

```shell
hexo new page 'open-source'
```

```md
title: open-source
layout: open
---

```

## 分类页面

![分类页面](http://oct8d1mqf.bkt.clouddn.com/2016-09-27-21%3A25%3A04.jpg)

```shell
hexo new page 'blog'
```

```md
title: 文章
isShowDate: false
layout: category
---
```

## 导航

```yml
menu:
	Home: /
	Life: 
		href: subentry/Life/
		target: true
	Open-Source: open-source/
	Blog: blog/
	Guestbook: guestbook/
```
target代表新开启一个页面进行打开

## 个人信息

```yml
profile:
	location: ChengDu, China
	github: yumemor
	#stackoverflow: 
		#title: yumemor
		#href: http://stackoverflow.com/users/5662132/yumemor
	#organization: 组织/公司
```
## 布局

```yml
sidebar: true
navfixed: true
```

* 开启右侧菜单栏
* 开启导航fixed布局

## 配置评论模式(支持多说／Disqus)
```yml
comments:
	duoshuo_username: yumemor # 多说配置
	disqus_username: yumemor # disqus 配置

```

> 如果要使用多说或者 Disqus，请先创建 Site

## Git 项目
主要是在博客首页显示 以及开源项目页面使用。

```yml
github:
  popular_repos: ['cordova-plugin-alipay','hexo-theme-primer']
  contribute_repos: ['yumemor/1','yumemor/2']
```
> 注意⚠️ 配置git项目先检查`profile->github` 有无配置 这是前置条件。


欢迎大家 fork push。


