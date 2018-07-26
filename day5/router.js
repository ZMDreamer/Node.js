const express = require('express');
//new a router object
const router = express.Router();
//set ejs template
var person = {
    name:"张三丰",
    nickname:"张真人",
    skill:['太极剑123','太极拳','九阳神功']
}
//use router to request
router.get('/xm',(req ,res)=>{
    res.render('index.ejs', person);
});
//export the router to outside
module.exports = router;