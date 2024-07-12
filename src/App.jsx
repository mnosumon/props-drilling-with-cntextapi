import React, { useState } from 'react'
import Users from './components/users/Users';
import { data } from 'autoprefixer';
import NewUser from './components/addUser/NewUser';

const App = () => {
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
  let handleDelete =(id)=>{
    setUser(user.filter((filterItem)=>filterItem.id !== id))
  }

  let addUser =(newUser)=>{
    setUser((prev)=>[...prev, newUser])
}

  return (
    <>
    <NewUser setUser={setUser} addUser={addUser} />
      <Users user={user} handleDelete={handleDelete} />
    </>
  )
}

export default App