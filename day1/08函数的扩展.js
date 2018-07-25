//在传参数的时候可以传默认的参数
function getSum(x,y=0){
    return x + y;
}
console.log(getSum(1))//得到的结果为1 此时的传参相当于(x,y||0);
//-----------------------------------------------------
//解构赋值的运用场景 形参结合使用 参数列表里面解构
//-------------------------
//rest参数的用法: ...args
//a>参数不确定的时候用(..args)即(arguments)来当参数
let sum = 0
function getAdd(...args){
    for(let i = 0 ; i < args.length; i++){
        console.log(args[i]);
        sum +=args[i];
    }
    return sum;
}
console.log(getAdd(1,2));
//拓展运算符 ...obj 在调用改方法时候..obj为拓展运算符
//字定义函数不知道参数的数的时候, ...obj为rest参数
let arr = [5,7,8,9,2,3];
let arr2 = [1,1];
console.log(arr)

console.log(...arr);
//add(...arr) = add(5,7,8,9,2,3)
 

