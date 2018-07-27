const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
app.use(cookieParser());
app.get('/',(req ,res)=>{
    res.clearCookie('name');
    res.send('删除成功');
})






app.listen(8080);
