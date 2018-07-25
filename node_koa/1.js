const Koa = require('koa');
const koa_static = require('koa-static');
const server= new Koa();
server.use(function*(next){
    if (this.req.url == '/chou') {
        var n = Math.random();
        if(n<0.01){
            this.body = "1";
        }else if(n < 0.025){
            this.body = "2";
        }else if(n <0.045){
            this.body = "3"
        }else{
            this.body = "0";
        }
    }else{
        yield next;
    }
})


server.use(koa_static('./www'));
server.listen(8080,()=>{
    console.log("123")
});