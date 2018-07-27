const express = require('express');
//导入时间模块,第三方的包moment结果是个函数
const moment = require('moment');
const app = express();
//调用函数中的方法格化时间
var  currentTime = moment().format('YYYY-MM-DD: HH:mm:ss');
app.get('/',(req ,res)=>{
    res.send(currentTime);

})
console.log(currentTime);
app.listen(8080);