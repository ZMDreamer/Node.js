const express = require('express');
const app = express();
const bodyParse = require('body-parser');

//传统获取get请求里面?后面传递参数的方法
// app.get('/index.html',(req ,res)=>{
//     console.log(req.query);
//     res.end('ok');
// })

//注意第一个参数有时下面的形式,路由参数获取
app.get('/:page/:id/:name',(req ,res)=>{
    console.log(req.params);
    res.end('ok');
})



app.listen(8080);