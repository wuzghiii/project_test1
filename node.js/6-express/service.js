const { query } = require('express');
const express=require('express')


const app=express();


app.get('/a',(req,res)=>{
    let q=req.query;
    console.log(q.a)
    res.send({name:1,age:2})
})

app.post('/:id/:name',(req,res)=>{
    let p=req.params
    console.log(p)
    res.send({name:1,age:2})
})



app.listen(8033,()=>{console.log('8000端口')})