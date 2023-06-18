/*
 * @Author: Wenjiahao
 * @Date: 2023-06-18 22:08:03
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 00:18:07
 * @FilePath: \Mall\src\router\index.js
 * @Description:
 */
//createRouter 创建路由实例  createWebHistory  路由模式
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/Layout/index.vue'
import frameIn from '@/router/frameIn.js'
import frameOut from '@/router/frameOut.js'

const routes = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: frameIn
  },
  ...frameOut
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
