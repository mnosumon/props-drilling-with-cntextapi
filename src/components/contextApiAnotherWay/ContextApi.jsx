import React, { useState } from 'react'
import { UserContextApi, UserProvider } from './UserContextApi'
import Users from './Users'
import NewUser from './NewUser'


const ContextAPI = () => {

//   let addUser =(newUser)=>{
//     setUser((prev)=>[...prev, newUser])
// }

  return (
    <>
      <UserProvider>
        <NewUser />
        <Users />
      </UserProvider>
    </>
  )
}

export default ContextAPI