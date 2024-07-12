// import React, { useState } from 'react'

// const NewUser = ({setUser, addUser}) => {
//     const [inputUser, setInputUser] = useState('');

//     const handleUser = (e) => {
//         e.preventDefault();
//         let newUser = {
//             id: new Date().getDate().toString(),
//             userName: inputUser
//         }
//         addUser(newUser)
//         // setUser((prev)=>[...prev, newUser])
//     }
 
//   return (
//     <>
//     <div className="text-center py-6">
//         <form action="">
//             <h1 className='text-5xl mb-5'>Do it uset add? please press add</h1>
//             <input onChange={(e)=>setInputUser(e.target.value)} className='py-3 px-6 outline-none border-2 border-red-900' type="text" />
//             <button onClick={handleUser} className='py-3 px-6 bg-blue-800'>Add user</button>
//         </form>
//       </div>
//     </>
//   )
// }

// export default NewUser