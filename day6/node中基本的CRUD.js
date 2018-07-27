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