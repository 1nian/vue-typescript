import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import CommonContent from './components/CommonContent.vue'
import TextContent from './components/TextContent.vue'

const app = createApp(App)

const store = createPinia()

app.component('common-content',CommonContent)
app.component('text-content',TextContent)

app.use(router)
app.use(store)

app.mount('#app')
