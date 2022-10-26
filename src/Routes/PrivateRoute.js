import { Spinner } from 'flowbite-react';
import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { ContextCreator } from '../ContextProvider/ContextProvider';

const PrivateRoute = ({children}) => {
    const { user, loading } = useContext(ContextCreator);
    const location = useLocation();
    if(loading) {
        return <div className='text-center my-12'>
            <Spinner aria-label="Default status example" size="xl" />
        </div>
    }
    return user?.uid ? children : <Navigate to="/login" state={location} />
};

export default PrivateRoute;