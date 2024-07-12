import React, { useContext } from 'react'
import { UserContextApi } from './UserContextApi'

const User = ({userItem}) => {
    let {user, setUser} = useContext(UserContextApi)
    let {id, name} = userItem
    
    let deleteUser =(id)=>{
        setUser(user.filter((filterItem)=>filterItem.id !== id))
    }

  return (
    <>
        <h1>{id}</h1>
        <h1>{name}</h1>
        <button onClick={()=>deleteUser(id)} className='bg-slate-700 py-3 px-5 rounded-md'>Delete</button>
    </>
  )
}

export default User