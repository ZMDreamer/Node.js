const http = require("http");
const fs = require('fs');
const urlLib = require('url');
const queryString = require('querystring');
const path = require('path');
http.createServer((req, res) => {
    //get请求得数据
    var url = urlLib.parse(req.url, true).pathname;
    const GET = urlLib.parse(req.url, true).query;
    //post请求得数据,post数据是分段发送的
    var str = "";
    req.on('data', data => {
        str += data;
    });
    req.on('end', () => {
        const POST = queryString.parse(str);
        var fileName = './www' + url;
        fs.readFile(path.join(__dirname, fileName), 'utf8', (err, data) => {
            if (err) res.write('404')
            res.write(data);
            res.end();
        })
    })


}).listen(8080);