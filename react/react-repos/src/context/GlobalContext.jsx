import {
    createContext,
    useReducer,
    useContext
} from 'react'
import {
    repoReducer,
} from '@/reducers/repoReducer'

export const GlobalContext = createContext(null);

const initialState = { // 初始状态
    repos: [],
    loading: false,
    error: null
}

// 解构出来children
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(repoReducer,initialState)
    return (
        // state 应用状态，dispatch 应用状态的修改方法
        <GlobalContext.Provider value={{state,dispatch}}>
        {children}
        </GlobalContext.Provider>
    )
}