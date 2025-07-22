// 请求
import {
    getRepoList
} from '../api/repo'
import {
    create
} from 'zustand'

export const useRepoStore = create((set) => ({ // 仓库
    repos: [], // 仓库列表
    loading: false, // 加载状态
    error: null, // 错误信息
    fetchRepos: async () => { // 获取仓库列表
        // 还有些业务要做
        set({ // 修改状态
            loading: true, // 加载中
            error: null, // 没有错误
        })
        try { // 尝试获取仓库列表
            const res = await getRepoList('shunwuyu') // 获取仓库列表 异步操作 等待结果 解构赋值 拿到数据
            set({ // 修改状态
                repos: res.data, // 仓库列表
                loading: false, // 加载完成
            })
            // console.log(res.data)
        } catch (error) { // 捕获错误
            set({ // 修改状态
                error:error.message, // 错误信息
                loading: false, // 加载完成
            })
        }
    }
}))