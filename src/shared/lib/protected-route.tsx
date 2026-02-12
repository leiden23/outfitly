import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./auth-context";

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({children}) => {
    const {isAuth} = useAuth();
    if (!isAuth) return <Navigate to={'/reg'}/>
    return (
        <>
            {children}
        </>
    )
}
