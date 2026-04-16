import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getBannerAPI } from '@/apis/home'

export const useBannerStore = defineStore('banner', ()=>{
    const bannerList = ref([]);
    const getBanner = async () => {
        const res = await getBannerAPI();
        bannerList.value = res.result;
    }
    return {
        bannerList,
        getBanner
    }
})