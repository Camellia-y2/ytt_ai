import {
    useState,
    useContext,
    useEffect,
} from 'react';
import {
    GlobalContext,
} from '@/context/GlobalContext';
import {
    getRepos,
} from '@/api/repos';

export const useRepos = (id) => {
    const { state,dispatch } = useContext(GlobalContext);  // 返回value
    useEffect(() => { // 组件加载的时候，发送请求，获取仓库数据
        console.log('-------');

        dispatch({ // 发送action，更新state
            type: 'FETCH_START', // 开始请求
        });
        (async () => { // 异步函数  
            try {
                const res = await getRepos(id);
                console.log('res:',res); // 打印结果，调试   ?????
                dispatch({ // 发送action，更新state
                    type: 'FETCH_SUCCESS', 
                    payload: res.data, // 数据
                })
            } catch (err) { // 捕获异常，处理异常， 异常处理机制
                dispatch({ 
                    type: 'FETCH_ERROR', // 开始请求
                    payload: err.message, // 错误信息
                });
            }   
        })()
    },[])
    return state;
}