const fs = require('fs');
const path = require('path');
//封装读取文件方法
// function getFile(url,callback){
//     fs.readFile(path.join(__dirname,url),'utf8',(err,dataStr)=>{
//         if(err) return console.log(err.message);
//         callback(dataStr);
//     })
// }
//地狱嵌套
// getFile('./files/1.txt',(data)=>{
//     console.log(data);
//     getFile('./files/2.txt',(data1)=>{
//         console.log(data1)
//         getFile('./files/3.txt',(data1)=>{
//             console.log(data1)
//             getFile('./files/4.txt',(data1)=>{
//                 console.log(data1)
//             })
//         })
//     })

// });
//ES6新方法,promise解决嵌套方法
//通过promise来结合封装函数

function getFile(url){
    //创建一个Promise实例
    let promise = new Promise((resolve,reject)=>{
        fs.readFile(path.join(__dirname,url),'utf8',(err,dataStr)=>{
            if(err) return reject(err.message);
            resolve(dataStr);
        })
    })
    return promise;

}
getFile('./files/1.txt').then((res)=>{
    console.log(res);
    return getFile('./files/2.txt').then((res)=>{
        console.log(res);
        return getFile('./files/3.txt').then((res)=>{
            console.log(res);
            return getFile('./files/4.txt').then((res)=>{
                console.log(res);
            })
        })
    })
})