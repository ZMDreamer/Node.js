const express = require('express');
const server = express();
server.set('view engine','ejs');
server.set('views','./template');
//import router
const router = require('./router');
//use router
server.use(router);

server.listen(8080,()=>{
    console.log('http://127.0.0.1:8080');
})