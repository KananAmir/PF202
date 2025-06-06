import React from 'react'
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {

    // const isAuthenticated = true;
    const isAuthenticated = false;


    if (!isAuthenticated) {
        return <Navigate to="/" />
    }

    return (
        <>
            {children}
        </>
    );
}

export default ProtectedRoute
