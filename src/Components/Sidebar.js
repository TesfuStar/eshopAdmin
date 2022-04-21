import React from 'react'
import { DashboardOutlined,PersonOutline,StoreOutlined,
    CreditCardOutlined,LocalShippingOutlined,
    ReportOutlined,EmailOutlined,FeedbackOutlined
    ,NotificationsOutlined,PersonAddOutlined,LogoutOutlined } 
    from '@mui/icons-material'
    import {Link} from 'react-router-dom'
    import { useSelector,useDispatch } from 'react-redux'
    import { logout } from '../redux/authRequest'
const Sidebar = () => {
  const user = useSelector((state)=>state.user.currentUser)
  const dispach = useDispatch()
    const handleClick=()=>{
         dispach(logout)
    }
  return (
    <div className=' sticky top-16 bg-white w-56 h-full overflow-hidden'>
      
    
         <div className='p-2'>
             {/* main */}
             <h3 className='font-medium text-sm text-gray-400 py-1'>Main</h3>
             <Link to='/'>
            <div className='flex items-center space-x-1 
            cursor-pointer hover:bg-blue-100 rounded-sm p-1'>
                <DashboardOutlined className='text-sky-700 ' style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>Dashboard</p>
            </div>
                </Link>
            {/* list */}
            <h3 className='font-medium text-sm text-gray-400 py-1'>List</h3>
            <div className=''>
                <Link to='/users'>
                <div className='flex  items-center space-x-1 cursor-pointer hover:bg-blue-100 p-1'>
                 <PersonOutline className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>users</p>
                </div>
                </Link>
                <Link to='/products'>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 p-1'>
                 <StoreOutlined  className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>products</p>
                </div>
                </Link>

                <Link to="/orders">
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-100 p-1'>
                 <CreditCardOutlined className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>orders</p>
                </div>
                </Link>
                {/* <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 p-1'>
                 <LocalShippingOutlined className='text-sky-700  '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>Delivery</p>
                </div>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-100 p-1'>
                 <ReportOutlined className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>Reports</p>
                </div> */}
            </div>
               {/* Notification */}
               <h3 className='font-medium text-sm text-gray-400 py-1 '>Notification</h3>
            <div className=''>
                 <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-100 p-1'>
                 <EmailOutlined className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>mail</p>
                </div>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-200 p-1'>
                 <FeedbackOutlined  className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>feedback</p>
                </div>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-100 p-1'>
                 <NotificationsOutlined  className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>notification</p>
                </div>
            </div>
                 {/* user */}
                 <h3 className='font-medium text-sm text-gray-400 py-1'>user</h3>
            <div className=''>
                <div className='flex items-center space-x-1 cursor-pointer hover:bg-blue-100 p-1'>
                <PersonAddOutlined className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500'>profile</p>
                </div>
                <Link to='/login'>
                <div onClick={handleClick}
                className='flex items-center space-x-1 cursor-pointer hover:bg-blue-100 p-1'>
                <LogoutOutlined className='text-sky-700 '  style={{fontSize:18}}/>
                <p className='font-medium text-[14px] text-gray-500' >logout</p>
                </div>
                </Link>
            </div>
            {/* theme */}
            <div>

            </div>
        </div>
    </div>
  )
}

export default Sidebar