import './main.css'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './routes'
import store from './store/store'

const app = createApp(App)
app.use(store)
app.use(router)
app.mount('#app')
