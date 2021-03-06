import { FastForwardOutlined } from '@mui/icons-material'
import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import {Link, useLocation} from 'react-router-dom'
import {updateProduct} from '../redux/authRequest'
import { useSelector,useDispatch } from 'react-redux'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
const Product = () => {
  const [cat,setCat] = useState("menfashion")
  const[inputs,setInputs]=useState({});
  const[file,setFile]=useState(null)
  const location = useLocation();
  const productId = location.pathname.split('/')[2]
  const products = useSelector((state)=>state.product.products.find(product=>product._id ===productId))
  const dispatch = useDispatch()
 const handleChange=(e)=>{
  setInputs(prev=>{
      return{...prev,[e.target.name]:e.target.value}
  })
}
  const handleUpdate=(productId)=>{
    const fileName=new Date().getTime() + file.name;
    const storage= getStorage(app)
    const storageRef = ref(storage,fileName)
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on('state_changed', 
      (snapshot) => {
       
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
            default:
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
      }, 
      () => {
       
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product={...products,...inputs,categories:cat,img:downloadURL,_id:productId}
          updateProduct(dispatch,product,productId)
        });
      }
    );
 
  }
  return (
    <div>
     <Navbar />
     <div className='flex'>
  <div className='sticky top-20 h-full overflow-hidden'>
 <Sidebar />
    </div>
<div className='w-full mx-5'>


    <div  className='w-full m-2'>
     <div className='flex items-center justify-between px-4'>
       <h3 className='text-gray-500 text-2xl font-bold'>Edit Product</h3>
       <Link to='/products/create'>
       <button className='p-1 px-3 bg-emerald-500 text-white font-medium
        rounded-md'>Create new</button>
        </Link>
     </div>
    <div  className='grid  md:grid-cols-5 gap-3 w-full m-2'>
 
      <div className=' bg-white shadow-md col-span-2 p-2'>
         <div className='flex items-center space-x-2 p-4'>
           <div>
           <img src={products.img} alt="" className='object-cover h-12  '/>
           </div>
               <h2>{products.title}</h2>
         </div>
         <div>
           <h2 className='font-semibold pl-6 py-2 text-gray-600'>Account details</h2>

           <div className='flex flex-col space-y-1'>
           <h2 className='text-gray-500 font-semibold'>id:{productId}</h2>
              <h2 className='text-gray-500 font-semibold'>Title:{products.title}</h2>
              <h2 className='text-gray-500 font-semibold'>Price:{products.price}</h2>
              <h2 className='text-gray-500 font-semibold'>Category:{products.categories}</h2>
             <h2 className='text-gray-500 font-semibold'>Description:{products.description}</h2>
           </div>
         </div>
      </div>
         <div className='col-span-3  flex'>
         <h3 className='text-gray-500 text-xl font-bold p-3'>Edit</h3>
         <div className='p-2'>
           <div className='flex flex-col space-y-1 p-1'>
             <label htmlFor="" className='text-gray-500 font-medium'>Title</label>
              <input type="text" id=""  placeholder={products.title}
                
                name="title"
               onChange={handleChange}
              className='w-64 bg-transparent focus:outline-none border-b border-gray-300 '/>
           </div>
           <div className='flex flex-col space-y-1 p-1'>
             <label htmlFor="" className='text-gray-500 font-medium'>Price</label>
              <input type="text"  id=""  placeholder={products.price}
              name="price"
              onChange={handleChange}
              className='w-64 bg-transparent focus:outline-none border-b border-gray-300 '/>
           </div>
           <div className='flex flex-col space-y-1 p-1'>
             <label htmlFor="" className='text-gray-500 font-medium'>Category</label>
             <select name="" onChange={(e)=>setCat(e.target.value)}
    className='px-3 py-2 font-semibold text-gray-500 bg-white border-blue-400 border-2'>
   <option value="menfashion" >menfashion</option>
   <option value="womenfashion" >womenfashion</option>
   <option value="kids">kids</option>
   <option value="shoes">shoes</option>
   <option value="watch">watch</option>


   </select>
           </div>
           <div className='flex flex-col space-y-1 p-1'>
             <label htmlFor="" className='text-gray-500 font-medium'>Image</label>
              <input   type="file" name="" id=""
        
              onChange={(e) => setFile(e.target.files[0])}
              className='w-64 bg-transparent focus:outline-none border-b border-gray-300 '/>
           </div>
           <div className='flex flex-col space-y-1 p-1'> 
             <label htmlFor="" className='text-gray-500 font-medium'>Description</label>
             <textarea id="" cols="30" rows="3" placeholder={products.description}
           name="description"
           onChange={handleChange}
             className='w-64 bg-transparent focus:outline-none border-b border-gray-300 '></textarea>
           </div>
           <button onClick={()=>handleUpdate(productId)}
           className='w-64 p-1 m-2 px-3 bg-sky-500 text-white font-medium rounded-sm'>Update</button>
           

         </div>
        <div className='flex items-center justify-center space-x-3'>
        <img src={products.img} alt="" className='object-cover h-24  '/> 
        <FastForwardOutlined  className='text-sky-700 ' style={{fontSize:28}}/> 
        </div>
        </div>
    </div>
       </div>
       </div>
       </div>
       </div>
  )
}

export default Product




{/* <div className=''>
<Navbar />
<div className='flex'>
  <div className='sticky top-20 h-full overflow-hidden'>
 <Sidebar />
    </div>
<div className='w-full mx-5'>

</div>

</div>
</div> */}