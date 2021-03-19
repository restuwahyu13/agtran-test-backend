import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import axios from 'axios'
import router from './router'
import App from './App.vue'

const app = createApp(App)
app.use(router)
app.provide('$http', axios)
app.config.globalProperties.$http = axios
app.mount('#app')
