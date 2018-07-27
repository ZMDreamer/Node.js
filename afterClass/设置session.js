const express = require('express');
const cookieParser = require('cookie-parser');
const cookieSession = require('cookie-session')
const app = express();
//调用中间件
app.use(cookieParser());
app.use(cookieSession({
    name: "session",
    keys: ['张三','李四思','李四'],
    maxAge: 24*60*60*1000 //表示24小时,可选参数
}))
app.get('/',(req,res)=>{
    //因为第一次session肯定是没有的所以需要判断
    if (req.session['count']==null) {
        req.session['count']=1;
    }else{
        req.session['count']++;
    }
    console.log(req.session);
    res.send('设置session成功')
})
app.listen(8080);
