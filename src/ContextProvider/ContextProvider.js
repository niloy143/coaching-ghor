import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase-init';

const auth = getAuth(app);

export const ContextCreator = createContext({});

const ContextProvider = ({ children }) => {

    const [dark, setDark] = useState(false);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => console.log(result.user))
            .catch(error => console.error(error.message))
    }

    const contextValue = {
        dark,
        setDark,
        createUser,
        user,
        setUser
    };

    return (
        <ContextCreator.Provider value={contextValue}>
            {children}
        </ContextCreator.Provider>
    );
};

export default ContextProvider;