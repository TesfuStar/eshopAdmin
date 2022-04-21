import React, { useState,useEffect } from 'react'
import {userRequest} from '../request';
import { DataGrid } from '@mui/x-data-grid';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
const UsersList = () => {
  const [users,setUsers] =useState([]);
  useEffect(()=>{
    const getAllUsers=async()=>{
      const res = await userRequest.get('/user/find')
      setUsers(res.data)
    }
    getAllUsers()
  },[])

  const columns = [
    { field: '_id', headerName: 'ID', width: 120 },
        { field: 'username', headerName: 'username', width: 130 },
        { field: 'email', headerName: 'email', width: 150 },
     
          {field:'action',headerName:"action",width:150,
             renderCell:(params)=>{
                 return(
                     <div>
                         <button onClick={()=>handleClick(params.row.id)}
                          className='bg-red-500 rounded-sm text-center px-3 p-1 font-medium text-sm text-white'>Delete</button>
                     </div>
                 )
                }
              }
            ];
            
            const rows = [
        { id: 1, username: 'Snow', email: 'Jon@gmail',status:"pending" },
        { id: 2, username: 'Snow', email: 'Jon@gmail',status:"pending" },
        { id: 3, username: 'Snow', email: 'Jon@gmail',status:"pending" },
        { id: 4, username: 'Snow', email: 'Jon@gmail',status:"pending" },
        { id: 5, username: 'Snow', email: 'Jon@gmail',status:"pending" },
        
        
      ];
      const [data,setData]=useState(rows)
      const handleClick=(id)=>{
        setData(data.filter((item)=>item.id !==id))
      }
  return (
    <div className=''>
         <Navbar />
         <div className='flex'>
           <div className='sticky top-20 h-full overflow-hidden'>
          <Sidebar />
             </div>
         <div className='w-full mx-5'>
        
<div className='p-4 bg-white shadow-lg m-4 mr-8' style={{ height: 400, width: '100%' }}>
    
    <DataGrid
      rows={users}
      disableSelectionOnClick
      columns={columns}
      pageSize={15}
      getRowId={(row)=>row._id}
      rowsPerPageOptions={[10]}
      checkboxSelection
    />
    </div>
         </div>

         </div>
         </div>
  )
}

export default UsersList
