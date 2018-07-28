const jade = require('jade');
const fs = require('fs');
const str = jade.renderFile('./jade/11.jade',{pretty:true})
    
console.log(str);