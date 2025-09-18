import { defineStore } from 'pinia';

export const useUserStore = defineStore('user',{
    state: () => ({
        token: localStorage.getItem('token') || null,
        username: localStorage.getItem('username') || null
    }),
    actions: {
        setToken(token: string){
            this.token = token;
            localStorage.setItem('token',token);
        },
        setUsername(username: string){
            this.username = username;
            localStorage.setItem('username',username);
        },
        logout(){
            this.token = '';
            this.username = '';
            localStorage.removeItem('token');
            localStorage.removeItem('username');
        }
    },
    // 计算属性: 基于状态计算后的值
    getters: {
        isLogin():boolean{
            return !!this.token;
        }
    }
});