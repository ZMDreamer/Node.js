const http = require('http');
const art_template = require('art-template');
const path = require('path');
const server = http.createServer();
server.on('request',(req ,res)=>{
    //模拟后台动态渲染页面数据
    const student = {
        name:'张三',
        age: '18',
        hobby: ['唱歌','睡觉','打豆豆']
    }
   const tmpHtml = art_template(path.join(__dirname,"./www/index.html"),student);
    res.end(tmpHtml);
})




server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})