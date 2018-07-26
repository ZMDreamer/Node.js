const readHtml = require('./readHtmlFile');
const http = require('http');
const server = http.createServer();
server.on('request',(req,res)=>{
    const url = req.url;
    const method = req.method.toLowerCase();
    if (method == "get" && url == "/www/index.html") {
        readHtml(res ,url);
    }else if(method == "get" && url == "/www/about.html"){
        readHtml(res ,url);
    }else{
        res.end('404');
    }
})
server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})