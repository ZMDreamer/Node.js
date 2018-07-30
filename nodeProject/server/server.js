const express = require('express');
const CORS = require('cors');
const mySql = require('mysql');
const bodyParser = require('body-parser');
const moment = require('moment');

const app = express();
//引入跨域文件
app.use(CORS());
//调用bodyParser来进行解析post数据
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json())
//链接数据库
const conn = mySql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodeDB'
})
//get请求接口设置
app.get('/api/getheros', (req, res) => {
    //查询数据库数据
    let selectStr = `select * from heros where isdel = 0`;
    conn.query(selectStr, (err, results) => {
        if (err) return res.json({
            err_code: 1,
            msg: '获取数据失败',
            affectedRows: 0
        });
        res.json({
            err_code: 0,
            msg: '获取数据成功',
            data: results,
            affectedRows: 0
        })
    })

})

//post修改数据接口
app.post('/api/updatehero', (req, res) => {
    //修改语句
    if (!req.body.name) return res.json({
        err_code: 1,
        msg: '用户名参数不能为空'
    });
    if (!req.body.gender) return res.json({
        err_code: 1,
        msg: '用户名性别参数不能为空'
    });
    if (!req.body.id) return res.json({
        err_code: 1,
        msg: '英雄参数id参数不能为空'
    });
    let updateStr = `update heros set ? where id = ?`
    conn.query(updateStr, [req.body, req.body.id], (err, results) => {
        if (err) return res.json({
            err_code: 1,
            msg: '修改失败',
            affectedRows: 0
        });
        if (results.affectedRows !== 1) return res.json({
            err_code: 1,
            msg: '更新英雄失败',
            affectedRows: 0
        });
        res.json({
            err_code: 0,
            msg: '更新英雄成功',
            affectedRows: 1
        })
    })
})
//根据id获取英雄
app.get('/api/gethero', (req, res) => {
    //查询数据库数据
    let id = req.query.id;
    if (!id) return res.json({
        err_code: 1,
        msg: '英雄参数id不能为空'
    });
    let selectStr = `select * from heros where id = ?`;
    conn.query(selectStr, id, (err, results) => {
        if (err) return res.json({
            err_code: 1,
            msg: '获取数据失败',
            affectedRows: 0
        });
        if (results.length !== 1) return res.json({
            err_code: 1,
            msg: '获取的数据不存在',
            affectedRows: 0
        });
        res.json({
            err_code: 0,
            msg: '获取数据成功',
            data: results,
            affectedRows: 0
        })
    })

})

//根据id来删除数据
app.get('/api/delhero', (req, res) => {
    //查询数据库数据
    let id = req.query.id;
    if (!id) return res.json({
        err_code: 1,
        msg: '英雄参数id不能为空'
    });
    let delStr = `update heros set isdel = 1 where id = ?`;
    conn.query(delStr, id, (err, results) => {
        if (err) return res.json({
            err_code: 1,
            msg: '删除英雄失败',
            affectedRows: 0
        });
        if (results.affectedRows !== 1) return res.json({
            err_code: 1,
            msg: '删除英雄失败',
            affectedRows: 0
        });
        res.json({
            err_code: 0,
            msg: '删除英雄成功',
            affectedRows: results.affectedRows
        })
    })

})

//根据前台数据更新数据库
app.post('/api/addhero', (req, res) => {
    req.body['ctime']=moment().format('YYYY-MM-DD HH:mm:ss')
    //更新数据语句
    let updateStr = `insert into heros set ?`;
    if (!req.body.name) return res.json({
        err_code: 1,
        msg: '用户名参数不能为空'
    });
    if (!req.body.gender) return res.json({
        err_code: 1,
        msg: '用户名性别参数不能为空'
    });
    console.log(req.body);
    conn.query(updateStr, req.body, (err, results) => {
        if (err) return res.json({
            err_code: 1,
            msg: '添加英雄失败',
            affectedRows: 0
        });
        console.log(results);
        if (results.affectedRows !== 1) return res.json({
            err_code: 1,
            msg: '添加英雄失败',
            affectedRows: 0
        });
        res.json({
            err_code: 0,
            msg: '添加英雄成功',
            affectedRows: results.affectedRows
        })

    })
})
















app.listen(5000, () => {
    console.log(`http://127.0.0.1:5000`);
})