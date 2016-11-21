# hexo-theme-casual

追求简洁清爽的Hexo主题，界面设计部分采用了[Semantic UI](http://semantic-ui.com/) ~~(其实是自己做了半天发现审美捉急)~~。

A simple and cool hexo theme with [Semantic UI](http://semantic-ui.com/) in UI design

![](https://cloud.githubusercontent.com/assets/14028075/18900169/bccc844a-8571-11e6-885c-e80c7bf5c8e8.png)

![](https://cloud.githubusercontent.com/assets/14028075/18900170/be7c36c8-8571-11e6-85a8-d2bfd64ad17b.png)

## [Living Demo](http://littlewin.info/)

## Feature
 - Responsive | Comfortable dynamic effects
 - Archive | Tags | Info  widgets
 - Involve disqus and duoshuo comment module
 - Involve swiftype search module (need adjust by yourself)


## Version list
### v1.0.0 - Sep 28, 2016
 - Init theme, now it can be used properly.
### v1.0.1 - Nov 15, 2016
 - Improve the style and effect in cellphone.

## Installation
```
//Init blog folder 
$ hexo init blog
$ cd blog && npm install

//Add dependencies
$ npm install --save hexo-renderer-jade hexo-renderer-scss hexo-generator-feed hexo-generator-sitemap hexo-browsersync hexo-generator-archive

//clone theme
$ git clone https://github.com/littlewin-wang/hexo-theme-casual themes/casual

//Then update your blog's _config.yml(yourblog/config.yml) to use the theme.
# Extensions
## Plugins: https://hexo.io/plugins/
## Themes: https://hexo.io/themes/
theme: casual
```


## Config
### Add tags page
- In blog root dir
```
$ hexo new page tags
```

- Modify source/tags/index.md
```
---
title: tags
layout: "tags"
---
```


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


### Avatar & favicon
Add files to themes/casual/source/ and modify _config.yml
```
avatar: /avatar.png
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
Set `true` in `swift_search` item in _config.yml
```
# Search
swift_search: true
```
then change the code in themes/casual/layout/partial/script.jade
```
//- swiftype search
- var ss = theme.swift_search
if ss
  script
    | (function(w,d,t,u,n,s,e){w['SwiftypeObject']=n;w[n]=w[n]||function(){(w[n].q=w[n].q||[]).push(arguments);};s=d.createElement(t);e=d.getElementsByTagName(t)[0];s.async=1;s.src=u;e.parentNode.insertBefore(s,e);})(window,document,'script','//s.swiftypecdn.com/install/v2/st.js','_st');

    | _st('install','TvAnFS4AVxjiJUvrZJRB','2.0.0');

```

## More Info
Pls refer to [User guide](https://github.com/littlewin-wang/hexo-theme-casual/wiki/User-guide)

## Contact
Email: [littlewin.wang@gmail.com](mailto:littlewin.wang@gmail.com)
