const express = require('express');
const bodyParser = require('body-parser');
const server = express();
var mybodyPaser = require('./lib/mybodyParser');
server.listen(8080);
server.use('/', mybodyPaser
)
server.use('/', (req, res, next) => {
    // console.log(req.a); 12
    console.log(req.body);
})