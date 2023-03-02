//按需导入createApp函数
import {createApp} from 'vue'


//导入待渲染的App.vue组件
import App  from './App.vue'

//调用createApp函数，创建SPA应用的实例
const app=createApp(App)


//调用mount()方法把App组件的模板结构，渲染到指定的el区域中
app.mount('#app')