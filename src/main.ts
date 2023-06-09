import './assets/css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createMirageServer } from './server/data'

const app = createApp(App)

createMirageServer();

app.use(router)

app.mount('#app')
