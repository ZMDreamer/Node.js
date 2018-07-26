const express = require('express');
const compression= require('compression');
const server = express();
//use compression 
server.use(compression());
//use express.static
server.use(express.static('./asset'));
server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080')
})