import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = (Component) => {
    const auth = false; //your logic

    return auth ? <Component /> : <Navigate to="/dashboard" />
}
export default ProtectedRoute;