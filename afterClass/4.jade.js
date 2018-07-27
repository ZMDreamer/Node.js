const jade = require('jade');
const fs = require('fs');

//渲染模板的方法
var str = jade.renderFile('./jade/2.jade',{pretty: true});
fs.writeFile('./www/jade.html',str,(err)=>{
    if(err) throw err;
    console.log('ok');
})