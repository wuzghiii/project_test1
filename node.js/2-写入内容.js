const fs=require('fs');
fs.writeFile('./文件.txt','123456','utf-8',(err)=>{
    //读取失败
    if(err){
        console.log('读取失败')
    }
    console.log('读取成功')
})