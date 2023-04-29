import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Children } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const ProtectedRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext)
    const location = useLocation();

    if (loading) {
        return <>
            <Spinner animation="border" size="sm" />
            <Spinner animation="border" />
            <Spinner animation="grow" size="sm" />
            <Spinner animation="grow" />
        </>
    }

    if (user) {
        return children;
    }
    else {
        return <Navigate to='/login' state={{ from: location }} replace></Navigate>
    }
};

export default ProtectedRoute;