const fs = require('fs');
const path = require('path');
const http = require('http');
const urlLib = require('url');
const querystring = require('querystring');
//模拟一个数据库功能
var users = {};
const server = http.createServer((req, res) => {
    var str = "";
    req.on('data', (data) => {
        str += data;
    });
    req.on('end', () => {
        var obj = urlLib.parse(req.url, true);
        var url = obj.pathname;
        const GET = obj.query;
        const Post = querystring.parse(str);
        //分成两个部分,对文件的访问和对接口的访问
        //简单的判断下
        if (url == "/user") {
            //判断用户是注册还是登录
            if (GET.act == 'reg') {
                //判断用户名是否已经注册
                if (users[GET.user]) {
                    res.write('{"ok": false, "msg": "该用户已存在"}');
                } else {
                    users[GET.user] = GET.pass;
                    res.write('{"ok": true, "msg": "恭喜注册成功"}');
                }

            } else if (GET.act == 'login') {
                //判断用户是否存在
                if (!users[GET.user]) {
                    res.write('{"ok": false, "msg": "该用户不存在"}');
                } else if (users[GET.user] != GET.pass) {
                    //验证密码是否正确
                    res.write('{"ok": false, "msg": "用户名或密码错误"}');
                } else {
                    res.write('{"ok": true, "msg": "登录成功"}');
                }
            } else {
                res.write('{"ok": false, "msg": "未知的act"}');
            }
            res.end();

        } else {
            var fileName = "./www" + url;
            fs.readFile(fileName,  (err, dataStr) => {
                if (err) return res.write('404');
                res.write(dataStr);
                res.end();
            })
        }
    })
})
server.listen(8080, () => {
    console.log('服务器启动')
});