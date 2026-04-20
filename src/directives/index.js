// 定义懒加载插件
import { useIntersectionObserver } from '@vueuse/core'

export const lazyPlugin = {
  install (app) {
    // 懒加载指令逻辑（定义全局指令）
    // 指令名称：img-lazy
    // 指令绑定的元素：img
    // 指令等于号后面绑定的表达式的值：图片url
    app.directive('img-lazy', {
      mounted (el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
        // console.log(el, binding.value)
        // useIntersectionObserver：vueUse的指令，用于监听元素是否进入视口区域
        const { stop } = useIntersectionObserver(
          // el：监听目标元素
          el,
          ([{ isIntersecting }]) => {
            console.log(isIntersecting)
            if (isIntersecting) {
              // 进入视口区域
              el.src = binding.value
              stop()
            }
          },
        )
      }
    })
  }
}