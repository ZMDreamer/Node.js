require('http').createServer((req,res)=>{
    let GET = {};
    if (req.url.indexOf('?')!=-1) {
        let urlArr  =req.url.split('?');
        var url = urlArr[0];
        GET =require('querystring').parse(urlArr[1]);       
    }else{
        var url = req.url;
    }
console.log(url,GET);
res.end('hello,world');
}).listen(8080);