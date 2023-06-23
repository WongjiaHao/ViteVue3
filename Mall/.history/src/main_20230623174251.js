/*
 * @Author: Wenjiahao
 * @Date: 2023-06-18 22:08:03
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-23 17:42:42
 * @FilePath: \Mall\src\main.js
 * @Description: 
 */
// import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import '@/styles/common.scss'
import {lazyLoad} from '@/directives/index.js'
import { componentPlugin } from '@/components/componentPlugin'
import {showMsg} from '@/utils/showToast.js'

const app = createApp(App);
app.config.globalProperties.$showMsg = showMsg;
app.use(componentPlugin)
app.use(createPinia())
app.use(router)
app.use(lazyLoad)
app.mount('#app')
