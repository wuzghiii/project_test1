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




//all可以接受任意请求   包括options
app.all('/server11',(request,response)=>{
    
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //允许设置自定义的响应头
    response.setHeader('Access-Control-Allow-Headers','*');
   
    //设置响应体
    response.send('Hello express post');
});










//JSON数据
app.get('/JSON-server',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');

    //允许设置自定义的响应头
    


    //将数据转化为字符串
    const data={
        name:'wwwwsawsww'
    }
    var str=JSON.stringify('data');


    //设置响应体
    response.send(data);
});



//请求超时与网络延迟
app.get('/delay',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');


    //设置一个认为的三秒延迟
    setTimeout(()=>{
       response.send("网络延迟"); 
    },3000)
    
});





//axois_get
//为什么用all->自定义请求头会发options请求
app.all('/axios_get',(request,response)=>{
 //设置响应头 设置允许跨域
 response.setHeader('Access-Control-Allow-Origin','*');
//允许设置自定义的响应头
response.setHeader('Access-Control-Allow-Headers','*');

 response.send();
});



//axois_post
//为什么用all->自定义请求头会发options请求
app.all('/axios_post',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
   //允许设置自定义的响应头
   response.setHeader('Access-Control-Allow-Headers','*');
   
   const data={
    name:'wwwwsawsww',
    address:'wadadawd'
}
    var str=JSON.stringify(data);


    response.send(data);
   });







//axois函数的形式
app.all('/axios_get',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
   //允许设置自定义的响应头
   response.setHeader('Access-Control-Allow-Headers','*');



    response.send();
   });




   

//fetch函数的形式
app.all('/fetch',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
   //允许设置自定义的响应头
   response.setHeader('Access-Control-Allow-Headers','*');

   //json数据
   const data={
    name:'wwwwsawsww',
    address:'wadadawd'
   }
    var str=JSON.stringify(data);


    response.send(data);
   });




   //jsonp服务
   app.all('/jsonp',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
   //允许设置自定义的响应头
   response.setHeader('Access-Control-Allow-Headers','*');

   //json数据
   const data={
    name:'wwwwsawsww',
    address:'wadadawd'
   }

    var str=JSON.stringify(data);


    //jsonp形式响应结果必须是以js形式
    //注意仍要写成字符串形式
    //response.end("console.log('hello,jsonp')");

    //后端的数据可以调用前端的函数来来传给前端
    //前提是前端一定要有这个函数，否则报错
    // response.send('handle('+str+'})') node.js不能用这个形式拼接
    response.send(`handle(${str})`);

   });




   
   //jsonp服务
   app.all('/jsonp_yuansheng',(request,response)=>{
    //设置响应头 设置允许跨域
    response.setHeader('Access-Control-Allow-Origin','*');
   //允许设置自定义的响应头
   response.setHeader('Access-Control-Allow-Headers','*');

   //json数据
   const data={
    exist:true,
    mgs:'已经存在'
   }

    var str=JSON.stringify(data);


    //jsonp形式响应结果必须是以js形式
    //注意仍要写成字符串形式
    //response.end("console.log('hello,jsonp')");

    //后端的数据可以调用前端的函数来来传给前端
    //前提是前端一定要有这个函数，否则报错
    // response.send('handle('+str+'})') node.js不能用这个形式拼接
    response.send(`handle(${str})`);

   });




   



//4.监听端口启动服务
app.listen(8000,()=>{
    console.log("服务器已经启动，8000端口")
})
