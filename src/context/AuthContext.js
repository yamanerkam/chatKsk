import React, {createContext,useContext, useEffect, useState} from 'react'
import {auth} from '../firebase/config'

// this helps you to creat the context
const AuthContext = createContext()

// with that you don't need to create a useFile
export function useAuth() {
    return useContext(AuthContext)
}


// that is the main thing
export function AuthProvider({children}) {

    const [currentUser,
        setCurrentUser] = useState()

    const [loading,setLoading] = useState(true)

    
    

    useEffect(() => {
        const uns = auth.onAuthStateChanged(user => {
            setCurrentUser(user)
            setLoading(false)
        })
        return uns
    }, [])

    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
