/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 00:08:35
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-19 00:27:38
 * @FilePath: \Mall\src\router\frameIn.js
 * @Description: 
 */
const frameIn = [
    {
        name: 'home',
        path: '/',
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