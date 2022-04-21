import {useState,useEffect} from 'react'
import {userRequest} from '../request';
import { Link ,useLocation} from 'react-router-dom';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
const EditOrder = () => {
  const location = useLocation();
  const[inputs,setInputs]=useState("");
  const [orders,setOrders] =useState([]);
  const OrderId= location.pathname.split("/")[2];
  console.log(OrderId)
  useEffect(()=>{
    const getAllOrders=async()=>{
      const res = await userRequest.get('/order/find/' + OrderId)
      setOrders(res.data)
      console.log(res.data)
    }
    getAllOrders()
  },[])
  
const handleSubmit=async(e)=>{
  e.preventDefault();
  try{
          await userRequest.put( `/order/${OrderId}`,{...orders,status:inputs})
  }catch(err){
    console.log(err)
  }
}
  return (
    <div>
<Navbar />
<div className='flex'>
  <div className='sticky top-20 h-full overflow-hidden'>
 <Sidebar />
    </div>
<div className='w-full mx-5'>


    <div className='m-4  flex flex-col w-full'>
    <h1 className='font-bold text-3xl text-gray-700'>Edit Order</h1>
    <div className='grid grid-cols-2  gap-3 p-4'>
    <div className='flex flex-col'>
        <label className='font-medium text-gray-500 p-1'>status</label>
        <input type="text" value={inputs} onChange={(e)=>setInputs(e.target.value)}
        placeholder='status' className=' p-3 rounded-md border border-gray-500'/>
    </div>
    

    
   
    </div>
    <div className='w-44 flex items-center justify-center mx-4'>
      <button  onClick={handleSubmit}
      className='w-full font-medium text-white p-2 bg-sky-500  rounded-md'>Update Order</button>
    </div>
      </div>
      </div>

</div>
</div>
  )
}

export default EditOrder

