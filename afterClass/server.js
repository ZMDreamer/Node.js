const express = require('express');
const bodyParser = require('body-parser');
var server = express();
server.listen(8080);
// server.use('/',(req,res)=>{
//     console.log(req.query);//get传递的参数
// })
server.use(bodyParser.urlencoded({
    extended:true,//拓展模式
    limit: 2*1024*1024 //显示数据的大小
}));//帮你生成的body
//简单的链式操作
server.use('/',(req,res)=>{
    console.log(req.body);//post的数据是body中
})