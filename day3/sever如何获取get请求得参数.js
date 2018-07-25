const http = require('http');
const fs = require('fs');
const path = require('path');

 http.createServer((req,res)=>{
let GET = {};
let url;
    if (req.url.indexOf('?') !=-1) {
        let urlArr = req.url.split('?');
         url = urlArr[0];
        let tmpArr = urlArr[1].split('&');
        tmpArr.forEach((item,index)=>{
             let tmpValue = item.split('=');
          GET[tmpValue[0]]=tmpValue[1];
        })
      
    }else{
         url = req.url;
    }
    console.log(url,GET)
        res.end();
}).listen(7070);