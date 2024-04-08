import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "../hooks/reduxHooks";


interface IAuthRequired {
    children: React.ReactNode;
}

export const AuthRequired: React.FC<IAuthRequired> = ({ children }) => {

    const location = useLocation();
    const isAuth = useAppSelector(state => state.auth.isAuth);

    if (!isAuth) {
        return <Navigate to={'/auth'} state={{ from: location }} />
    }

    return (
        <>
            {children}
        </>
    )
}
