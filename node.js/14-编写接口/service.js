const express=require('express');
//导入api路由模块
const apirouter=require('./apirouter');



const app=express();



//注册api路由
app.use('/api',apirouter);




app.listen(808,()=>{console.log(`服务器在803端口打开`)})