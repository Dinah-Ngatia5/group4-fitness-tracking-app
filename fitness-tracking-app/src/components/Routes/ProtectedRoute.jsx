import React from 'react';
import { Navigate } from 'react-router-dom';
import Dashboard from '../Pages/Dashboard';

const ProtectedRoute = ({ Component }) => {
    const auth = true; // Your authentication logic goes here

    return auth ? <Component /> : <Navigate to="/Dashboard" />;
};

export default ProtectedRoute;
