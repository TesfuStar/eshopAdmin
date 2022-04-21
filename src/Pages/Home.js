import React from 'react'
import Chart from '../Components/Chart'
import {useSelector} from 'react-redux'
import Orders from '../Components/Orders'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'


import Widget from '../Components/Widget'

const Home = () => {

  return (
       <div className=''>
         <Navbar />
         <div className='flex'>
           <div className='sticky top-20 h-full overflow-hidden'>
          <Sidebar />
             </div>
         <div className='w-full mx-5'>
         <Widget />
          <Chart />
          <Orders />
         </div>

         </div>
         </div>
       
        
  )
}

export default Home