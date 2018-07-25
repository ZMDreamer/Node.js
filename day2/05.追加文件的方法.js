const fs = require('fs');
fs.appendFile('./files/1.txt',"\n\'node确实是个好东西\'",err =>{
    if(err) return err;
    console.log('追加成功');
})
//注意:参数和写入的是一样的, 追加的内容可以用转移符