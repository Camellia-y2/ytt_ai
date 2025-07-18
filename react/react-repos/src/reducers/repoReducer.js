import Loading from "../components/Loading";

// 保证状态的正确性
export const repoReducer = (state,action) => {
    switch(action.type){
        case 'FETCH_START': // 开始请求
            return {
                ...state,
                Loading:true, // 开始加载
                error:null, // 假设是上次有错重新请求，就把上次的错误信息清空
            }
        case 'FETCH_SUCCESS': // 请求成功
            return {
                ...state,
                Loading:false, // 加载结束
                repos:action.payload, // 仓库数据
                error:null, 
            }
        case 'FETCH_ERROR': // 请求失败
            return {
               ...state,
                Loading:false, // 加载结束
                // repos:[], // 仓库数据
                error:action.payload, // 错误信息
            }
        default:
            return state;
    }
}