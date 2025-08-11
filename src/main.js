import { createApp } from 'vue'
import { Button, Form, Field, RadioGroup, Radio, CheckboxGroup, Checkbox, Dialog, Toast, NavBar, Image as VanImage } from 'vant'
import './style.css'
import App from './App.vue'
import router from './router'

// 导入Vant样式
import 'vant/lib/index.css'

const app = createApp(App)

// 注册Vant组件
app.use(Button)
app.use(Form)
app.use(Field)
app.use(RadioGroup)
app.use(Radio)
app.use(CheckboxGroup)
app.use(Checkbox)
app.use(Dialog)
app.use(Toast)
app.use(NavBar)
app.use(VanImage)

// 使用路由
app.use(router)

app.mount('#app')
