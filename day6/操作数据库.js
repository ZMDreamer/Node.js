const mysql = require('mysql');
//1.创建数据库的链接对象
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'nodeDB'
});
//调用connect()方法来链接数据库
//connection.connect();//可选省略
//调用query方法来获取数据
const sqlStr = "select*from users";
connection.query(sqlStr,(err,results)=>{
    if(err) throw err;
    console.log(results);
})
//connection.end();//可以不写