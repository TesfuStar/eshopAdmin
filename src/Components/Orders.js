import {useState,useEffect} from 'react'
import {userRequest} from '../request';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import axios from 'axios'
const Orders = () => {
  const [orders,setOrders] =useState([]);
  useEffect(()=>{
    const getAllOrders=async()=>{
      const res = await userRequest.get('/order')
      setOrders(res.data)

    }
    getAllOrders()
  },[])

  const handleDelete=async(id)=>{
    try{
             await userRequest.delete(`/order/${id}`)
    }catch(err){
      console.log(err)
    }
  }

 

    const columns = [
        { field: 'userId', headerName: 'User_ID', width: 100 },
        { field: 'phoneNo', headerName: 'phone number', width: 150 },
        { field: 'name', headerName: 'name', width: 130 },
        {field: 'address',headerName: 'address',width: 140,},
        {
          field: 'status',
          headerName: 'Status',
          description: 'This column has a value getter and is not sortable.',
          sortable: false,
          width: 160,},
          {field:'action',headerName:"action",width:150,
             renderCell:(params)=>{
                 return(
                     <div className='flex space-x-3'>
                       <Link to={'/orders/'+ params.row._id}>
                         <button 
                         className='bg-green-500 rounded-sm text-center px-3 p-1 font-medium text-sm text-white'>edit</button>
                         </Link>
                         <button   onClick={()=>handleDelete(params.row._id)}
                         className='bg-red-500 rounded-sm 
                         text-center px-3 p-1 font-medium text-sm text-white'>delete</button>
                     </div>
                 )
             }
        }
      ];
      
  
  return (
    <div className='p-4 bg-white shadow-lg m-4' style={{ height: 500, width: '100%' }}>
     <h1 className='font-bold text-xl py-4 text-gray-600'>latest Orders</h1>
    <DataGrid
      rows={orders}
      columns={columns}
      disableSelectionOnClick
      pageSize={15}
      getRowId={(row)=>row._id}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
  </div>
  )
}

export default Orders