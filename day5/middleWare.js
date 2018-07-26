const fs = require('fs');
const path = require('path');
const queryString = require('querystring');
const middleWare = {
//定义一个服务器执行记录日志的中间件
    writeLog(req, res, next){
        const appLog = `${new Date().toLocaleString()} ${req.url} ${req.method}\n`;
        fs.appendFile(path.join(__dirname,'./appLog.text'),appLog,(err)=>{
            if(err) return err;
            next();
        })
    },
//定义一个可以解析post请求从前台发送过来的数据中间件
    postData(req,res,next){
        //由于post发送的数据数据量不一定所以需要一段一段的发送
        var dataStr = "";
        req.on('data',(churn)=>{
            dataStr+=churn;

        })
        req.on('end',()=>{
            req.body = queryString.parse(dataStr);
            next();
        })
    }
}
module.exports = middleWare;