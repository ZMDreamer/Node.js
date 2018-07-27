### 1.什么是中间件?
 中间件是一个特殊的路由处理函数,有一个很重要的形参next,next是一个函数,所以可以调用next()函数
### 2.中间件的表现形式:
只要函数的形参中有next函数,它就是中间件 
### 3.中间件的作用:
  表示每一个处理环节只单独处理,必须将处理的结果交给下一个中间件,并且中间件之间是共享request和response这两个对象的,每次处理 完成,必须调用next()函数传递给下一个中间件
### 4. 根据不同的功能要求可以自己定义中间件,只需要满足中间件的要求即可,例如:
```
//根据要求记录服务器每次接到请求记录请求的方式和时间,然后写入指定的文件夹
//使用中间件
const express = require('express');
const server = express();
server.use(myMiddleWareWriteLogs);
server.listen(8080);
//下面是定义的中间件
function myMiddleWareWriteLogs(req,res,next){
    const logContent = `${new Date().toLocaleString()} ${req.url} ${req.method}\n`;
    fs.appendFile(path.join(__dirname,'./log.text'), logContent, (err)=>{
        if(err) return err;
        next();
    })

}
```
---
### 5. express 中间件compression的使用方法
1. 通过npm install compression --save 安装到当前项目文件夹
2. 引入中间件 `var compression = require('compression)`
3. 服务器调用 `server.use(compression())`
4. 经过服务器压缩后资源都是gizp的了
---
### 6. 配合node来渲染页面的模板引擎--EJS
1. 通过 npm install ejs -S安装到当前项目
2. 配置模板引擎 `server.set('view engine', 'ejs')` 此段代码固定写法
3. 配置模板页面的存放路径 `server.set('views','模板文件的路径')`
4. 最后通过响应调用render方法 `res.render('参数1为要渲染的模板','参数2要渲染的数据对象')`
***注意: 默认情况下我们无法直接使用res.render,需要模板引擎配合使用***
----
 ### 7.路由的使用(router)
 1. 定义: 前端请求得url地址必然会对应一个后端的处理函数,而整个请求就是一个路由
 2. 作用: 所以可以通过分发请求
 3. 步骤:
      1. 创建express类型的路由对象 `var router = expresss.Router()`;
      2. 利用创建的路由对象调用不同的请求
      3. 将路由对象或者函数暴露到外面 `module.exports == router`
      4. 使用的时候导入自己的路由模块,将路由对象设置到服务器上  `const router = require('自己定义的路由路径')`, 调用 `server.use(router)`;
   