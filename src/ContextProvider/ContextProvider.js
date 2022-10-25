import React from 'react';
import { createContext } from 'react';

export const ContextCreator = createContext({});

const ContextProvider = ({children}) => {

    const me = {
        name: 'Niloy',
        age: '20'
    }
    const you = {
        name: 'You',
        age: '17'
    }

    const contextValue = {me, you};

    return (
        <ContextCreator.Provider value={contextValue}>
            {children}
        </ContextCreator.Provider>
    );
};

export default ContextProvider;