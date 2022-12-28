import { createApp } from 'vue'
import App from './App.vue'
import { key, store } from './store'
import '@fortawesome/fontawesome-free/css/all.css'
import roteador from './router'

createApp(App).use(store)
    .use(roteador)
    .use(store, key)
    .mount('#app')
