import React, { createContext, useEffect, useState } from 'react';
import { getAuth,signInWithEmailAndPassword, createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.init';
export const AuthContext = createContext()

const auth = getAuth(app);

const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    //create an user

    const createUser = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    //signinuser
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    //signout user

    const logOut = () =>{
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        signIn,
        logOut
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
            console.log(currentUser)
            setUser(currentUser);
        })
        return ()=>{
            unsubscribe()
        }
    },[])
    
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;