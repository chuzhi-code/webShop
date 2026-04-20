// 封装分类数据业务相关代码
import { onMounted, ref } from 'vue'
import { getCategoryAPI } from '@/apis/category'
import { useRoute } from 'vue-router'
import { onBeforeRouteUpdate } from 'vue-router'

export function useCategory () {
  // 获取分类数据
  const categoryData = ref({})
  // 获取路由参数
  // 目标：获取路由参数中的分类id
  const route = useRoute()
  // 目标：根据路由参数中的分类id获取分类数据
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryAPI(id)
    categoryData.value = res.result
  }
  onMounted(() => getCategory())

  // 目标:路由参数变化的时候 可以把分类数据接口重新发送，解决路由缓存问题
  // 路由缓存问题：路由只有参数变化，组件不会重新渲染（组件复用）
  onBeforeRouteUpdate((to) => {
    // 存在问题：使用最新的路由参数请求最新的分类数据
    getCategory(to.params.id)
  })
  return {
    categoryData
  }
}