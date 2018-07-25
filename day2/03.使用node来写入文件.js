//引入fs模块
const write = require('fs');
write.writeFile('./2.txt',"node写入的内容",(err)=>{
    if (err) return err.message;
    console.log('写入文件成功')
        
})
//注意写入文件方法有四个参数, 第三个参数默认是utf8可以省略, 假如写入的文件路劲不存在就会创建一个新的文件,如果存在就会覆盖以前的内容
