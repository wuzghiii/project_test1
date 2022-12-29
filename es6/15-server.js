//1.引入express
const express=require('express');

//2.常见应用对象
const app=express();

//3.创建路由规则
//request是对请求报文的封装
//response是对响应报文的封装
app.get('/get',(request,response)=>{

    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //设置响应体
    response.send('Hello express');
});




//4.监听端口启动服务
app.listen(9000,()=>{
    console.log("服务器已经启动，8000端口")
})
