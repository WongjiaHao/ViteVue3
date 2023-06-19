import { useIntersectionObserver } from '@vueuse/core'

export const lazyLoad = {
    install(app)
    app.directive('img-lazy',{
        mounted(el,binding){}
    })
}