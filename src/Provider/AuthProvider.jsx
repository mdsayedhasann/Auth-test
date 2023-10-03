/* eslint-disable react/prop-types */
import { createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { createContext, useEffect, useState } from 'react';
import auth from '../firebase/firebase.init';


export const AuthContext = createContext(null)
const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState()

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        return signOut(auth)
    }

    const forgetPassword = (email) => {
        return sendPasswordResetEmail(auth, email)
    }


    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser)
        })
        return unsubscribe
    } ,[])

    const AuthInfo = {user, createUser, signInUser, logOut, forgetPassword}
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;