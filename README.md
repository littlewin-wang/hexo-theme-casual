# hexo-theme-casual

~~追求简洁清爽的Hexo主题，界面设计部分采用了[Semantic UI](http://semantic-ui.com/) ~~(其实是自己做了半天发现审美捉急)~~。

> 简洁清爽大气的Hexo主题

> A simple and cool hexo theme 

![](https://cloud.githubusercontent.com/assets/14028075/23535689/eb98ba1a-fffa-11e6-9293-180c7b4d276c.JPG)

## [Living Demo](http://littlewin.info/)

## Feature
 - Responsive | Comfortable dynamic effects
 - Archive | Info | (Resume)  widgets
 - Involve duoshuo comment module
 - Involve local search module ([hexo-generator-search](https://github.com/PaicHyperionDev/hexo-generator-search))

## Browser support
![Browser support](support.png)

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
Add files to themes/casual/source/ and modify _config.yml(in theme dir)
```
favicon: /favicon.png
```


### Personal social info
Just modify _config.yml(in theme dir)
```
social:
  github: http://github.com/littlewin-wang
  twitter: http://twitter.com/littlewin_wang
  weibo: http://weibo.com/fredinweibo
  mail: mailto:littlewin.wang@gmail.com
```


### Comment
Modify uyan item, value is your uyan id. (In theme dir)
```
# Comment
# e.g uyan: 2128137
uyan: 2128137
```

### Search
In blog root _config.yml
```
# Search
search:
  path: search.xml
  field: all
```

### Google Analytics
Modify _config.yml and change the ga ID. (In theme dir)
```
# Analytics
# google-analytics:
ga: UA-92791318-1
```

## Change Log
## v1.0
### v1.0.0 - Sep 28, 2016
 - Init theme, now it can be used properly.
 
### v1.0.1 - Nov 15, 2016
 - Improve the style and effect in cellphone.

## v2.0
### v2.0.0 - Feb 21, 2017
 - Redesign style, add local search module

## More Info
Pls refer to [User guide](https://github.com/littlewin-wang/hexo-theme-casual/wiki/User-guide)

## Contact
Email: [littlewin.wang@gmail.com](mailto:littlewin.wang@gmail.com)
