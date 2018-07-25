
//如果定义对象的时候,内部的键和值相同,可以省略值
const name = "张三";
const age = "18";
const sayHi = () =>{console.log('hello,大家好我叫张三')};
const student = {
    name,
    age,
    sayHi
}
console.log(student);
//定义函数的方法
const person = {
    //对象中定义方法的简单方法
    sayHi(){console.log('hello,大家好我叫张三')}
}