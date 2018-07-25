const fs = require('fs');
//  fs.readFile('./files/1.txt','utf8',(err,buff)=>{
//     if(err) return err.message;
//     fs.writeFile('./1-copy.txt',buff,(err)=>{
//         if(err) return "写入失败";
//         console.log('写入成功')
//     })
    
// });
//node8.0以上的版本有 copyFile方法
fs.copyFile('./files/2.txt','./files/mycopy-2.txt',err=>{
    if(err) throw err;//err默认为null,但是如果有错误信息,err及时Error创建出来的对象
    console.log('复制文件成功');
})
