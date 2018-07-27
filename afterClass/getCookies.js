const express = require('express');
const cookieParser = require('cookie-parser')
const app = express();
//调用获取cookie的中间件
app.use(cookieParser());
app.get('/1.html',(req,res)=>{
    const cookie = req.cookies;
    console.log(cookie);
    res.send('获取到了cookie');
})
app.listen(8080);


