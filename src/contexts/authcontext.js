import React, {useContext, useState, useEffect} from 'react'
import { auth } from '../Firebase/firebase';

const authContext = React.createContext();

export function UseAuth()
{
    return useContext(authContext);
}

export default function AuthProvider({children}) {
  const [currentUser, setUser] = useState();

  function signup(email,password)
    {  
        return auth.createUserWithEmailAndPassword(email,password);
    }

    function login(email,password)
    {  
        return auth.signInWithEmailAndPassword(email,password);
    }
    function logout()
    {  
        return auth.signOut();
    }

  useEffect(()=>{
    const unsubscribe = auth.onAuthStateChanged(user => {
        setUser(user);
      })
    return unsubscribe; 
  },[]);
  

  const value = {
    currentUser,
    signup,
    login,
    logout,
  }

  return (
    <authContext.Provider value={value}>
        {children}
    </authContext.Provider>
  )
}
