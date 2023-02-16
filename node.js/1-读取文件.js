const fs=require('fs')
// fs.readFile('./文件.txt',(err,dataStr)=>{
//     console.log(err)
//     console.log(dataStr.toString());
// })



fs.readFile('./文件.txt','utf-8',(err,fileStr)=>{
    if(err){//不出错时 err=null true    出错时 err=对象 false
        console.log('出错了')
    }
    console.log(fileStr)
})