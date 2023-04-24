import { createApp } from 'vue'
<<<<<<< HEAD
=======
import { createPinia } from 'pinia'

>>>>>>> 215ffaa0dde0cf6bb7843cbb3a46165f1c4f1d0b
import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

<<<<<<< HEAD
=======
app.use(createPinia())
>>>>>>> 215ffaa0dde0cf6bb7843cbb3a46165f1c4f1d0b
app.use(router)

app.mount('#app')
