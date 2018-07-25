//箭头函数 将function删掉,在()与{}之间加上箭头 => 
let getSum = (x, y)=>{return x + y};
console.log(getSum(1,2));
//箭头函数内部的this永远和箭头函数外部的this保持一致
 Array.prototype.getData = function(){
    setTimeout(() => {
       console.log(this); //此时的this不在以前的window了,而是跟外面的getData的调用者
    }, 1000);
}
let arr = [0,1];
arr.getData();
Array.prototype.getData = function(){
    setTimeout(function(){
        console.log(this)//此时的this指向的是node里面的系统成员 Timeout
    },1000)
}
let arr1 = [0,1];
arr1.getData();
//------------
//箭头函数的本质是一个匿名函数
//箭头函数的标准的格式 (参数列表)=>{函数体}
//------------------------
//下面是箭头函数的几种变体形式
//变体1: 如果箭头函数的参数列表里只有一个参数则可以省略()
x =>{console.log(x)};
//变体2: 如果箭头函数的函数体只有一行代码可以省略{}
(x,y) => console.log(1111);
//变体3: 箭头函数参数列表只有一个参数并且函数体为一句话, 则()和{}都可以省略
x => console.log(x);
//注意: 如果省略函数体{},那么在执行函数的时候会默认把代码执行的结果返回出去