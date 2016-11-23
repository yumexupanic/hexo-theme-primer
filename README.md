# Hexo-Theme-Primer

![primer](http://oct8d1mqf.bkt.clouddn.com/2016-11-08-5368F973-375A-4871-A7BE-0112F303F884.png)

## install

``` bash
git clone https://github.com/yumemor/hexo-theme-primer.git
```

放在你的Hexo／theme下面

修改 `_config.yml`:

``` yaml
theme: hexo-theme-primer
```

## open-source Page

![开源项目](http://oct8d1mqf.bkt.clouddn.com/2016-11-08-20%3A18%3A55.jpg)

``` bash
hexo new page 'open-source'
```

``` yaml
---
title: 我的开源项目
layout: open
---

```

## category Page

![分类页面](http://oct8d1mqf.bkt.clouddn.com/2016-11-08-20%3A20%3A08.jpg)

``` bash
hexo new page 'categories'
```

``` yaml
---
title: Categories
date: 2016-11-08 15:02:58
layout: categories
---
```

## Nav

``` yaml
menus:
	- 
		name: 首页
		link: /
	- 
		name: 分类
		link: categories/
	- 
		name: 开源项目
		link: open-source/
	- 
		name: 留言板
		link: message/
```
target代表新开启一个页面进行打开

## Profile

```yaml
profile:
	location: ChengDu, China
	github: yumemor
	#stackoverflow: 
		#title: yumemor
		#href: http://stackoverflow.com/users/5662132/yumemor
	#organization: 组织/公司
```
## Github
``` yaml
github: 
	username: yumemor
  popular_repos: [ysale-sms,scude-answer,cordova-plugin-alipay]
```

## comments
```yaml
comments:
	duoshuo_username: yumemor # 多说配置
	disqus_username: yumemor # disqus 配置

```
## highlightjs
在使用时 请关闭系统的 highlightjs 配置
``` yaml
highlight:
  enable: false
    line_number: false
      auto_detect: false
        tab_replace:
```
不关闭系统的高亮，代码高亮可能没有办法正常显示

## 2.0 升级说明

- 增加 category 页面
- 修改 github repository 样式
- 更换 icon 为 [iconfont](http://www.iconfont.cn) 和 [otcicons](https://otcicons.github.com)
- 添加 [七牛静态CDN](https://staticfile.org/)
- 去掉 banner 的 fixed 布局 ，因为不实用
- 简化主题配置文件
- 重构代码

欢迎大家 fork push。


