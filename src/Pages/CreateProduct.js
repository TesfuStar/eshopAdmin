import {useState} from 'react'
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/authRequest';
import Navbar from '../Components/Navbar'
import Sidebar from '../Components/Sidebar'
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import app from '../firebase'
const CreateProduct = () => {
    const [cat,setCat] = useState("menfashion")
    const[inputs,setInputs]=useState({});
    const[file,setFile]=useState(null)
    const dispatch = useDispatch();
    const handleChange=(e)=>{
        setInputs(prev=>{
            return{...prev,[e.target.name]:e.target.value}
        })
    }
    const handleSubmit=()=>{
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
            const product = {...inputs,img:downloadURL,categories:cat};
        addProduct(product,dispatch)
            });
          }
        );

        // const product = {...inputs,img:file,categories:cat};
        // addProduct(product,dispatch)
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
        <h1 className='font-bold text-3xl text-gray-700'>Create New Product</h1>
        <div className='grid grid-cols-2  gap-3 p-4'>
        <div className='flex flex-col'>
            <label className='font-medium text-gray-500 p-1'>Title</label>
            <input type="text" name="title" onChange={handleChange}
            placeholder='title' className=' p-3 rounded-md border border-gray-500'/>
        </div>
        <div className='flex flex-col w-full'>
            <label  className='font-medium text-gray-500 p-1'>Price</label>
            <input type="text" name="price" onChange={handleChange}
             placeholder='Price' className=' p-3 rounded-md border border-gray-500'/>
        </div>
        <div className='flex flex-col'>
        <label  className='font-medium text-gray-500 p-1'>Category</label>
        <select name="" onChange={(e)=>setCat(e.target.value)}
    className='px-3 py-2 font-semibold text-gray-500 bg-white border-blue-400 border-2'>
   <option value="menfashion" >menfashion</option>
   <option value="womenfashion" >womenfashion</option>
   <option value="kids">kids</option>
   <option value="shoes">shoes</option>
   <option value="watch">watch</option>


   </select>
        </div>
        <div className='flex flex-col row-span-2'>
            <label  className='font-medium text-gray-500 p-1'>Description</label>
           <textarea name="description" onChange={handleChange}
            id="" cols="30" rows="5" 
           placeholder='description' className=' p-3 rounded-md border border-gray-500'></textarea>
        </div>
       
        <div className='flex flex-col'>
            <label  className='font-medium text-gray-500 p-1'>Image</label>
            <input type="file"  onChange={(e)=>setFile(e.target.files[0])}
             placeholder='choose' className='border p-3 rounded-md border-gray-500'/>
        </div>
        </div>
        <div className='w-44 flex items-center justify-center mx-4'>
          <button  onClick={handleSubmit}
          className='w-full font-medium text-white p-2 bg-sky-500  rounded-md'>Create Now</button>
        </div>
    </div>
    </div>
</div>
    </div>
  )
}

export default CreateProduct

