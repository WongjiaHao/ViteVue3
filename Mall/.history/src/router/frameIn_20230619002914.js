/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:08:35
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 00:28:45
 * @FilePath: \Mall\src\router\frameIn.js
 * @Description: 
 */
import Home from '@/views/Home/index'
const frameIn = [
    {
        name: 'heom',
        path: '/',
        component:Home
    },
    {
        name: 'user',
        path: 'user',
        children: [
          {
            name: 'role',
            path: 'role',
            component: () => import('@/views/userRole/role.vue'),
          },
          {
            name: 'user',
            path: 'user',
            component: () => import('@/views/userRole/user.vue'),
          },
        ],
      },
]

export default frameIn;