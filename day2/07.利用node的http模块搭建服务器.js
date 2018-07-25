const http = require('http');
// var server = http.createServer((req,res)=>{
//     console.log("有人访问了");
//     //输出响应
//     res.write("someone is coming");
//     res.end();
// });

var server=http.createServer(function (req, res){
    switch(req.url){
      case '/1.html':
        res.write("111111");
        break;
      case '/2.html':
        res.write("2222");
        break;
      default:
        res.write('404');
        break;
    }
  
    res.end();
  });
  
  //监听——等着
  //端口-数字
  //server.listen(8080);