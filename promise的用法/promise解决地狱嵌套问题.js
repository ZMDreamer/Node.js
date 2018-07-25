const fs = require('fs');
const path = require('path');
//利用promise的特性定义一个按队列的方式来读取文件的函数
function readFileByPromise(url){
    //创建一个promise实例对象
    let promise = new Promise((resolve,reject)=>{
        //读取文件
        fs.readFile(path.join(__dirname,url),'utf8',(err,dataStr)=>{
            if(err) return reject(err);
            resolve(dataStr); 
        })
    })
    return promise;
}
//调用函数读取文件
readFileByPromise('./files/1.txt').then((data)=>{
    console.log(data);
    return readFileByPromise('./files/2.txt')
}).then((data1)=>{
    console.log(data1);
    return readFileByPromise('./files/5.txt')
}).catch((err1)=>{
    console.log(err1);
}).then((data3)=>{
    console.log(data3);
   return readFileByPromise('./files/4.txt')
}).then((data4)=>{
    console.log(data4)
})