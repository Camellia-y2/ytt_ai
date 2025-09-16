import {
    defineStore
} from 'pinia';
import { ref } from 'vue';
import type { 
    HomeTopBarItem, 
    recentlyViewedItem 
} from '@/types/home';

// home状态由它管理, pinia 状态管理库
export const useHomeStore = defineStore('home', () => {
    // 把响应式状态放到全局来管理
    const topBarState = ref<HomeTopBarItem[]>([
       {
            title: "景点门票",
            icon: "coupon-o",
        },
        {
            title: "酒店",
            icon: "hotel-o",
        },
        {
            title: "交通",
            icon: "logistics",
        },
        {
            title: "租车",
            icon: "guide-o",
        },
    ]);
    const navBarState = ref<HomeTopBarItem[]>([
        {
            title: "目的地",
            icon: "location-o",
        },
        {
            title: "我的",
            icon: "manager-o",
        },
        {
            title: "喜欢",
            icon: "like-o",
        },
        {
            title: "更多",
            icon: "more-o",
        },
    ]);
    const recentlyViewedState = ref<recentlyViewedItem[]>([
        {
            title: "曼谷 & 芭达雅景点通票",
            cover:
                "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
            price: 173,
        },
        {
            title: "曼谷 & 芭达雅景点通票",
            cover:
                "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
            price: 173,
        },
        {
            title: "曼谷 & 芭达雅景点通票",
            cover:
                "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
            price: 173,
        },
        {
            title: "曼谷 & 芭达雅景点通票",
            cover:
            "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
        price: 173,
        },
        {
            title: "曼谷 & 芭达雅景点通票",
            cover:
                "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
            price: 173,
        },
        {
            title: "曼谷 & 芭达雅景点通票",
            cover:
                "https://t9.baidu.com/it/u=136997254,3217024525&fm=218&app=137&size=f242,150&n=0&f=JPEG&fmt=auto?s=C9D533C6CEB711B7C9882019030090DB&sec=1704646800&t=49e43e32fd84a992e4f52c25e883cca2",
            price: 173,
        },
    ]);

    return {
        topBarState,
        navBarState,
        recentlyViewedState
    }
}
)
