//引入node的读取文件的fs模块
const readFile = require('fs');
//调用fs模块里面包含的readfile方法读取文件,有三个参数
//参数1, 读取文件的路径
//参数2, 读取文件输出结果的编码格式, 默认是二进制文件,可选参数
//参数3, 回调函数,回调函数有两个参数,第一个err是Error构造出来的对象,而buff是Buffer构造出来得对象
//传第二个参数的情况
// readFile.readFile('./files/1.txt','utf8',(err,buff)=>{
//     if (err) {
//         return console.log(err.message);
//     }
//     console.log(buff); //输出的结果为1.txt里面的内容,格式是字符串
// })
//不传第二个参数的情况
// readFile.readFile('./files/1.txt',(error,buff)=>{
//     if (error) {
//         return console.log(error.message);
//     }
    
//     console.log(buff instanceof Buffer); //buff是Buffer实例出来的对象
//    // console.log(buff); //输出的结果也是1.txt内容,但是,格式是16进制的编码
//     //console.log(buff.toString())//把16进制转换为字符串utf8的编码格式
//     console.log(buff + "")//把16进制转换为字符串,利用字符串拼接方法也可以实现同样的效果
// })
//输出的错误信息
readFile.readFile('./files/1.txt',(error,buff) =>{
    console.log(error instanceof Error); //输出为true
    if (error) 
        return console.log(error.message);
    

})