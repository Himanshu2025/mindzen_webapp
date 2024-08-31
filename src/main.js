import './main.css'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
import router from './routes'

const app = createApp(App)
app.use(router)
app.mount('#app')
