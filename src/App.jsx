import React, { useState } from 'react'
// import Users from './components/users/Users';
import { data } from 'autoprefixer';
import ContextAPI from './components/contextApiAnotherWay/ContextApi';
// import NewUser from './components/addUser/NewUser';
// import ContextAPI from './components/contextAPI/ContextAPI';

const App = () => {
//   let [user, setUser] = useState([
//     {
//       id: 1,
//       userName: "Sumon"
//     },
//     {
//       id: 2,
//       userName: "Tawhid"
//     }
//   ])
//   let handleDelete =(id)=>{
//     setUser(user.filter((filterItem)=>filterItem.id !== id))
//   }

//   let addUser =(newUser)=>{
//     setUser((prev)=>[...prev, newUser])
// }

  return (
    <>
      {/* <NewUser setUser={setUser} addUser={addUser} />
      <Users user={user} handleDelete={handleDelete} /> */}
      {/* <ContextAPI/> */}
      <ContextAPI/>
    </>
  )
}

export default App