//1. 利用const定义的常量没有变量提升
//2. 变量不能被重新赋值,但是复杂数据类型可以添加属性和方法
//3.  定义const常量必须定义并初始化(赋值),否则会报语法错误
const b = 10;
console.log(b);
// b = 20;
// console.log(b);
const a = {};
a.name = '张三';
console.log(a);