
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import '@/assets/styles/main.less'
import '@/assets/styles/fonts.css'



createApp(App).use(store).use(router).mount('#app')
