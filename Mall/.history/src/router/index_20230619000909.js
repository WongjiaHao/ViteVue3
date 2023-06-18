/*
 * @Author: Wenjiahao
 * @Date: 2023-06-18 22:08:03
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 00:09:08
 * @FilePath: \Mall\src\router\index.js
 * @Description:
 */
//createRouter 创建路由实例  createWebHistory  路由模式
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index'
import Layout from '@/views/Layout/index'
import frameIn from '@/router/frameIn'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: (Layout),
      children:frameIn
    },

  ]
})

export default router
