import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import app from '../firebase/firebase.init';

export const AuthContext = createContext();

const auth = getAuth(app);

const UserContext = ({ children }) => {
    const [user, setUser] = useState({ displayName: 'Akash' })

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const signIn = (email, passed) => {
        return signInWithEmailAndPassword(auth, email, passed);
    }

    //why are we doing this?
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            console.log('auth state changed', currentUser);
        })

        return () => {
            unsubscribe();
        }
    }, [])



    const authInfo = { user, createUser, signIn }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;