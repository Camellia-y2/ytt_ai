import {
    createContext
} from 'react'

export const GlobalContext = createContext(null);

// 解构出来children
export const GlobalProvider = ({ children }) => {
    return (
        <>
            <GlobalContext.Provider value=''>
            {children}
            </GlobalContext.Provider>
        </>
    )
}