const jade = require('jade');
const fs = require('fs');
const str = jade.renderFile('./jade/index.jade',{pretty:true});
    fs.writeFile('./www/index.html', str, (err)=>{
        if(err) return console.log(err);
        console.log('成功')
    })
    
console.log(str);