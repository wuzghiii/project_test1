
const express =require('express')
const app=express();

app.use(express.json)
app.use(express.urlencoded)
app.post('/user',(res,req)=>{
    console.log(res.body)
})

app.use((err,req,res,next)=>{
    res.send(err.message)
})

app.listen(801,()=>{})
