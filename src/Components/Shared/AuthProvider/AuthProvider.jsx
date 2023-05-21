/* eslint-disable react/prop-types */
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../../Firebase/firebase.config";
export const AUthContext = createContext()
const auth = getAuth(app)
const AuthProvider = ({ children }) => {
    const googleProvider = new GoogleAuthProvider()
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState(null)
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUser = (loggedUser, name, photurl) => {
        return updateProfile(loggedUser, {
            displayName: name,
            photoURL: photurl
        })
            .then()
            .catch(error => {
                console.log(error.message)
            })
    }

    const signin = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentuser => {
            setUser(currentuser)
            setLoading(false)
        });
        return () => {
            return unsubscribe()
        }
    },
        [])
    const authInfo = {
        loading,
        createUser,
        signin,
        logOut,
        user,
        googleSignIn,
        updateUser
    }
    return (
        <AUthContext.Provider value={authInfo}>
            {children}
        </AUthContext.Provider>
    );
};

export default AuthProvider;