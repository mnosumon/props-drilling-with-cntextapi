import React from 'react'
import User from './User'
import { UserHook } from '../../hooks/UserHook'

const Users = () => {
  let {user} = UserHook()
  return (
    <>
    <div className="grid grid-cols-4 gap-3 text-center">

        {
            user.map((userItem, index)=>(
            <>
            <div key={index} className="bg-orange-600 text-white">
                <User userItem={userItem} />
            </div>
            </>
            ))
        }
    </div>
    </>
  )
}

export default Users