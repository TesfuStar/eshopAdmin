import {useState,useEffect} from 'react'
import { DataGrid } from '@mui/x-data-grid';
import {Link} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import {getProduct,deleteProduct} from '../redux/authRequest'
import Sidebar from '../Components/Sidebar'
import Navbar from '../Components/Navbar'
const ProductsList = () => {
  const dispach = useDispatch()
const products = useSelector((state)=>state.product.products)
console.log(products)
  useEffect(()=>{
    getProduct(dispach)
  },[dispach])
  const handleDelete=(id)=>{
    deleteProduct(id,dispach)
  }
    const columns = [ 
        { field: '_id', headerName: 'ID', width: 70 },
        { field: 'title', headerName: 'title', width: 130 },
        {
          field: "product",
          headerName: "Product",
          width: 200,
          renderCell: (params) => {
            return (
              <div className="flex items-center space-x-3">
                <img  src={params.row.img} className="h-8" alt="" />
                <h2>{params.row.title}</h2> 
              </div>
            );
          },
        },
        { field: 'price', headerName: 'price', width: 70 },
        {field: 'categories',headerName: 'category',width: 140,},
        {
          field: 'description',
          headerName: 'description',

          width: 160,},
          {field:'action',headerName:"action",width:150,
             renderCell:(params)=>{
                 return(
                     <div className="flex items-center space-x-3">
                         <button onClick={()=>handleDelete(params.row._id)}
                         className='bg-red-500 rounded-sm 
                         text-center px-3 p-1 font-medium text-sm text-white'>Delete</button>
                        <Link to={"/products/" + params.row._id}>
                         <button  
                         className='bg-green-500 rounded-sm text-center px-3 p-1 font-medium text-sm text-white'>edit</button>
                        </Link>
                     </div>
                 )
             }
        }
      ];
   
  return (
    <div className=''>
    <Navbar />
    <div className='flex'>
      <div className='sticky top-20 h-full overflow-hidden'>
     <Sidebar />
        </div>
    <div className='w-full mx-10'>
  <div className='p-2 bg-white shadow-lg m-4' style={{ height: 400, width: '100%' }}>
     <h1 className='font-bold text-xl py-4 text-gray-600'>Products</h1>
    <DataGrid
      rows={products}
      columns={columns}
      disableSelectionOnClick
      pageSize={15}
      getRowId={(row)=>row._id}
      rowsPerPageOptions={[8]}
      checkboxSelection
    />
  </div>
    </div>

    </div>
    </div>
  )
}

export default ProductsList


{/* <div className='p-2 bg-white shadow-lg m-4' style={{ height: 400, width: '100%' }}>
     <h1 className='font-bold text-xl py-4 text-gray-600'>Products</h1>
    <DataGrid
      rows={products}
      columns={columns}
      disableSelectionOnClick
      pageSize={5}
      getRowId={(row)=>row._id}
      rowsPerPageOptions={[8]}
      checkboxSelection
    />
  </div> */}