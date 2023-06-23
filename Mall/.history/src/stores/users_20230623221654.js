/*
 * @Author: Wenjiahao
 * @Date: 2023-06-23 22:00:07
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-23 22:16:51
 * @FilePath: \Mall\src\stores\users.js
 * @Description:
 */
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { login } from '@/apis/loginAPI'

export const useUserInfoStore = defineStore('userInfo', () => {
  const userInfo = ref(null)
  const getUserInfo = async ({ account, password }) => {
    const res = await login({
      account,
      password
    })
    userInfo.value = res.result
  }
  return { userInfo, getUserInfo }
})
