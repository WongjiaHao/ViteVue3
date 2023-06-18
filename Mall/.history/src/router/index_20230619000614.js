/*
 * @Author: Wenjiahao
 * @Date: 2023-06-18 22:08:03
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 00:05:38
 * @FilePath: \Mall\src\router\index.js
 * @Description:
 */
//createRouter 创建路由实例  createWebHistory  路由模式
import { createRouter, createWebHistory } from 'vue-router'
import Login from '@/views/Login/index'
import Layout from '@/views/Layout/index'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
