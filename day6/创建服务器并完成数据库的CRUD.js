const mySql = require('mysql');
const conn = mySql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'root',
    database: 'nodeDB'
});
//查询数据语句
const selectStr = 'select*from heros where isdel=0';
conn.query(selectStr,(err,data)=>{
    if(err) throw err;
    console.log(data);
})
//添加数据语句
// const insertStr = 'insert into heros set ?';
// //要添加的对象
// const hero1 = {
//     name: '猴子',
//     gender: '妖',
//     ctime: '2011-11-11 11:11',
//     isdel: 0
// }
// conn.query(insertStr,hero1,(err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })
//-------------------------------
//修改数据库
const updateStr = 'update heros set? where id = ?'
//前台传过来要修改的数据
const updateHero = {
    id: 4,
    name: '甄姬',
    gender: '美女',
    ctime: '2012-12-12 12:12',
    isdel: 0
}
conn.query(updateStr,[updateHero,updateHero.id],(err,data)=>{
    if(err) throw err;
    if(data.affectedRows == 1){
        console.log('修改成功');
    }
})
//删除数据库数据,其实我们在实际开发中不会真正将客户的资料给删除而是根据一个标记来表明该用户的状态
const deleteStr ='update heros set isdel = 1 where id = 4';
conn.query(deleteStr,(err,data)=>{
    if(err) throw err;
    if(data.affectedRows==1){
        console.log('删除成功')
    }
})