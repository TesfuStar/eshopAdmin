import React from 'react'
import { Language,DarkModeOutlined } from '@mui/icons-material'
const Header = () => {
  return (
    <div className='bg-gray-50 flex items-center justify-between p-2 shadow-xl px-4'>
     <div className='flex h-12 items-center justify-center'>
     <h2 className='font-bold text-2xl text-gray-700'>AbdiAdmin</h2>
     </div>

     <div className='flex h-12 items-center space-x-2'>
       <div>

     <Language className='text-gray-700 '/>
     <DarkModeOutlined className='text-gray-700 '/>
       </div>
     <div>
       <img src="/pic-4.png" alt="" className='rounded-full w-12 h-12' />
     </div>
     </div>
    </div>
  )
}

export default Header