import React, { useState } from 'react'
import {Link,useNavigate } from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import { login, } from '../redux/authRequest'
const Login = () => {
  
  const navitage = useNavigate()
  const [username,setUsername]=useState("")
  const [password,setPassword]=useState("")
  const{isFeching,error}=useSelector((state)=>state.user)
const dispach = useDispatch()
  const handleClick =(e)=>{
       e.preventDefault();
       login(dispach,{username,password})
       navitage("/")
    //    setPassword("")
    //    setUsername("")
  }
  return (
    <div className='flex flex-cols items-center justify-center h-full mt-10'>
    <div className='flex flex-cols items-center justify-center w-full flex-1 text-center sm:px-20'>
      <main className='max-w-sm  flex-cols bg-white shadow-sm flex-grow p-5  m-1' >
      <h1 className='font-bold text-lg text-gray-700'>Log In</h1>
      <input type="text" placeholder='user name' value={username} onChange={(e)=>setUsername(e.target.value)}
      className='w-full border border-gray-400 p-2 my-1 sm:my-2 focus:outline-2 outline-sky-500' required/>
      <input type="password" placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}
       className='w-full border focus:outline-2 outline-sky-500
       border-gray-400 p-2 my-1 sm:my-2' required/>
       <button onClick={handleClick} disabled={isFeching}
       className='bg-sky-700 p-2 text-white text-md font-semibold 
     rounded-sm  w-full my-1 sm:my-2 py-3
      active:from-sky-600 transition duaration-700'>Sign in</button>
         {error && <p className='text-xs text-red-500'>something went wrong</p>}
      </main>
      </div>
</div>
  )
}

export default Login