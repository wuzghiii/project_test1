const fs=require('fs');
fs.readFile('./成绩.txt','utf-8',(err,str)=>{
    if(err){
        return console.log('读取失败')
    }
    console.log('读取成功'+str);
     //将得到的数据转变
     const arrOld=str.split(' ');
     const arrNew=[]
     arrOld.forEach(item=>{
        arrNew.push(item.replace('=',':'));
     })
     const newStr= arrNew.join('\r\n')
    //  console.log(newStr)

    fs.writeFile('./成绩ok.txt',newStr,err=>{
        if(err){
            return console.log('写入失败')
        }
        console.log('写入成功')
    })
});
