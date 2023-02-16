 const express=require('express');
const router=express.Router();
router.post('/',(req,res)=>{res.send('我仍然喜欢你post')})
router.get('/file/user',(req,res)=>{res.send('我仍然喜欢你get')})
module.exports=router;