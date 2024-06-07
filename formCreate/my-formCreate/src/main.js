import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import formCreate from '@form-create/naive-ui'
import install from '@form-create/naive-ui/auto-import'

const app = createApp(App)

formCreate.use(install)

app.use(formCreate)

app.mount('#app')
