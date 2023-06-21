/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:08:35
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 16:49:30
 * @FilePath: \Mall\src\router\frameIn.js
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
    children: [
        { 
            name: 'subCate',
            path: 'subCate/:id', 
            component: () => import('@/views/SubCategory/index.vue'),
        },
    ]
  }
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
