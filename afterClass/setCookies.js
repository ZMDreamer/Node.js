const express = require('express');
const app = express();
//set cookies
app.get('/1.html',(req,res)=>{
    res.cookie("name",'dreamer',{path:'./www',maxAge:4000000});
    res.send('设置成功')
})
app.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})