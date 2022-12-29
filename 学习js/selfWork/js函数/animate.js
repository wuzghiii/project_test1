function animate(object,target,callback){//object->要移动的盒子   target->目标    callback->回调函数
    clearInterval(object.timer)//防止多次触发事件导致给同一个timer添加过多的定时器
        object.timer=setInterval(function(){//object.timer而不是var timer-->减少生产更多的定时器-->减少内存开销
        //1.（目标值-现在的位置）/10作为每次移动的距离步长   2.用÷号会由小数使得位置不精确--->要取整-->向|绝对值|大的取整?
        //3.所以当它向反方向走时向下取整
        step=(target-object.offsetLeft)/10;
        step=step>0?Math.ceil(step):Math.floor(step);

        
        if(object.offsetLeft==target){//设置停止
            clearInterval(object.timer);

            //在定时器结束后调用回调函数
            //如果回调函数存在的话就调用回调函数，没有的话就不调用
            if(callback){
                callback();
            }
        }
        object.style.left=object.offsetLeft+step+'px'
    },15);
    
   
}