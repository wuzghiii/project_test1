 
 
const http=require('http')

const server=http.createServer()

server.on('request',(req,res)=>{
console.log('http://localhost:8000')
console.log(req.url+'111')
res.end('good')
})

server.listen(8000,()=>{
   
})














