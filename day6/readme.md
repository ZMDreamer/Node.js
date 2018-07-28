### 模块加载机制
1. 根据包的名称在当前项目中查找一个叫`node_modules`的文件
2. 如果有`node_modules`文件夹,则在里面查找一个引用模块的文件名称
3. 如果有该文件,则在里面查找一个`package.json`的文件
4. 如果有`package.json`,则在其中查找main,并尝试加载main指定的文件夹
5. 如果能正常加载main中指定的文件,则表示包加载成功
6. 如果`package.json`文件,没有查找到main属性,则尝试加载index文件,顺序为index.js > index.json>index.node
7. 如果在包根目录中,根本找不到`package.json`文件或者`node_modules`目录中没有index文件或者没有`node_modules`则会去向上查找`node_modules`
8. 如果在上一层中还是没有找到对应模块,则继续向上查找,直到找到项目所在的磁盘项目根目录
9. 如果根目录中都没有,那就会报错
------
### moment格式化时间包使用方法
+ 通过 cnpm i moment --save安装
+ 调用moment()函数方法 format()
 ```
 const express = require('express');
//导入时间模块,第三方的包moment结果是个函数
const moment = require('moment');
const app = express();
//调用函数中的方法格化时间
var  currentTime = moment().format('YYYY-MM-DD: HH:mm:ss');
app.get('/',(req ,res)=>{
    res.send(currentTime);

})
console.log(currentTime);
app.listen(8080);
 ```
 ------------
 ### node链接数据库
 1. 通过 npm i mysql --save 安装第三方包
 2. 导入`require('mysql')`包, 创建数据库链接对象
 3. 通过创建的对象来调用`connect()`方法来链接数据库,此步骤可以省略
 4. 利用对象调用`query('查询语句',回调函数)`来操作数据库
 5. 执行结束方法来确保下次查询的时候数据库正常运行
   ```
        const mysql = require('mysql');
        //1.创建数据库的链接对象
        const connection = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database: 'nodeDB'
        });
        //调用connect()方法来链接数据库
        connection.connect();//可选参数
        //调用query方法来获取数据
        const sqlStr = "select*from users";
        connection.query(sqlStr,(err,results)=>{
            if(err) throw err;
            console.log(results);
        })
        connection.end();//也是可选参数
   ```
   ----------
   ### node对数据库的增删改查
   1. 执行上面的步骤链接数据库
   2. 数据的操作
    1. 查询数据调用 `connection.query(查询语句,回调函数)`
   3. 注意此处我们可以借用mysql模块提供的方法来进行操作数据库的简单写法 `const insertStr = 'insert into users set ?'`
    *** + 这里的问号表示站位符,将来需要使用具体的参数来替换这个英文?,此时`query()`函数需要三个参数,第二个参数为要修改的内容
    + 在做增加数据操作的时候,传过来的数据必须和数据库设计表的选项的键一样并且此时用到了 `set`
    + 如果查询语句有多个?则调用`query()`函数的第二这个参数为数组,并且数组里面的索引要和查询语句里面`?`一一对应;具体可以看下面代码 ***
  ```
  const mysql = require('mysql');
const conn = mysql.createConnection({
    host:'127.0.0.1',
    user:'root',
    password: 'root',
    database: 'nodeDB'
})
//数据的查询
const selectSql = 'select*from users';
conn.query(selectSql,(err,data)=>{
    if (err) throw err;
    console.log(data); 
  
})
//数据的添加
var p1 = {
    name:'张三',
    age: 18,
    gender:'女'
}

//const insertStr = 'insert into users (name,age,gender) values("'+p1.username+'","'+p1.age+'","'+p1.gender+'")';
//sql语句简单写法
const insertStr = 'insert into users set ?'//这里的问号表示的是占位符,将来需要使用具体的参数来填充这个?注意此时的数据里面的名字必须和数据库一样
mysqlHandle(conn,insertStr,p1);
//数据的修改
var p2 = {
    id: 4,
    name:'张三',
    age: 18,
    gender:'女'
}
const updateStr = 'update users set ? where id = ?';
mysqlHandle(conn,updateStr,[p2,p2.id]); //如果有多个?则跟数组的每一项对应数组的索引
//数据的删除
const deleteStr = 'delete from users where id = ?'
mysqlHandle(conn,deleteStr,7);
//封装一个函数用来完成create(增加),update(修改),retrieve(查找),delete(删除)
function mysqlHandle(conn,str,obj){
    conn.query(str,obj,(err,data)=>{
        if(err) return console.log(err);
        //执行成功
        if (data.affectedRows == 1) {
            console.log('执行成功');
        }else{
            console.log('操作失败 ');
        }
    })
}
  ```
### 前后端分离开发模式注意点-跨域问题
1. 如果不考虑表单的Post提交,可以使用JSONP来请求接口
2. 所以需要CORS来跨域资源共享(Cross-Origin resource sharing)
   + jsonp的原理是动态创建script标签来请求,核心就是后台返回一个函数的调用,返回函数的参数就是数据
   + jsonp发送的不是ajax请求,不支持Post请求
3. CORS本质: 使用XHR对象,发送ajax请求,进行跨域的资源共享
   + CORS 发送的是真正的ajax请求
   + 支持ajax的跨域
   + 原理核心是: 自服务器端支持CORS,则浏览器能够正常访问CORS接口,效果跟普通的ajax请求一样
4. 在Node中CORS 跨域通信,只需要下载第三方模块CORS然后使用即可