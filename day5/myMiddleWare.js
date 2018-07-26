const express = require('express');
const fs = require('fs');
const path = require('path');
const server = express();

server.use(myMiddleWareWriteLogs);
server.get('/',(req ,res)=>{
    res.sendFile(path.join(__dirname,'./template/index1.html'))
});
server.post('/text',(req , res)=>{
    res.send('这是post请求测试')
})
server.listen(8080,()=>{
    console.log("服务器已开启"+'http://127.0.0.1:8080');
})

//define your own middleWare
function myMiddleWareWriteLogs(req,res,next){
    const logContent = `${new Date().toLocaleString()} ${req.url} ${req.method}\n`;
    fs.appendFile(path.join(__dirname,'./log.text'), logContent, (err)=>{
        if(err) return err;
        next();
    })

}
