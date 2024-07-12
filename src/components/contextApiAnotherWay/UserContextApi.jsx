import { createContext, useState } from "react";

export const UserContextApi = createContext({})

export const UserProvider = ({children})=>{
    let [user, setUser] = useState([])

    return(
        <UserContextApi.Provider 
        value={{
        user,setUser
        }}>
            {children}
        </UserContextApi.Provider>
    )
}