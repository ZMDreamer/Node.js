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
### node中的模板引擎
1. 主流 jade和ejs jade-破坏式的模板引擎,强依奈和普通的css,html不能共存,但是ejs比较温和可以一起共存
2. jade 的使用方式 下面是简单使用方法
    1. 下载jade,然后调用`jade.readerFile()`来渲染模板
    2. jade根据缩进来规定层级
    3. 标签的属性 `script(src = "文件路径")`,属性放在括号里面并且是逗号分隔
    4. 数据类容的写法,在标签后面空一格直接写就可以了,jade会判断行内元素换行空格的问题,所以不会换行
    5. js脚本的写法和css本页面的写法z注意`style="width:200px;height:200px;background: red`和`style={width:'200px',height:'200px',background:'red'}`两种写法得到的结果一样的,但是只有style可以
    6. class类属性有点像数组所以可以用数组 `class=['aaa','bb','ccc']`只有class来用,普通写法也可以写
    7. 简写方式 ` div.box span#span`
    8. `&attributes`可以让属性的写法变成json格式的数据
   ```
   html
   html
        head
            style
        body
            div
            div
  
   const jade = require('jade');
//渲染模板的方法
var str = jade.renderFile('./jade/1.jade',{pretty: true});
console.log(str);
   ````   




