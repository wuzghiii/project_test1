const  express   =  require('express')
const router=require('./9-express模块')
const app=express()
app.use('/go',router);
app.listen(8000,()=>{console.log('服务器成功')})