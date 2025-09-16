<template>
    <div class="home">
        <div class="top-bg absolute h-36 z-10 w-screen bg-gradient-to-b from-orange-500 to-white">
            <!-- {{ count }}
            <button @click="increment">increment</button> -->

            <van-search
                v-model="searchField"
                placeholder="请输入搜索关键词"
                show-action
                shape="round"
                background="transparent"
                class="mb-4"
            >
                <!-- 定制van-search的action部分，插槽，用户自定义的部分 -->
                <template #action>
                    <div class="text-white">
                        <van-icon name="shopping-cart-o" size="1.25rem" />
                    </div>
                    
                </template>
            </van-search>
            <main class="flex flex-col space-4">
                <header class="w-[calc(100vw-2rem)] min-h-24 bg-white rounded-2xl p-2 shadow-md self-center">
                    <section class="topbar flex justify-around mb-3">
                        <div
                            v-for="item in topBarState"    
                            :key="item.title"
                            class="topbar-item flex flex-col items-center"
                        >
                            <div class="topbar-item-icon">
                                <van-icon :name="item.icon" size="2rem" />
                            </div>
                            <div class="topbar-item-text text-xs">{{ item.title }}</div>
                        </div>
                    </section>
                    <section>
                        <h2 class="title">最近浏览</h2>
                        <RecentlyViewedState :items="recentlyViewedState" />
                    </section>
                </header>
            </main>
        </div>  
    </div>
</template>
<script setup lang="ts"> 
import { toRefs, ref } from 'vue';
import {
    useHomeStore
} from "@/store/homeStore"
const count = ref<number>(0);
const searchField = ref<string>('');
const increment = () => {
    console.log(count, count.value);
    count.value++;
}
// const homeStore = useHomeStore();
// const { topBarState, navBarState, recentlyViewedState } = toRefs(homeStore);
const { topBarState, navBarState, recentlyViewedState } = toRefs(useHomeStore());
// ref 声明的响应式状态，取值要用.value
console.log(topBarState.value, navBarState.value, recentlyViewedState.value);
</script>
<style>
</style>
