import './main.css'
import Aura from '@primevue/themes/aura'
import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config'
const app = createApp(App)

app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

createApp(App).mount('#app')
