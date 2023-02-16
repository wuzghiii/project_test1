const mysql=require('mysql');
const db=mysql.createPool({
    host:'127.0.0.1',//数据库的ip地址
    user:'root',//用户名
    password:'123123qwe',//密码
    database:'test01database'//数据库
})

// //查询
// db.query('select * from users',(err,result)=>{
//     if(err)return console.log(err.message)
//     console.log(result);
// })



//插入
// //1定义新建数据
// const user={id:'4',name:'goodboy' }
// //2定义执行的sql语句
// const sqlstr='insert into users(id,name)values(?,?)'//用问号占位
// //3执行sql语句
// db.query(sqlstr,[user.id,user.name],(err,results)=>{
//     if(err) return console.log(err.message);
//     if(results.affectedRows===1)console.log('插入成功')
// })


//插入简化
//1定义新建数据
const user2={id:'5',name:'goodboy2' }
//2定义执行的sql语句
const sqlstr2='insert into users set ? '//用问号占位\
//3执行sql语句
db.query(sqlstr2,user2,(err,results)=>{
    if(err) return console.log(err.message);
    if(results.affectedRows===1)console.log('插入成功')
})