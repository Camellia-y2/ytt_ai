<template>
  <div class="home-container">
    <div v-if="userStore.isLogin">
      <h2>欢迎：{{userStore.username}}</h2>
      <button @click="logout">退出登录</button>
    </div>
    <div v-else>
      <p>请先 <router-link to="/login">登录</router-link></p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useUserStore } from '@/stores/userStore';
import { useRouter } from 'vue-router';
import { onMounted } from 'vue';

const userStore = useUserStore();
const router = useRouter();

onMounted(() => {
  console.log('Home页面加载');
  console.log('Token:', userStore.token);
  console.log('Username:', userStore.username);
  console.log('IsLogin:', userStore.isLogin);
});

const logout = () => {
  userStore.logout();
  router.push('/login');
}

</script>