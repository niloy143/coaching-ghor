import React, { useState } from 'react';
import { createContext } from 'react';

export const ContextCreator = createContext({});

const ContextProvider = ({children}) => {

    const [ dark, setDark ] = useState(false);

    const contextValue = {dark, setDark};

    return (
        <ContextCreator.Provider value={contextValue}>
            {children}
        </ContextCreator.Provider>
    );
};

export default ContextProvider;