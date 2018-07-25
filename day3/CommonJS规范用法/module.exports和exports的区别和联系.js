//在默认的情况下
console.log(module.exports === exports);//输出为true;
//但是给module.exports重新赋值后就不等了
module.exports = {};
console.log(module.exports === exports);//输出为false;
/* --------------总结---------- */
//1.在同一个模块中,默认情况下,module.exports和exports是指向同一个空对象
//2.在同一个模块中,在向外暴露成员的时候永远以module.exports指向的对象为基准