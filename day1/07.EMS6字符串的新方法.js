//1. stratWidth() 用来判断一个字符串是否以指定的字符串开头,如果是就返回true, 否则为false
let str = "abcd";
console.log(str.startsWith('a'));
//2. endWidth() 用来判断一个字符串是否以指定的字符串结尾, 如果是就返回true, 否则为false
let test = "good";
console.log(test.endsWith('d'));
//3. padStart(参数1,参数2); 参数1为填充后的字符串总长度, 参数2为填充的内容;在字符串的前面填充,返回填充后的类容
console.log(str.padStart(5,"12"))//如果传入多个参数默认是靠前填充
console.log(str.padStart(5,""))//参数可以为空
//4. padEnd();用法类似padStart,只是往字符串的后面填充字符
console.log(str.padEnd('5','1'))
