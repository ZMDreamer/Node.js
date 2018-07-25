const fs = require('fs');
const path = require('path');
//读取文件的具体信息
fs.stat(path.join(__dirname,"../files/eveningPractice.txt"),(err,data)=>{
    if (err)  return console.log(err.message);
    // console.log(data);
});
//读取目录下所有文件和文件夹的名称
fs.readdir(path.join(__dirname),(err,filesname)=>{
});
//返回文件下最后一个文件
path.basename('/day2/eveningRevie/');
//给文件路径返回文件完整目录
path.dirname('/day1');
