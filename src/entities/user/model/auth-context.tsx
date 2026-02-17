import React, { createContext, useContext, useMemo, useState, type FC } from "react";
       
type ContentType = {
    isAuth: boolean;
    setIsAuth: (value: boolean) => void;
}
const AuthContext = createContext<ContentType | null>(null) 

export const AuthProvider: FC<{children: React.ReactNode}> = ({children}) => {
    const [isAuth, setIsAuthState] = useState(() => {
        const saved = localStorage.getItem('auth');
        return saved === 'true';
    })

    const setIsAuth = (value: boolean) => {
        setIsAuthState(value)
        localStorage.setItem('auth', value ? 'true' : 'false')
    }

    const value = useMemo(() => ({
        isAuth: isAuth,
        setIsAuth: setIsAuth,
    }), [isAuth])
    
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}
        
// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => {
    const context = useContext(AuthContext)
    
    if (!context) throw Error('error')
    return context;
}

    