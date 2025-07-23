import {
    create
} from 'zustand'
import {
    doLogin
} from '../api/user'

export const useUserStore = create((set) => ({
    user: null, // 用户信息 async
    isLogin: false, // 是否登录
    login: async({username="", password=""}) => {
        const data = await doLogin({username, password});
        console.log(data);
        const {token, data: user} =data.data;
        console.log("token:",token);
        localStorage.setItem('token',token);
        set({
            user,
            isLogin: true
        })
    },
    logout: () => {
        localStorage.removeItem('token');
        set({
            user: null,
            isLogin: false
        })
    }
}))