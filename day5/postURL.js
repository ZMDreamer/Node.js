const express = require('express');
const app = express();

//引入中间件
const middleWare = require('./middleWare');
//调用记录日志方法
app.use(middleWare.writeLog);
//调用解析post传送的数据
app.use(middleWare.postData);
//引入自己的路由模块
const myrouter = require('./myrouter');
//使用自己的路由
app.use(myrouter);
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})