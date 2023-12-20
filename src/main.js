import 'bootstrap/dist/css/bootstrap.min.css'
import { createApp } from 'vue'
import App from './App.vue'
import globalComponents from './components/global'

const app = createApp(App)

app.use(globalComponents)

app.mount('#app')
