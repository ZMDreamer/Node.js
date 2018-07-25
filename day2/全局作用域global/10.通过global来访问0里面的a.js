require('./09.全局作用域暴露global方法');

//console.log(a) //输出结果'我是09里面的a'
//如果自己局部作用域里面有a变量,则输出自己里面的a
const a = 10;
console.log(a); //输出结果是10