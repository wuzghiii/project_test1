//引入fs模块

const fs=require('fs');



//promise
const p=new Promise((require,reject)=>{
    fs.readFile('./resource/3.txt',(err,data)=>{
        //有错报错没错得到正确数据
        if(err) reject(err);
        require(data)
    })
    
})


p.then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason.toString())
});