const express = require('express');
const bodyParser = require('body-parser');
const server = express();
server.listen(8080);
//链式操作
server.use('/',(req, res,next)=>{

console.log("a");
next();

});
server.use('/',(req,res,next)=>{
console.log('b');
})