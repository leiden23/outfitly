import type { FC } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "@/entities/user/model";

export const ProtectedRoute: FC<{ children: React.ReactNode }> = ({children}) => {
    const {isAuth} = useAuth();
    if (!isAuth) return <Navigate to={'/reg'}/>
    return (
        <>
            {children}
        </>
    )
}
