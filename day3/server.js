const http = require('http');
const fs = require('fs');
const path = require('path');
 http.createServer((req,res)=>{
    let fileName = "./www" + req.url;
    fs.readFile(path.join(__dirname,fileName),'utf8',(err,dataStr)=>{
        if(err) return res.write('404');
        res.write(dataStr);
        res.end();
    });
}).listen(7060);