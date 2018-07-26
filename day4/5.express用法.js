const express = require('express');
const express_static = require('express-static');
const server = express();

server.get('/',(req ,res)=>{

res.send('哈哈我胡汉三又回来了');
//res.sendFile(文件的绝对路径)读取文件的信息
//res.sendJson({}) json数据,接口文档

})
server.use(express_static('./www'));

//server.get()表示监听get类型的请求
//server.post()表示监听post类型的请求
//server.all()表示监听所有的请求

server.listen(8080,()=>{
    console.log("http:127.0.0.1:8080");
})