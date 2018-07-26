const fs = require('fs');
const path = require('path');
module.exports = function(res,url){
    fs.readFile(path.join(__dirname,url),(err, dataString)=>{
        if(err) return err.msg;
        res.end(dataString);
    })
}