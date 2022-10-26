import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextCreator } from '../ContextProvider/ContextProvider';

const PrivateRoute = ({children}) => {
    const { user } = useContext(ContextCreator);
    const location = useLocation();

    return user?.uid ? children : <Navigate to="/login" state={location} />
};

export default PrivateRoute;