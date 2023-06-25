/*
 * @Author: Wenjiahao
 * @Date: 2023-06-23 22:00:07
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-25 16:02:07
 * @FilePath: \Mall\src\stores\users.js
 * @Description: 
 */
/*
 * @Author: Wenjiahao
 * @Date: 2023-06-23 22:00:07
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-23 23:49:33
 * @FilePath: \Mall\src\stores\users.js
 * @Description:
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/apis/loginAPI'

export const useUserInfoStore = defineStore(
  'user',
  () => {
    const userInfo = ref(null)
    const getUserInfo = async ({ account, password }) => {
      const res = await login({
        account,
        password
      })
      userInfo.value = res.result
      return res
    }
    const clearUserInfo = ()=>{
      userInfo.value = {}
      
    }
    return { userInfo, getUserInfo, clearUserInfo }
  },
  {
    persist: true,
  }
)
