import React, {ReactNode, useContext, useEffect, useState} from 'react'
import {auth, googleProvider} from '../utils/firebase'
import firebase from 'firebase/app'

interface FirebaseAuth {
  user: firebase.User | null,
  login: any,
  logout: any
}
const AuthContext = React.createContext({} as FirebaseAuth)

type AuthProviderProps = {
  children: ReactNode
}

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({children}: AuthProviderProps) {
  const [user, setUser] = useState<firebase.User | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  const login = () => auth.signInWithPopup(googleProvider)

  const logout = () => auth.signOut()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])

  return (
    <AuthContext.Provider value={{user, login, logout}}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
