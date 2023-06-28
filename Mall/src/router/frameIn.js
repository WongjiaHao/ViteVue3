/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:08:35
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-29 01:27:43
 * @FilePath: \ViteVue3\Mall\src\router\frameIn.js
 * @Description:
 */
import Home from '@/views/Home/index.vue'
const frameIn = [
  {
    name: 'home',
    path: '/',
    component: Home
  },
  {
    name: 'category',
    path: '/category/:id',
    component: () => import('@/views/Category/index.vue'),
    // children:[
    //     {
    //         name: 'subCate',
    //         path: '/subCate/:id', 
    //         component: () => import('@/views/SubCategory/index.vue'),
    //       }
    // ]
  },
  {
    name: 'subCate',
    path: '/category/subCate/:id', 
    component: () => import('@/views/SubCategory/index.vue'),
  },
  {
    name: 'detail',
    path: '/detail/:id', 
    component: () => import('@/views/Details/index.vue'),
  },
  {
    name: 'cart',
    path: '/cart', 
    component: () => import('@/views/Cart/index.vue'),
  },
  {
    name: 'checkout',
    path: '/checkout', 
    component: () => import('@/views/Checkout/index.vue'),
  },
  {
    name: 'pay',
    path: '/pay', 
    component: () => import('@/views/Pay/index.vue'),
  },
  {
    name: 'payback',
    path: '/paycallback', 
    component: () => import('@/views/PayBack/index.vue'),
  },

  // {
  //     name: 'user',
  //     path: 'user',
  //     children: [
  //       {
  //         name: 'role',
  //         path: 'role',
  //         component: () => import('@/views/userRole/role.vue'),
  //       },
  //       {
  //         name: 'user',
  //         path: 'user',
  //         component: () => import('@/views/userRole/user.vue'),
  //       },
  //     ],
  //   },
]

export default frameIn
