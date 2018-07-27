## 后台处理session 和 cookies
1. 基本介绍: http-无状态,所以需要利用session和cookies来记录一些数据
2. cookie: 在浏览器保存一些数据,每次请求都会带过来
        1. 不安全,数据最大才(4k)
3. session: 保存数据,数据保存在服务端
        1. 安全,数据量基本是无限的
        2.基于cookie实现的,cookie中会有一个sessio的ID, 服务器利用sessionid找到session文件来进行读取和写入
        3.隐患:session劫持
-----
### 后台处理cookie和session过程
- 发送cookie,给cookie添加标记 res.secret = "字符串";
+ 设置cookie, res.cookie(名字,值,{path:'/',maxAge:毫秒,signed:true});
+ 读取前台cookie  npm i cookie-parser --save 安装cookie-parser中间件
```
  server.use(cookieParser('秘钥'));
  server.use(()=>{
      req.cookies //获取的是未签名版的cookie
      req.signedCookies  //签名版的
  })
```
+ 删除cookie `res.clearCookie(名字)`;
+ cookie-encrypter 给cookie加密的
------------------
** session 过程 **
+ cookie-session
```
server.use(cookieParser());
server.use(cookieSession(){
    keys:[值1,值2,....]
})
server.use('/',(req,res)=>{
);
    //session设置
    req.seesion
    delete res.session[]
})
```




