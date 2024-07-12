import React, { useState } from 'react'
import Users from './Users'
import NewUser from './NewUser'
import { UserContextApi } from './UserContextApi'


const ContextAPI = () => {
  let [user, setUser] = useState([
    {
      id: 1,
      userName: "Sumon"
    },
    {
      id: 2,
      userName: "Tawhid"
    }
  ])

//   let addUser =(newUser)=>{
//     setUser((prev)=>[...prev, newUser])
// }

  return (
    <>
      <UserContextApi.Provider 
      value={{
        user,setUser
      }}>
        <NewUser />
        <Users user={user} />
      </UserContextApi.Provider>
    </>
  )
}

export default ContextAPI