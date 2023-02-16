const mysql=require('mysql');
const db=mysql.createPool({
    host:'127.0.0.1',//数据库的ip地址
    user:'root',//用户名
    password:'123123qwe',//密码
    database:'test01database'//数据库
})



// //更新简化
// //1设置要更新后的对象
// const user={id:'11'}//不需要修改的部分可以不出现
// //2sql语句
// const sqlstr='update users set ? where id=?'
// //3执行
// db.query(sqlstr,[user,'1'],(err,results)=>{
//     if(err) return console.log(err.message)
//     if(results.affectedRows===1){
//         console.log('成功')
//     }
// })


//删除
//1.删除sql代码
const sqlstr2='delete from users where id=?'
//2执行
db.query(sqlstr2,'5',(err,results)=>{
    if(err) return console.log(err.message)
    if(results.affectedRows===1){
        console.log('成功')
    }
})
