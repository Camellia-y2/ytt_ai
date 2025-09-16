<script setup lang="ts">
import TabBar from '@/views/layout/TabBar.vue'
</script>

<template>
  <div class="app">
    <!-- 主要内容区域 -->
    <div class="main-content">
      <router-view />
    </div>
    
    <!-- 底部导航栏 -->
    <TabBar />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  padding-bottom: 50px; /* 为底部导航栏留出空间 */
}


</style>