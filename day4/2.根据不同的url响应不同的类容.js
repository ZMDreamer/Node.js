const http = require('http');
const server = http.createServer();
server.on('request',(req, res)=>{
    //根据不同的请求地址输出不同的内容
    const url = req.url;
    const method = req.method.toLowerCase();
    res.writeHeader(200,{"Content-Type":"text/html;charset=utf-8"});
    console.log(url, method)
    if (method === 'get'&& url=='/index.html') {
        res.end('<h1>首页</h1>');
        
    }else if(method === 'get' && url == '/movie.html'){
        res.end('<h1>电影</h1>');
    }else if(method === "post"&& url=='/about.html'){
        res.end('你请求的方法是post方式');
    }else{
        res.end('404,当前没有数据');
    }
})

server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})