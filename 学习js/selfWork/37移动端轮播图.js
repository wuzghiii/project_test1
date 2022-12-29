window.addEventListener('load',function(){
    //1.绑定元素
    var focus=this.document.querySelector('.focus');
    var imgUl=focus.children[0];
    var focusW=focus.offsetWidth;;//focus的宽度
    var circrleList=focus.querySelector('ol');
   



    //2.定时器的方法添加移动图片
    var index=0;
    var timer=setInterval(move,2000);
    function move(){
        index++;
        var translatex= -index*focusW;
        imgUl.style.transition='all .3s';//添加动画
        imgUl.style.transform='translateX('+translatex+'px)';
    }


    //3等待过度完成后发生的事件
    imgUl.addEventListener('transitionend',function(){ 
        if(index>=imgUl.children.length-2){//index到到达最后一张的时候 即物理上的最后一张
            index=0;//返回第一张
            this.style.transition='none';
            imgUl.style.transform='translateX('+'-'+index*focusW+'px)';
        }
        if(index<0){//index到到达左边的时候一张的时候
            index=imgUl.children.length-3;//让图片迅速条到最后一张的前一张即 意义上的最后一张
            this.style.transition='none';
            imgUl.style.transform='translateX('+'-'+index*focusW+'px)';
        }


        //4原点移动
        //先移除current类
        circrleList.querySelector('.currentRadio').classList.remove('currentRadio');
        //再给当前下标的原点添加current类
        circrleList.children[index].classList.add('currentRadio')
    })
      //5手指拖动轮播图
        //本质-->移动端拖拽元素
        //注意点 千万别放到translated里不然运行不了
        var touchstartX=0
        var touchendX=0
        var flag=false;//只有再flag=true即拖动时才会进行touched判断事件
        imgUl.addEventListener('touchstart',function(e){
            touchstartX=e.targetTouches[0].pageX;
            e.preventDefault()//阻止默认判断行为
            clearInterval(timer);//清除定时器
            
        })
        imgUl.addEventListener('touchmove',function(e){
            flag=true;
            touchendX=e.targetTouches[0].pageX-touchstartX;
            imgUl.style.transition='none'
            var translateX=-index*focusW+touchendX
            this.style.transform='translateX('+translateX+'px)';
        })
    //6手指滑动轮播图上下张
    imgUl.addEventListener('touchend',function(e){
        if(flag){
        if(Math.abs(touchendX)>50){
            if(touchendX<0){//向右拖动，则掉向下一张
                index++

            }else{
                index--//向左拖动，则掉向上一张
            }
            
        }
        var translateX=-index*focusW
        imgUl.style.transition='all .3s';//添加动画
        imgUl.style.transform='translateX('+translateX+'px)';
        clearInterval(timer);//清除定时器-->防止生成多个定时器
        timer=setInterval(move,2000);//重新打开定时器
        flag=false;
    }
    });

})