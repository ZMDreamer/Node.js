const fs = require('fs');
const path = require('path');
const filepath = path.join(__dirname + '/files/1.txt');//此处files前面的/可以省略
console.log(filepath);
fs.readFile(filepath,'utf8',(err,buff)=>{
    if(err) return err.message;
    console.log(buff);
})
//在Node中,使用fs模块来操作文件的时候,如果我们给定的路径是一个以'./'开头的相对路径
//则Node在查找此文件的时候, 永远是相对于我们指定Node命令所在目录来进行查找这个文件
/* 解决办法 */
//推荐使用绝对路径 __dirname + '文件路劲的方法'来解决 __dirname: 代表当前文件所在的目录 __filename: 代表当前文件的完整路径
//利用path模块中的方法来解决 path.join(__dirname,'相对路径'),  此方法解决了'/'和'\'的文件路径问题   