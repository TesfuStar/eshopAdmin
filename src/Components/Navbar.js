import React from 'react'
import { Language,DarkModeOutlined } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux'
const Navbar = () => {
  const user = useSelector((state)=>state.user.currentUser)
  const username = user ? user.username : "signin"
  return (
    <div className='sticky top-0 z-40 w-full bg-gray-50 flex items-center justify-between  px-4 border-b border-gray-400'>
    <div className='flex items-center space-x-3'>
    <div className='flex h-16 items-center justify-center border-b border-gray-100 w-full'>
         <img src="/ecommercelogo.png" alt="" className='object-contain h-12 '/>
         </div>
    
    </div>

    <div className='flex h-12 items-center space-x-2'>
    <p className='font-semibold'>Hello,{ username}</p>
      <div>

    <Language className='text-gray-700 '/>
    <DarkModeOutlined className='text-gray-700 '/>
      </div>
  
    </div>
   </div>
  )
}

export default Navbar