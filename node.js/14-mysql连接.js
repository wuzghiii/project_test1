//1导入mysql模块
const mysql=require('mysql')


//2建立与mysql数据库的连接
const db=mysql.createPool({
    host:'127.0.0.1',//数据库的ip地址
    user:'root',//用户名
    password:'123123qwe',//密码
    database:'test01database'//数据库
})


//3测试
db.query('select 1',(err,results)=>{
    //mysql模块工作期间报错了
    if(err) return console.log(err.message);
    //能够成功的执行sql语句
    console.log(results)
})