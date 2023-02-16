
const express =require('express')
const app=express();
const m1=(req,res,next)=>{console.log('this is 1');next()}
const m2=(req,res,next)=>{console.log('this is 2');next()}
const m3=(req,res,next)=>{console.log('this is 3');next()}
app.get('/',m1,m2,m3,(res,req)=>{'this is homepage'})
app.get('/user',(res,req)=>{console.log('this is user')})
app.listen(8000,()=>{})
