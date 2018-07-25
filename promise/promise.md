## promise介绍

1. Promise是一个构造函数
2. Promise有resolve(成功回调)和reject(失败回调)2个函数
3. 在Promise的原型上，有个.then函数表示为Promise指定成功和失败的回调函数`connsole.dir(Promise)`
4. Promise表示一个异步操作
```javascript
// const p = new Promise() // 表示创建一个异步操作
// new Promise(resolve, reject) // resolve 决心;决定  reject  拒绝;排斥
// 1. 创建promise实例
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */){
    resolve(value)
  } else {
    reject(error)
  }
})
// 2. 使用then语法 可以用then方法分别指定resolved状态和rejected状态的回调函数
promise.then(function(value) {
  // success
}, function(error) {
  // failure
})
```

5. `作用`主要用来解决异步函数调用嵌套太深问题的，如果想要按需执行Promise需要把创建Promise放在函数中