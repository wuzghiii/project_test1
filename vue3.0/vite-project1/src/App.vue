<template>
  <h1>这是vue组件</h1>
  <h1>这是vue组件</h1>
  <button @click="addCount">添加</button>
  <div>{{count}}</div>
  <input type="text" v-model.number="count">
  
</template>



<script>
export default {
  //通过name的形式来定义组件的名称
  name:'Myapp',
  

  //数据节点
  data () {
    return {
      count:1
    }
  },


  //方法节点
  methods: {
    addCount(){
      //通过this调用data内的数据
      this.count++
    }
  }  
}
</script>