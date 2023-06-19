/*
 * @Author: Wenjiahao
 * @Date: 2023-06-18 22:08:03
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 01:01:02
 * @FilePath: \Mall\src\main.js
 * @Description: 
 */
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'

const app = createApp(App);

app.use(createPinia())
app.use(router)

app.mount('#app')
