const http = require('http');
const server = http.createServer((req,res)=>{
    res.write('hello,word');
    res.end();
}).listen(9090);
// server.on('request',(req,res)=>{
//     res.write('颜昶个小二逼')
//     res.end('hello world');
// })
// server.listen(8080,()=>{
//     console.log('服务器启动');
// });