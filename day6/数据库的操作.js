const mysql = require('mysql');
const connect = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'nodeDB'
})
//数据库的修改
const p = {
    id: 1,
    name: '小三',
    age: 18,
    gender: '女'
}
//利用mysql提供的新方法来操作数据库
const updateStr = 'update users set ? where id = ?';
connect.query(updateStr,[p,p.id],(err,result)=>{
    console.log(err);
    console.log(result);
})
//删除数据库
const deleteStr = 'delete from users where id = ?';
connect.query(deleteStr,10,(err,result)=>{
    console.log(err);
    console.log(result);
})