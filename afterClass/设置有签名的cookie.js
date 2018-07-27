const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser('aaddd'));
app.get('/',(req,res)=>{
    res.secret='aaddd';
    //设置有签名的cookie
    res.cookie('name','张梦',{signed:true})
    //获取未签名的cookie
    console.log('签名的cookie:' , req.signedCookies);
    console.log('无签名的cookie:' , req.cookies)

    res.send('ok');

})
app.listen(8080);