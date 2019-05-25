我的博客
=================
地址：www.rehellinen.cn

### 目录：
~~~
|-- client       前端和CMS（基于Vue.js的多页面）
|-- server       基于Koa2的API
~~~

### 项目构建：  
webpack配置完全由自己编写（文件在./client/build）  
实现了的功能有
1. tree-shaking
2. code-spliting
3. devServer自动寻找空闲端口
4. eslint
5. Vue.js
6. Babel、Sass、Pug  
7. 其他优化（图片压缩与转base64、css提取与压缩等）

### 前端：  
基于Vue.js的多页面应用程序（分为博客和CMS两个页面）  

### 后台：  
基于Koa2搭建了一个通用后台API框架 - ReAPI
封装了下列功能：
1. 路由
2. 配置
3. 异常处理
4. 自定义验证器
5. 模型
6. 一些其他工具  

具体文档可以查看：  
https://github.com/rehellinen/ReAPI
