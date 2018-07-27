const jade = require('jade');
const fs = require('fs');

//渲染模板的方法
var str = jade.renderFile('./jade/5.jade',{pretty: true});
console.log(str);