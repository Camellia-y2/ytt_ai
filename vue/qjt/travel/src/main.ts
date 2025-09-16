import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia} from 'pinia';
import './style.css'

// 引入pinia
const pinia = createPinia();
// vue 全家桶到齐
createApp(App)
      .use(pinia)
      .use(router) // SPA
      .mount('#app')
      

