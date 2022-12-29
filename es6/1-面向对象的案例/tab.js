let _this
class Tab{
    constructor(id){
        //绑定元素
        _this=this
        this.main=document.querySelector(id);
        this.lis=this.main.querySelectorAll('li');
        this.sections=this.main.querySelectorAll('section');
        this.add=this.main.querySelector('.tabadd');
        this.ul=this.main.querySelector('.fisrstnav ul')
        this.fsection=this.main.querySelector('.tabscon')
        this.init();
    }

    //更新数据
    updateNode(){
        this.spans=this.main.querySelectorAll(' ul li span:first-of-type')
        _this.remove=this.main.querySelectorAll('a')
        _this.lis=this.main.querySelectorAll('li');
        _this.sections=this.main.querySelectorAll('section');
    }

    //init绑定方法
    init(){
        this.updateNode()
        for(let i=0;i<this.lis.length;i++){
            this.lis[i].index=i;
            this.lis[i].onclick=this.toggleTab.bind(this.lis[i],this);
            _this.remove[i].onclick=this.removeTab;
            this.spans[i].ondblclick=this.alterTab;
            this.sections[i].ondblclick=this.alterTab;
        }
        this.add.onclick=this.addTab;
    }


    //切换
    toggleTab(that){
        that.clear()
        this.className='liactive';
        that.sections[this.index].className='conactive'
    }


    //清除样式
    clear(){
        for(let i=0;i<this.lis.length;i++){
            this.lis[i].className='none';
            this.sections[i].className='none'
        }
    }



    //添加方法
    addTab(){
        var li=`<li class="liactive"><span>测试1</span><span class="iconfont icon-guanbi"></span><a href="#">删除</a></li>`
        var section='<section class="conactive">测试1</section>'

        _this.clear();
        _this.ul.insertAdjacentHTML('beforeend',li)
        _this.fsection.insertAdjacentHTML('beforeend',section);
        _this.init()
    }


    //删除
    removeTab(e){
        e.stopPropagation();//停止冒泡
        var index=this.parentNode.index;
        _this.lis[index].remove()
        _this.sections[index].remove()
        




        //如果当前这个被删除的不是被选择的状态就不进行下面的语句
        if(document.querySelector('.liactive'))return



        index--;
        //每次删除就调用前面的选中
        _this.lis[index]&&_this.lis[index].click()

        _this.init()
        
    }



    alterTab(){ 
        this.onselectstart = function(){return false;}; //取消字段选择功能
        let str=this.innerHTML;  
        this.innerHTML='<input form="text">'
        let input=this.firstElementChild
        input.value=str;
        input.select();
        input.onblur=function(){
            this.parentNode.innerHTML=this.value
        }
        input.onkeyup=function(e){
            if(e.key==='Enter'){
                this.blur();
            }
        }
    }

}



new Tab('#tab');