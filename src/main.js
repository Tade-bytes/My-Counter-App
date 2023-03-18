import { createApp } from 'vue'
import App from './App.vue'
import store from './components/store'
import router from './routes/router'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')

