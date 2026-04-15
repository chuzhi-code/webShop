import { ref, computed } from 'vue'
// 引入pinia的defineStore函数
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // 定义数据
  const count = ref(0)
  // 定义计算属性（vuex中的getter）
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }
  // 返回数据、计算属性、方法给组件使用
  return { count, doubleCount, increment }
})
