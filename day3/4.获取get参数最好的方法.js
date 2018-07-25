//利用url模块解决
require('http').createServer().on('request',(req,res)=>{
    let GET = require('url').parse(req.url,true);
    console.log(GET.pathname,GET.query);
    res.end("hello world");
}).listen(8080,()=>{
    console.log('有人访问了服务器')
})