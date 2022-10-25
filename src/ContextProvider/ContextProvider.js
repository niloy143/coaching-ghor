import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
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
            .then(() => { })
            .catch((error) => console.error(error.message));
    }

    const logOut = () => {
        signOut(auth);
    }

    const login = (email, password) => {
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {})
        .catch(error => console.error(error.code))
    }

    const thirdPartySignIn = provider => {
        signInWithPopup(auth, provider)
        .then(result => setUser(result.user))
        .catch(error => console.error(error.code))
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user)
        })

        return () => unsubscribe();
    }, [])


    const contextValue = {
        dark,
        setDark,
        createUser,
        user,
        logOut,
        login,
        thirdPartySignIn
    };

    return (
        <ContextCreator.Provider value={contextValue}>
            {children}
        </ContextCreator.Provider>
    );
};

export default ContextProvider;