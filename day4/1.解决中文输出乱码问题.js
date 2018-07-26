const http = require('http');
const server = http.createServer();
server.on('request',(req, res)=>{
//在res.end设置输出编码格式即可
res.writeHeader('200',{"Content-Type":"text/html;charset=utf-8"});
//获取请求地址req.url,获取请求方法req.method
res.write('请求地址是: '+ req.url + '<br>' + '请求方式: ' + (req.method).toLowerCase() + '<br>');

    res.end('哈哈我胡汉三又回来了')
})
server.listen(8080,"bx.com",()=>{
    console.log('http://127.0.0.1:8080')
})