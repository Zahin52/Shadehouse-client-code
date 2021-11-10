import {
   getAuth,
   signInWithPopup,
   GoogleAuthProvider,
   signOut,
   getIdToken,
   createUserWithEmailAndPassword,
   onAuthStateChanged,
   signInWithEmailAndPassword,
} from 'firebase/auth'
import { useState, useEffect } from 'react'

import initializationAuthentication from '../firebase/firebase.init'
import { updateProfile } from '@firebase/auth'

initializationAuthentication()
const useFirebase = () => {
   const [users, setUser] = useState({})
   const [isLoading, setIsloading] = useState(true)
   const auth = getAuth()
   const signInUsingGoogle = () => {
      setIsloading(true)
      const GoogleProvider = new GoogleAuthProvider()
      return signInWithPopup(auth, GoogleProvider)
   }
   useEffect(() => {
      const unsubscribed = onAuthStateChanged(auth, (user) => {
         if (user) {
            getIdToken(user).then((res) => localStorage.setItem('idToken', res))
            setUser(user)
         } else {
            setUser({})
         }
         setIsloading(false)
      })
      return () => unsubscribed
   }, [])

   const logout = () => {
      setIsloading(true)
      signOut(auth)
         .then((res) => {
            setUser({})
         })
         .finally(() => setIsloading(false))
   }
   const setUserName = (name, history) => {
      setIsloading(true)
      updateProfile(auth.currentUser, {
         displayName: name,
      })
         .then(() => {
            history.push('/')
            setIsloading(false)
         })
         .catch((e) => console.log(e))
   }

   const createNewUser = ({ email, pass }) => {
      return createUserWithEmailAndPassword(auth, email, pass).finally(() =>
         setIsloading(false),
      )
   }
   const login = ({ email, pass }) => {
      setIsloading(true)
      console.log(email, pass)
      return signInWithEmailAndPassword(auth, email, pass)
   }
   return {
      users,
      signInUsingGoogle,
      logout,
      isLoading,
      createNewUser,
      login,
      setUserName,
   }
}

export default useFirebase
