import React, { useContext, useState } from 'react'
import { UserContextApi } from './UserContextApi';

const NewUser = () => {
    let {user, setUser} = useContext(UserContextApi)
    const [inputUser, setInputUser] = useState('');

    const handleUser = (e) => {
        e.preventDefault();
        let newId = user.length > 0 ? Math.max(...user.map((user)=>user.id)) : '0'
        let newUser = {
            id: newId + 1,
            userName: inputUser
        }
        setUser((prev)=>[...prev, newUser])
        setInputUser('')
    }
    
    // setUser((prev)=>[...prev, newUser])
  return (
    <>
    <div className="text-center py-6">
        <form action="">
            <h1 className='text-5xl mb-5'>Do it uset add? please press add</h1>
            <input 
            value={inputUser}
            onChange={(e)=>setInputUser(e.target.value)} 
            className='py-3 px-6 outline-none border-2 border-red-900' type="text" />
            <button onClick={handleUser} className='py-3 px-6 bg-blue-800'>Add user</button>
        </form>
      </div>
    </>
  )
}

export default NewUser