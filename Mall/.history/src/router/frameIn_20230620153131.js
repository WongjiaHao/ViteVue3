/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:08:35
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-20 15:31:31
 * @FilePath: \Mall\src\router\frameIn.js
 * @Description: 
 */
import Home from '@/views/Home/index.vue'
const frameIn = [
    {
        name: 'home',
        path: '/',
        component:Home
    },
    {
        name: 'category',
        path: '/category/:id',
        component: () => import('@/views/Category/index.vue'),
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

export default frameIn;