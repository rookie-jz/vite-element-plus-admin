import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
// tailwind css
import './index.css'
// reset css
import './styles/reset.css'

import svgIcon from './icons/svgIcon.vue'
import '@/permission'
const app = createApp(App)
// 注册全局svg-icon
app.component('SvgIcon', svgIcon)
app.use(router)
app.use(store)
app.mount('#app')
