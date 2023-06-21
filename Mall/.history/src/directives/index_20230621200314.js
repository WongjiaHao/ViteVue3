/*
 * @Author: Wenjiahao
 * @Date: 2023-06-19 23:52:59
 * @LastEditors: wenjiahao
 * @LastEditTime: 2023-06-21 20:02:56
 * @FilePath: \Mall\src\directives\index.js
 * @Description: 
 */
import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoad = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
            el, 
            ([{ isIntersecting }]) => {
          // console.log(isIntersecting) //布尔
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value
            stop() //停止监听
          }
        })
      }
    })
  }
}

// export const infinityLoad = {
//   install(app){
//     app.directive('v-infi-load',{
//       mounted(el, binding) {
        
//       },
//     })
//   }
// }
