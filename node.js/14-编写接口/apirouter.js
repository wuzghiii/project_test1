const express=require('express');
//创建api
const router=express.Router();

//导入cors
const cors=require('cors')

//设置防止跨域的中间件
router.use(cors())





//挂载对应的路由

//get接口
router.get('/get',(req,res)=>{
     //设置响应头 设置允许跨域
    
    const query=req.query//获取get请求传递过来的参数
    res.send({
        status:0, //0成功，1失败
        msg:'传输成功',//状态的具体描述信息
        data:query//需要响应给客户端的数据
    })
})

//post接口
router.post('/post',(req,res)=>{  
    //设置响应头 设置允许跨域
   
    const body=req.body//获取get请求传递过来的参数
   
    res.send({
        status:0, //0成功，1失败
        msg:'传输成功',//状态的具体描述信息
        data:body//需要响应给客户端的数据
    })
})


//del路由
router.delete('/delete',(req,res)=>{  
    //设置响应头 设置允许跨域
    res.setHeader('Access-Control-Allow-Origin','*');
    const body=req.body//获取get请求传递过来的参数
   
    res.send({
        status:0, //0成功，1失败
        msg:'传输成功',//状态的具体描述信息
        data:body//需要响应给客户端的数据
    })
})


module.exports=router;


