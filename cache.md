---

# 1

---

ThoughtWorks-XUPT

改写成类

用 React 改写

express 中间件
    bodyParser


跨域
    协议
    域名
    端口

npm i nodeman -D

    script: {
        “start”: “nodeman app.js”
    }

losf -i:3000 

npm -i express -S

npm run package

问题要穷尽

端口及常用端口



翻墙


---

# 2

---

金数据 虚拟机调查表  

金数据 javascript能力调查

金数据 https://jinshuju.net/f/lxM30L 每日总结  

express 版的 postnet     
    5种发送参数的方式   —   5个小demo         

 express superangent supertest      

同学您好，感谢您报名并参与2016年ThoughtWorks西安邮电大学暑期特训营线上测试。很高新的通知您，您已成功通过测试！具体名单可前往位于计算机学院IT实训中心的卓越女生实验室门口查看，我们在后续几周内会持续向您更新后续事宜。请您务必填写该调查表确认您的参与意向： https://jinshuju.net/f/GdauuD【思特沃克中国】  

# 零散笔记  

## 第一周  

拿到一个开发需求 --> 画 pipeline 图 --> 写 tasking 测试函ls数 --> 写核心函数 --> 进行测试  

每个函数的圈复杂度要有所控制（每有一个if/for/while等圈复杂度加一），圈复杂度越小越利于维护  

人肉测试 -- console.log()  

单元测试 -- jasmine  

JS语法测试 -- JSlint  

工程实践  

TDD 与 BDD  

极限编程  

系统集成  

一个优化漂亮的代码可以成为自注释  

一个漂亮/优化符合命名/使用规范的代码可以成为自注释（不需要写注释）  

代码是给人看的，偶尔在机器上跑一下  

Atwood定律：Any application that can be written in JavaScript,will eventually be written in JavaScript  

马丁·福勒：计算机科学最难应付的两件事——命名和缓存失效。  

函数读取变量的位置 
    全局变量     参数     文件流     文件流      

### 分享会  

## 第二周  

持续交付（重构）  
    * 旧的不变  * 新的创建  * 单步切换  * 旧的再见  

面向对象  

    * 三大基石/五大原则  * 对象/类/实例  * 封装/继承  * 单一职责  

怎样的测试算是好的测试  

5W1H分析法 -- 六何分析法  

* 1932年，美国政治学家拉斯维尔提出“5W分析法”，后经过人们的不断运用和总结，逐步形成了一套成熟的“5W+IH”模式。  

    * what * where * when * who * why * how      

格式化代码 

结对编程 

trello  

HTTP    
    协议   端口    命令行  调试  

### 分享会   

 ## 第三周 

消息队列  

同步异步  

git  逐步提交 版本回退 单个文件分开提交 
git commit —amend  

node 安装 npm install init  

装 nvm npm nrm node （nrm ls      nrm use *） 
npm install nrm -g  

npm install jasmine -D 
./node_modules/.bin/jasmine (init) 
vim package.json   test:”jasmine” 
npm test 
webstorm -> tools -> creatcommand -> storm  
const * = require(“”); 
module.exports = 函数名(对象);  

package.json 的作用 -- 不用把 node_moudle 上传上去  

.gitignore      

谷歌插件 
postman 
octotree 
远方 New Tab 
xmind  
消息队列 
异步 回调  

跨域   express application 要和 index.html 在一起  

### 分享会   

## 第四周  

npm install nodemon

      ## 最后  将此仓库改变为电子书

   gitbooks.io。  Upper -- 一场有趣的 TDD 编程之旅



---

# 3

---

第四周

web pack
    script:
        webpack : webpack
        wpw: webpack -w 
    npm run www

npm i superagent -S

import request from ‘superagent’

组件

react

body-parser

restful    api 风格

红与黑的游戏

画产品原型图

Team Leader/BA/QA


技术栈
    前端前台后台后端
    Bootstrap
    React.js
    Node.js

git  rm -r —cached /public/dist/*

git 命令简写

redux.js


追求社会公平与公正

校招流程


逻辑题笔试-HR笔试-OFFICE面试(英语)



---

# 4

---

What?
React是一个用于构建用户界面的javascript库；
相当于MVC中的V层；

Where?
React 起源于 Facebook 的内部项目，用来架设 Instagram 的网站，并于 2013 年 5 月开源。

Why?
较高性能，代码逻辑简单。

When?


Which?


How?
1.声明式设计 ?React采用声明范式，可以轻松描述应用。
2.高效 ?React通过对DOM的模拟，最大限度地减少与DOM的交互。
3.灵活 ?React可以与已知的库或框架很好地配合。
4.JSX ? JSX 是 JavaScript 语法的扩展。React 开发不一定使用 JSX ，但我们建议使用它。
5.组件 ? 通过 React 构建组件，使得代码更加容易得到复用，能够很好的应用在大项目的开发中。
6.单向响应的数据流 ? React 实现了单向响应的数据流，从而减少了重复代码，这也是它为什么比传统数据绑定更简单。

来源： http://www.runoob.com/react/react-tutorial.html

question:
描述：建议在 React 中使用 CommonJS 模块系统，比如 browserify 或 webpack;   问题：那么CommonJS模块系统是什么？




1.什么时候使用react?（再看看）
答：性能高，适合复杂项目，组件重用性高，代码少，结构清晰。
数据变化：传统更新慢？现在更新；
核心：高性能 ？为什么高性能？

2.JSX语法及特点？环境配置？怎样搭建
答：将XML转化为JS语法，将XML中元素属性转化为JS中的参数，
var nav ;
var app = <NAV color = 'red'/>
var app = React.render(NAV,{color:red});

ReactDom.render();

遇到xml,xml解析
遇到React.render(NAV,{color:red});

XML为了传输而设计的语言
HTML为了显示而设计的语言

3.组件是什么？状态和属性有什么区别？
组件：组成部分（必要） 复用性强
插件：辅助性程序（可有可无）
控件：

react 组件有两部分组成： 
1.props:组件的属性
2.state：组件的状态
var hello = React.creastClass(
{render:function(){
    
}}
);


npm run webpack 编译jsx 放到了dist



---

# 5

---

HTTP 请求参数
根据端口查找进程并杀死
回调函数


1 . 前端校验：用户体验
2 . 后台校验：安全性保证

3 . jQuery (post,ajax)

pair with yujuan
建git库，postnet_zy 
绑定事件,确定绑定事件的元素 
元素name  绑定事件    所做操作
ok
onclick 1.获取translator_method
2.判断给定translator_method对应的inputs-code数据格式是否正确   F：给出错误提示；T：不做任何操作。
1.获取translator_method判断inputs-code发送到那个处理请求中，并发送个相应的异步请求。



查阅：jQuery : post   T：转换后的串    F：Err
了解的知识：
jQuery 获取元素：
id选择器  $("#id").text(),     $("#id").html(),    $("#id").val();
class选择器

获取单选框选中的内容：


---

# 6

---

Team：2016/8/4   
1.describe 描述 it描述 如何写。 
  GET /query   
  should get a pameter form query

2. query和body

3.git 提交步骤 
    git status
    git log
    git reset --hard ID
    git diff filename
?    git checkout 尽量不要用

4.git提交原则
    小步提交，小功能功能完整就提交。

5.commit 描述写错了 如何修改。
   git checkout （不用这个）
   git commit --amend -m "describe commit".
   
6.done：
     a . done是怎么来的？
     b . 如果没有done可以运行吗？
     c . 什么是回调函数？如何回调？回调到哪里？
     d . done的作用？
     e . done是怎么处理error的？
      f . 什么时候调用done？
     g .  done函数的特点？
     h . 如何自定义done？
     i . 为什么要回调？
    

7. 关闭终端    
    lsof -i:端口号 
    kill  PID
    kill -9 PID

8.if{}else{} 

9.npm install jasmine -D  D是什么意思    相当于 --save -dev 开发者依赖
   npm install jasmine  -g  g是什么意思    ：全局安装

10 --save 是什么意思？       安装一般的依赖，相当于 -S
    --save -dev 是什么意思？  安装 开发者的依赖 ，相当于 -D


总结：
1.小步提交

解决方案：
1.每天早上一个小时结对rewiew code.

问题：
1.如何使用题issues


---

# 7

---


WebStorm 是一款深受广大程序员喜爱的JavaScript 开发和Web前端开发工具 

IDE: 应用集成开发环境。
Postman : Chrome Web Store下载postman 请求调试工具。
octotree github.

nodejs  js运行时环境 ：http://baike.baidu.com/view/3974030.htm#9

nvm (node version manager) ,  node 版本g管理工具  。
npm（node package manager）,    通常称为node包管理器。顾名思义，它的主要功能就是管理node包，包括：安装、卸载、更新、查看、搜索、发布等：
npm安装 ： http://www.aichengxu.com/view/5540267
nrm (node registry manager),    npm registry 管理工具 nrm,  能够查看和切换当前使用的registry.
I
框架：
   》科普：框架选择 http://www.zhihu.com/question/31079930
express   Express是目前最流行的基于Node.js的Web开发框架，可以快速地搭建一个完整功能的网站。
superAgent    superagent：是nodejs里一个非常方便的客户端请求代理模块 http://www.jianshu.com/p/98b854322260
superTest: 用来测试superAagent. :https://www.awesomes.cn/repo/visionmedia/supertest

React:  http://www.runoob.com/react/react-tutorial.htmlReact 是一个用于构建用户界面的 JAVASCRIPT 库。
React主要用于构建UI，很多人认为 React 是 MVC 中的 V（视图）。
webpack : http://www.cnblogs.com/vajoy/p/4650467.htmlwebpack是近期最火的一款模块加载器兼打包工具，它能把各种资源，例如JS（含JSX）、coffee、样式（含less/sass）、图片等都作为模块来使用和处理;
babel   : http://www.ruanyifeng.com/blog/2016/01/babel.html Babel是一个广泛使用的转码器，可以将ES6代码转为ES5代码，从而在现有环境执行。
koa 是由Express 原班人马打造的，致力于成为一个更小、更富有表现力、更健壮的Web 框架。 使用koa 编写web 应用，通过组合不同的generator，可以免除重复繁琐的回调函数嵌套，并极大地提升错误处理的效率。

涉及HTTP和RESUful
Redux
涉及WebComponent



---

# 8

---


mac osx 下搭建 node.js 开发环境
    xcode
    home-brew
        nodes
        mongodb
        redis
    web storm
    sublime text