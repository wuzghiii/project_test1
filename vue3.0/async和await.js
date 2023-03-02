
const thenFs=require('then-fs')


async function getAllfile(){
    //这里then-fs相当于一个封装好的fs的一个promise对象
    //await相当于获取了promise.then((value)=>{})中的value
    const f1= await thenFs.readFile('./async和await.js','utf8');
    console.log(f1);
    const f2= await thenFs.readFile('./async和await.js','utf8');
    console.log(f2);
    const f3= await thenFs.readFile('./async和await.js','utf8');
    console.log(f3);
}

getAllfile();
