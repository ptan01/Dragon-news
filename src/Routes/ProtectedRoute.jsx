import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Children } from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(user){
        return children ;
    }
    else{
        return <Navigate to='/login'></Navigate>
    }
};

export default ProtectedRoute;