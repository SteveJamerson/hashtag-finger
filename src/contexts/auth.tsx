import React, { useState, createContext, ReactNode, useEffect, useCallback } from 'react'
import IUsers from '../models/Users'
import { useNavigate } from 'react-router-dom'
import api from '../services/api';
import { useToast } from '../hooks/useToast'

export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

type IAuthContextData = {
   user: IUsers;
   signIn: (email: string, password: string) => boolean;
   signOut: () => void;
   getUsers: () => void
}

type AuthContextProps = {
   children: ReactNode
}


export const AuthProvider = (props: AuthContextProps) => {
   const navigate = useNavigate()

   const { addToast } = useToast()

   const [allUsers, setAllUsers] = useState<IUsers[]>([])

   const [user, setUser] = useState<IUsers>(() => {
      let user = localStorage.getItem('@Hashtag-Finger.user')
      if (user) {
         return user = JSON.parse(user)
      }
      return ({} as IUsers)
   })

   const getUsers = async () => {
      try {
         const response = await api.get(
            "https://api.airtable.com/v0/app6wQWfM6eJngkD4/Login?maxRecords=3&view=Grid%20view",
            {
               headers: {
                  Authorization: "Bearer key2CwkHb0CKumjuM",
                  'Content-Type': 'application/json'
               },
            }
         );
         setAllUsers(response.data.records)

      } catch (err) {
         console.log(err)
      }
   }

   const signIn = (email: string, password: string) => {

      const result = allUsers.find(users => users.fields.Email === email && users.fields.Senha === password && users.fields.Squad === '2')

      if (result) {
         setUser(result)
         localStorage.setItem('@Hashtag-Finger.user', JSON.stringify(result))
         navigate('/research')
         return true
      } else {
         return false
      }

   }

   const signOut = () => {
      localStorage.removeItem('@Hashtag-Finger.user');
      setUser({} as IUsers)
      navigate('/login')
   }

   useEffect(() => {
      getUsers()
   }, [])

   return (
      <AuthContext.Provider
         value={{
            user,
            signIn,
            signOut,
            getUsers,
         }}>
         {props.children}
      </AuthContext.Provider>
   )

}