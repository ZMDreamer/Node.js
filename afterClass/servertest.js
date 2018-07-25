const express = require('express');
const expressStatic = require('express-static');
const server = express();
server.listen(8080);

var users = {
    "blue": "123456",
    "zhangsan": "123456",
    "lisi": "666"
}
server.get('/login',(req,res)=>{
    var user = req.query['user'];
    var pass = req.query['pass'];
    if (!users[user]) {
        res.send({ok:false,msg: '此用户不存在'});
    }else if(users[user]!=pass){
        res.send({ok:fasle,msg:"密码错误"})
    }else{
        res.send({ok:true,msg:"登录成功"})
    } 
})
//读取静态文件
server.use(expressStatic('./www'));





