const querystring = require('querystring');
module.exports = function(req, res, next){
    // req.a = 12;
    var str = "";
    req.on('data', (data) => {
        str += data;
    });
    req.on('end', () => {
        req.body = querystring.parse(str);
        next();

    })
};