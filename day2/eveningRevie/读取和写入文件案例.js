//引入文件和路径模块
const fs = require('fs');
const path = require('path');
//读取文件路径
fs.readFile(path.join(__dirname,"../files/成绩练习.txt"),'utf8',(err,buff)=>{
    if(err) return console.log(err.message);
    const scoreArr = buff.split(' ');
    let scoreStr = "";
    scoreArr.forEach((value,index)=>{
        if (value.length>0){
            const tempArr = value.split('=');
            scoreStr +=tempArr[0] + ":"+ tempArr[1]+"\n";
        };
       
    })
    fs.writeFile(path.join(__dirname,'../files/eveningPractice.txt'),scoreStr.trim(),(err)=>{
        if(err) return console.log(err.message);
        console.log('重新排列成功');
    })



})