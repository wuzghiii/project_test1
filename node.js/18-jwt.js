var  express=require('express');
const app=express();


//1导入session
var session=require('session');

//**1导入 jsonwebtoken express-jwt */
var jwt=require('jsonwebtoken');
var expressjwt=require('express-jwt');

//**2定义secret密钥，建议将密钥命名为secretKey */
const secretKey='wadawsda';

//2配置session中间件
app.use(session({
    secret:'key',//secret属性的值可以为任意字符串
    //固定写法
    resave:false,
    saveUninitialized:true
}))


//**4:注册将jwt字符串解析还原成json对象的中间件 */unless内指定哪些接口不需要访问权限
app.use(expressjwt({secret:secretKey})).unless({ path:[/^\/api\//]})
//存数据
app.post('/api/user',(req,res)=>{
    if(req.body.username!='admin'||req.body.password!='11111'){
        return res.send({status:1,msg:'登陆失败'})
    }
    req.session.user=req.body;
    req.session.islogin=true;
    //**3登录成功后，调用jwt.sign()方法，并通过token传送给客户端 */
    //参数1：用户的信息对象
    //参数2：加密的密钥
    //参数3：配置对象，可以配置当前token的有效期
    const tokenStr=jwt.sign({username:req.body.username},secretKey,{expiresIn:'30s'});

    res.send({status:0,msg:'登陆成功',token:tokenStr})
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