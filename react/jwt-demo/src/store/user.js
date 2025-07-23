import {
    create
} from 'zustand'
import {
    doLogin
} from '../api/user'

// 使用Zustand创建了一个名为useUserStore的全局状态存储器，
// 用于管理用户的登录状态和信息。
export const useUserStore = create((set) => ({
    user: null, // 用户信息 async
    isLogin: false, // 是否登录

    // 异步函数，接收用户名和密码，调用doLogin进行登录，并设置用户信息和登录状态。
    login: async({username="", password=""}) => {
         try {
            const data = await doLogin({ username, password });
            console.log('data.data.code:',data.data.code); // 打印登录状态码
            if (data.data.code == 1) {
                console.log(data.data.msg); // 打印错误信息
                throw new Error(data.msg || '登录失败');
            }

            const { token, data: user } = data.data;
            console.log('///',user)
            localStorage.setItem('token', token);
            set({ user, isLogin: true });

        } catch (error) {
            throw error; // 抛出错误，让组件能捕获
        }
    },
    logout: () => {
        localStorage.removeItem('token');
        set({
            user: null,
            isLogin: false
        })
    }
}))