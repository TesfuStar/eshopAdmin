import {useState,useEffect} from 'react'
import { Language,KeyboardArrowUp,ArrowUpward } from '@mui/icons-material'
import {Link} from 'react-router-dom'
import {userRequest} from '../request';
const Widget = () => {
  const [users,setUsers] =useState([]);
  const [orders,setOrders] =useState([]);
  const [incomes,setIncomes] =useState({});
  useEffect(()=>{
    const getAllUsers=async()=>{
      const res = await userRequest.get('/user/find')
      setUsers(res.data)
    }
    getAllUsers()
  },[])
  useEffect(()=>{
    const getAllOrders=async()=>{
      const res = await userRequest.get('/order')
      setOrders(res.data)
    }
    getAllOrders()
  },[])
  useEffect(()=>{
    const getTotalIncome=async()=>{
      const res = await userRequest.get('/order/income')
      setIncomes(res.data)
    }
    getTotalIncome()
  },[])
  console.log(incomes)
  return (
    <div className='mx-5 grid grid-cols-3 gap-4 m-4'>
        <div  className='bg-white shadow-lg flex items-center justify-between p-2'>
        <div className='flex-col items-center justify-between space-y-2'>
        <h1 className='font-semibold text-xl text-gray-400'>Users</h1>
        <h2 className='font-semibold text-2xl text-gray-700'>{users.length}</h2>
        <Link to='/users'>
        <p className='hover:underline cursor-pointer text-gray-400'>see all Users</p>
        </Link>
       </div>
       <div  className='flex'>
         <div className='flex  '>
         <ArrowUpward className='text-green-500 '/>
          <p>+5%</p>
         </div>
       
       </div>
        </div>
        <div  className='bg-white shadow-lg flex items-center justify-between p-2'>
        <div className='flex-col items-center justify-between space-y-2'>
        <h1 className='font-semibold text-xl text-gray-400'>Order</h1>
        <h2 className='font-semibold text-2xl text-gray-700'>{orders.length}</h2>
        <Link to="/orders">
        <p className='hover:underline cursor-pointer text-gray-400'>see all order</p>
        </Link>
       </div>
       <div  className='flex'>
         <div className='flex  '>
         <ArrowUpward className='text-green-500 '/>
          <p>+5%</p>
         </div>
       
       </div>
        </div>
        {/* <div  className='bg-white shadow-lg flex items-center justify-between p-2'>
        <div className='flex-col items-center justify-between space-y-2'>
        <h1 className='font-semibold text-xl text-gray-400'>Sells</h1>
        <h2 className='font-semibold text-2xl text-gray-700'>720</h2>
        <div className='flex  justify-between items-center w-full'>

        <p className='hover:underline cursor-pointer text-gray-400'>see all sells</p>
      
        </div>
       </div>
       <div  className='flex'>
         <div className='flex  '>
         <ArrowUpward className='text-green-500 '/>
          <p>+5%</p>
         </div>
       
       </div>
        </div> */}
        <div  className='bg-white shadow-lg flex items-center justify-between p-2'>
        <div className='flex-col items-center justify-between space-y-2'>
        <h1 className='font-semibold text-xl text-gray-400'>Balance</h1>
        <h2 className='font-semibold text-2xl text-gray-700'>{incomes[0]?.total}</h2>
        <p className='hover:underline cursor-pointer text-gray-400'>see Details</p>
       </div>
       <div  className='flex'>
         <div className='flex  '>
         <ArrowUpward className='text-green-500 '/>
          <p>+5%</p>
         </div>
       
       </div>
        </div>
    </div>
  )
}

export default Widget