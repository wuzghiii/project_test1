
const express =require('express')
const app=express();


app.get('/user',(res,req)=>{
    console.log('this is user')
    throw new Error('服务器出错了')
})//抛出一个错误

app.use((err,req,res,next)=>{
    res.send(err.message)
})

app.listen(8000,()=>{})
