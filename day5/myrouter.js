const path = require('path');
const express = require('express');
const router = express.Router();
router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'./template/index1.html'));

})
router.post('/test',(req,res)=>{
    res.send(req.body);
    console.log(JSON.stringify(req.body));
})
//将router挂载到module.exports上
module.exports = router;