//引入模块
const fs = require('fs');
const path = require('path');
//读取文件进行成绩排序
fs.readFile(path.join(__dirname,'/files/成绩练习.txt'),'utf8',(err,data)=>{
    if(err) return "读取文件失败:" + err.message;
    console.log(data)
    const scoreArr = data.split(" ");
    let str = "";
    //循环遍历得到的数组,去除里面的空格
    scoreArr.forEach((item,index)=>{
        if(item.length > 0){
            const arr = item.split("=");
            str += arr[0] + ":" + arr[1] +"\n";
        }
    })
    //console.log(str.trim());
    //写入文件
    fs.writeFile(path.join(__dirname,'./files/重排成绩.txt'),str.trim(),(err)=>{
        if(err) return "文件写入失败:" + err.message;
        console.log('写入成功');
    })

})