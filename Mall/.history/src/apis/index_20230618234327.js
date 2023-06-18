/*
 * @Author: Wenjiahao
 * @Date: 2023-06-18 23:35:35
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-18 23:43:26
 * @FilePath: \Mall\src\apis\index.js
 * @Description:
 */
import axios from 'axios'

const $api = axios.create({
  baseURL: 'http://pcapi-xiaotuxian-front-devtest.itheima.net',
  timeout: 5000
})

// axios请求拦截器
instance.interceptors.request.use(
  (config) => {
    return config
  },
  (e) => Promise.reject(e)
)

// axios响应式拦截器
instance.interceptors.response.use(
  (res) => res.data,
  (e) => {
    return Promise.reject(e)
  }
)

export default $api
