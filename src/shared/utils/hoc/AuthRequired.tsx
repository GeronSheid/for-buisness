import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { viewerSelectors } from "../../../entities/users/viewer";


interface IAuthRequired {
    children: React.ReactNode;
}

export const AuthRequired: React.FC<IAuthRequired> = ({ children }) => {

    const location = useLocation();
    const isAuth = viewerSelectors.useAuth();

    if (!isAuth) {
        return <Navigate to={'/auth'} state={{ from: location }} />
    }

    return (
        <>
            {children}
        </>
    )
}
