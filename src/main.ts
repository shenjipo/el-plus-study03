import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(ElementPlus)
ElementPlus.CommonUtils.InitUtils(app._context)
console.log(ElementPlus)
app.mount('#app')
