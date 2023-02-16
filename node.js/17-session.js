var  express=require('express');
const app=express();


//1导入session
var session=require('session');

//2配置session中间件
app.use(session({
    secret:'key',//secret属性的值可以为任意字符串
    //固定写法
    resave:false,
    saveUninitialized:true
}))

//存数据
app.post('/api/user',(req,res)=>{
    if(req.body.username!='admin'||req.body.password!='11111'){
        return res.send({status:1,msg:'登陆失败'})
    }
    req.session.user=req.body;
    req.session.islogin=true;
    res.send({status:0,msg:'登陆成功'})
})


//取数据
app.get('/api/getuser',(req,res)=>{
    if(!req.session.islogin){
        return res.send({status:1,msg:' fail'})
    }
    res.send({
        status:0,
        msg:'success',
        username:res.session.user.username
    })
})



//退出登录的接口
app.post('/api/logout',(req,res)=>{
    req.session.destroy();
    res.send({
        status:0,
        msg:'退出登录成功'
    })
})