# hexo-theme-casual

~~追求简洁清爽的Hexo主题，界面设计部分采用了[Semantic UI](http://semantic-ui.com/) ~~(其实是自己做了半天发现审美捉急)~~。

> 简洁清爽大气的Hexo主题

> A simple and cool hexo theme 


![](https://cloud.githubusercontent.com/assets/14028075/23158188/2bc394ba-f859-11e6-8453-3c78ecfa61fa.JPG)

![](https://cloud.githubusercontent.com/assets/14028075/23158234/602ef42e-f859-11e6-8ae2-56ab9e8f96ef.JPG)

## [Living Demo](http://littlewin.info/)

## Feature
 - Responsive | Comfortable dynamic effects
 - Archive | Info  widgets
 - Involve duoshuo comment module
 - Involve local search module ([hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search))

## Version list
## v1.0
### v1.0.0 - Sep 28, 2016
 - Init theme, now it can be used properly.
 
### v1.0.1 - Nov 15, 2016
 - Improve the style and effect in cellphone.

## v2.0
### v2.0.0 - Feb 21, 2017
 - Redesign style, add local search module

## Installation
```
//Init blog folder 
$ hexo init blog
$ cd blog && npm install

//Add dependencies
$ npm install --save hexo-renderer-jade hexo-renderer-scss hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive hexo-generator-search

//clone theme
$ git clone https://github.com/littlewin-wang/hexo-theme-casual themes/casual

//Then update your blog's _config.yml(yourblog/config.yml) to use the theme.
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: casual
```


## Config
### Add about page
- In blog root dir
```
$ hexo new page about
```

- Modify source/about/index.md
```
---
title: About me
layout: "about"
---
//Add personal info you'd like to add
```


### favicon
Add files to themes/casual/source/ and modify _config.yml
```
favicon: /favicon.png
```


### Personal info and social info
Just modify _config.yml
```
aboutme: 朝着前端打怪升级中 | 目前从事闪存产品的固件和测试工具开发工作 | 多特蒙德死忠

social:
  github: http://github.com/littlewin-wang
  twitter: http://twitter.com/littlewin_wang
  weibo: http://weibo.com/fredinweibo
```


### Comment
Modify disqus(or duoshuo) items, value is your disqus(or duoshuo) id.
```
# Comment
# e.g disqus: seansun
disqus:
duoshuo: littlewin
```

### Search
In blog root _config.yml
```
# Search
search:
  path: search.xml
  field: all
```

## More Info
Pls refer to [User guide](https://github.com/littlewin-wang/hexo-theme-casual/wiki/User-guide)

## Contact
Email: [littlewin.wang@gmail.com](mailto:littlewin.wang@gmail.com)
