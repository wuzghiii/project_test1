//1.引入express
const express=require('express');

//2.常见应用对象
const app=express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/home',(request,response)=>{
    //__dirname当前文件夹所在的目录
    response.sendFile(__dirname+'/index.html');
});




app.all('/data',(request,response)=>{
    response.send('喜欢');
});

//4.监听端口启动服务
app.listen(9000,()=>{
    console.log("服务器已经启动，9000端口")
})
