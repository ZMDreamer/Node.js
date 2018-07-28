const jade = require('jade');
const fs = require('fs');
const str = jade.renderFile('./jade/10.jade',{pretty:true,json:{
    width: '200px',height:'200px',background:'red'},
arr:['aaaa','left-wrap']})
console.log(str);