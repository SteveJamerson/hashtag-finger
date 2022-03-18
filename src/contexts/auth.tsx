import React, { useState, createContext, ReactNode, useEffect } from 'react'
import IUsers from '../models/Users'
import api from '../services/api';



export const AuthContext = createContext<IAuthContextData>({} as IAuthContextData);

type IAuthContextData = {
   user: IUsers;
   allUsers: IUsers[];
   signIn: (email: string, password: string) => void;
   signOut?: () => void;
   getUsers: () => void;
}

type AuthContextProps = {
   children: ReactNode
}

export const AuthProvider = (props: AuthContextProps) => {
   const [allUsers, setAllUsers] = useState<IUsers[]>([])

   const [user, setUser] = useState<IUsers>({} as IUsers)


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
         console.log(response.data.records)
         setAllUsers(response.data.records)

      } catch (err) {
         console.log(err)
      }
   };

   const signIn = (email: string, password: string) => {
      console.log(email, password, "chegou")
      const result = allUsers.find(users => users.fields.Email === email && users.fields.Senha === password)

      console.log(result, "resultado")

      if (result) {
         setUser(result)
         localStorage.setItem('@Hashtag-Finger.user', JSON.stringify(result))
      }

   }

   useEffect(() => {
      const user = localStorage.getItem('@Hashtag-Finger.user')

      if (user) {
         const newUser: IUsers = JSON.parse(user)
         setUser(newUser)
         console.log("loged")
      }
   }, []);


   return (
      <AuthContext.Provider
         value={{
            allUsers,
            user,
            signIn,
            getUsers,
         }}>
         {props.children}
      </AuthContext.Provider>
   )

}