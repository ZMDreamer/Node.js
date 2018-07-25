const fs = require('fs')
const path = require('path')

function readFileFn(url, callback) {
    fs.readFile(path.join(__dirname, url), 'utf8', (err, data) => {
        if (err) throw err
        // console.log(data)
        callback(data)
    })
}

// 嵌套地狱
/* readFileFn('./files/1.txt', (data) => {
    console.log(data)
    readFileFn('./files/2.txt', (data1) => {
        console.log(data1)
        readFileFn('./files/3.txt', (data2) => {
            console.log(data2)
            readFileFn('./files/4.txt', (data3) => {
                console.log(data3)
            })
        })
    })
}) */


// promise的基本使用
// resolve表示成功回调 reject表示失败的回调
/* var promise = new Promise(function(resolve, reject) {
    // var resoleve = (res) => {console.log('我很帅')}
    // console.log(resolve)
    // resolve()
    reject()
})

promise.then((res) => {
    console.log('我很帅')
}, (err) => {
    console.log('我真的很晒')
}) */

function promiseReadFile(url) {
    // 1. new Promise的实例
    let promise = new Promise((resolve, reject) =>{
        fs.readFile(path.join(__dirname, url), 'utf8', (err, dataStr) => {
            if (err) return reject(err)  // 失败的情况下
            // 成功了之后
            resolve(dataStr)
        })
    })
    // 返回promise实例对象
    return promise
}

/* var p = promiseReadFile('./files/11.txt')
p.then((res) => {
    console.log(res, 1111)
}, (err) => {
    console.log(err.message)
}) */

// var p = promiseReadFile('./files/11.txt')
promiseReadFile('./files/1.txt')
.then((res) => {
    console.log(res, 1111)
    return promiseReadFile('./files/2.txt')
})
.then((res) => {
    console.log(res)
    return promiseReadFile('./files/33.txt')
})
.then(res => {
    console.log(res)
    return promiseReadFile('./files/4.txt')
})
.then(res => {
    console.log(res)
})
.catch(function (error) {
    console.log(error);
})

// catch和reject区别
// 1. reject只是当前那一次错误回调
// 2. catch捕获的是所有的错误信息