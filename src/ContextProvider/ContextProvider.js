import React, { useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import app from '../firebase/firebase-init';

const auth = getAuth(app);

export const ContextCreator = createContext({});

const ContextProvider = ({ children }) => {

    const [dark, setDark] = useState(false);
    const [user, setUser] = useState(null);

    const createUser = (email, password, name, photo) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                setNameAndPhoto(name, photo);
                setUser(result.user);
            })
            .catch(error => console.error(error.message))
    }

    const setNameAndPhoto = (name, photo) => {
        updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo
        })
            .then(() => {})
            .catch((error) => console.error(error.message));
    }


    const contextValue = {
        dark,
        setDark,
        createUser,
        user
    };

    return (
        <ContextCreator.Provider value={contextValue}>
            {children}
        </ContextCreator.Provider>
    );
};

export default ContextProvider;