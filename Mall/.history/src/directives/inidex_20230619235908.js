import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoad = {
  install(app) {
    app.directive('img-lazy', {
      mounted(el, binding) {
        const { stop } = useIntersectionObserver(
            el, 
            ([{ isIntersecting }]) => {
          console.log(isIntersecting) //布尔
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value
            stop()
          }
        })
      }
    })
  }
}
