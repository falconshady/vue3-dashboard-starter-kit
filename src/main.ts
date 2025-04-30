import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/main.css'

import moment from 'moment';

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.provide('moment', moment);

app.use(createPinia())
app.use(router)

app.mount('#app')
