const express=require('express');
const app=express();


//创建一个中间件
//创建第一个中间件
const mw=function(req,res,next){
    req.starttime=Date.now();
    next();
}
//创建第二个中间件
const mw2=function(req,res,next){
    console.log('这是第二个中间件偶·')
    next();
}



//创建一个全局生效的中间件
app.use(mw);
app.use(mw2);


app.get('/',(req,res)=>{console.log('this home page'+req.starttime)})
app.get('/user',(req,res)=>{console.log('this user page'+req.starttime)})


app.listen('8000',()=>{})