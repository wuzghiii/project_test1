const  express   =  require('express')

const app=express()
app.use('/web',express.static('./4-web服务器使用'))
app.listen(80,()=>{})