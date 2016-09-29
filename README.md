#  hexo-theme-casual

追求简洁清爽的Hexo主题，界面设计部分采用了[Semantic UI](http://semantic-ui.com/) ~~(其实是自己做了半天发现审美捉急)~~。

A simple and cool hexo theme with [Semantic UI](http://semantic-ui.com/) in UI design

![](https://cloud.githubusercontent.com/assets/14028075/18900169/bccc844a-8571-11e6-885c-e80c7bf5c8e8.png)

![](https://cloud.githubusercontent.com/assets/14028075/18900170/be7c36c8-8571-11e6-85a8-d2bfd64ad17b.png)

### [Living Demo](http://littlewin.info/)

### Feature

 - Responsive | Comfortable dynamic effects
 - Archive | Tags | Info  widgets
 - Involve disqus and duoshuo comment module
 - Involve swiftype search module (need adjust by yourself)
 
### Version list
#### v1.0.0 - Sep 28, 2016
 - Init theme, now it can be used properly.

### Installation
```
//Init blog folder 
$ hexo init blog
$ cd blog && npm install

//Add dependencies
$ npm install --save hexo-renderer-jade hexo-renderer-scss hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive

//clone theme
$ git clone https://github.com/littlewin-wang/hexo-theme-casual themes/casual

//Config
...
```

### Config
#### Add tags page
1. In blog root dir
```
$ hexo new page tags
```

2. Modify source/tags/index.md
```
---
title: tags
layout: "tags"
---
```

#### Add about page
1. In blog root dir
```
$ hexo new page about
```

2. Modify source/about/index.md
```
---
title: About me
layout: "about"
---
//Add personal info you'd like to add
```

#### Avatar & favicon
Add files to themes/casual/source/ and modify _config.yml
```
avatar: /avatar.png
favicon: /favicon.png
```

#### Personal info and social info
Just modify _config.yml
```
aboutme: 朝着前端打怪升级中 | 目前从事闪存产品的固件和测试工具开发工作 | 多特蒙德死忠

social:
  github: http://github.com/littlewin-wang
  twitter: http://twitter.com/littlewin_wang
  weibo: http://weibo.com/fredinweibo
```
