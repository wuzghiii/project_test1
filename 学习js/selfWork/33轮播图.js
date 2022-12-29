//页面加载后加载js
window.addEventListener('load',function(){

    //自动播放轮播图
     //手动调用 事件arrow_r.click();--->手动调用点击事件
    var timer=this.setInterval(function(){
        arrow_r.click();
     },2000);
    //获取元素
    var focus=this.document.querySelector('.focus')
    var arrow_l=this.document.querySelector('.arrow_l')
    var arrow_r=this.document.querySelector('.arrow_r')
    var list_ul=focus.querySelector('.item').querySelector('ul');
    var img_ul=focus.querySelector('.img');
    var foucsWidh=focus.offsetWidth;//父盒子的宽度
    var num=0;
    var circle=0;

     //1.实现鼠标进入轮播图才显示左右按钮
    focus.addEventListener('mouseenter',function(){
        arrow_r.style.display='block';
        arrow_l.style.display='block';
        clearInterval(timer);//清除定时器
        timer=null
    })//出现
    focus.addEventListener('mouseleave',function(){
        arrow_r.style.display='none';
        arrow_l.style.display='none';
        timer=setInterval(function(){//打开定时器
            arrow_r.click();
         },2000);
    
    })//消失


    //2.动态生成小圆圈
    //核心思路：根据图片个数获得小圆圈个数
    var imgLength=img_ul.children.length;//图片长度
    for(let i=0;i<imgLength;i++){
        var li=this.document.createElement('li');
        li.setAttribute('index',i);
        list_ul.appendChild(li);
        li.addEventListener('click',function(){
            //3.排他思想
            //干掉别人
            for(var i=0;i<imgLength;i++){
                list_ul.children[i].className=''
            }
            //给给自己
            this.className='current'


            //4.添加动画
            //核心：索引号x父盒子的宽度
            //索引号:自定义属性获得
            console.log(this.getAttribute('index'))
            var index=Number(this.getAttribute('index'))//索引
            num=circle=index;
            animate(img_ul,-index*foucsWidh);
        })
    }
    list_ul.children[0].className='current'//让第一个小圆圈是选中态

    //番外.将最后一张（真实） 克隆 一张到最后去
    var firtImg=img_ul.children[0].cloneNode(true);
    img_ul.appendChild(firtImg);

     //5.给右按钮添加点击移动事件num circle
     
     var flag=true;
     arrow_r.addEventListener('click',function(){
        //无缝转动
        //当图为最后一张（表现）再次摁下按钮后让图往下走但最后一张（真实）为第一张并快速调到第一张
        if(flag){
            flag=false;
            if(num==img_ul.children.length-1){
                img_ul.style.left=0;
                num=0;
            }
             num++;
             animate(img_ul,-num*foucsWidh,function(){
                flag=true;
             });
             //6.点击右侧按钮让小圆圈和图片一起走
             circle++;
                //排他
            if(circle==imgLength){//这里不能用imgLength-1而是imgLength因为 imgLength=不带最后节点的数量即下标imgLength是最后一张而最后一张就是第一张
                circle=0;
            }
            circleChange()
        }

     })


     arrow_l.addEventListener('click',function(){
        //无缝转动
        //当图为最后一张（表现）再次摁下按钮后让图往下走但最后一张（真实）为第一张并快速调到第一张
        if(flag){
            flag=false;
            if(num==0){
                num=img_ul.children.length-1;
                img_ul.style.left=-num*foucsWidh+'px'
    
            }
             num--;
             animate(img_ul,-num*foucsWidh,function(){
                flag=true
             });
             //6.点击右侧按钮让小圆圈和图片一起走
            
                //排他
            circle--;
            if(circle<0){//这里不能用imgLength-1而是imgLength因为 imgLength=不带最后节点的数量即下标imgLength是最后一张而最后一张就是第一张
                circle=img_ul.children.length-2;;
            }
           
            
            circleChange()
            //  for(var i=0;i<imgLength;i++){
            //     list_ul.children[i].className=''
            //  }
            //  list_ul.children[circle].className='current'
             
        }
     })


     function circleChange(){
        for(var i=0;i<imgLength;i++){
            list_ul.children[i].className=''
         }
         list_ul.children[circle].className='current'
     }


     //自动播放轮播图
     //手动调用 事件arrow_r.click();--->手动调用点击事件
     var timer=this.setInterval(function(){
        arrow_r.click();
     },2000);





})