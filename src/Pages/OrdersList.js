import React from 'react'
import Orders from '../Components/Orders'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
const OrdersList = () => {
  return (
    <div className=''>
    <Navbar />
    <div className='flex'>
      <div className='sticky top-20 h-full overflow-hidden'>
     <Sidebar />
        </div>
    <div className='w-full mx-5'>
     <Orders />
    </div>

    </div>
    </div>
  )
}

export default OrdersList