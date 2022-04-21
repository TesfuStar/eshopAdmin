import { loginFailure, loginStart, loginSuccess, logouting } from "./userReducer"
import {publicRequest,userRequest} from '../request'
import { getProductsStart,getProductSuccess,getProductFailure,updateProductsStart,updateProductSuccess,
    deleteProductsStart,deleteProductSuccess,deleteProductFailure,updateProductFailure,
    addProductsStart,addProductSuccess,addProductFailure} from "./productReducer"

export const login = async(dispach,user)=>{
    dispach(loginStart());
    try{
        const response = await publicRequest.post("/login",user)
        dispach(loginSuccess(response.data))
    }catch(err){
        dispach(loginFailure())
    }
}

//logout

export const logout=(dispach)=>{
    dispach(logouting());

}

export const getProduct = async(dispach)=>{
    dispach(getProductsStart());
    try{
        const response = await publicRequest.get("/product")
        dispach(getProductSuccess(response.data))
    }catch(err){
        dispach(getProductFailure())
    }
}

export const deleteProduct = async(id,dispach)=>{
    dispach(deleteProductsStart());
    try{
        const response = await userRequest.delete(`/product/${id}`)
        dispach(deleteProductSuccess(id))
    }catch(err){
        dispach(deleteProductFailure())
    }
}

export const updateProduct = async(dispach,product,id)=>{
    dispach(updateProductsStart());
    try{
        // const res = await userRequest.put(`/product/${id}`,{product})
        dispach(updateProductSuccess({id,product}))
    }catch(err){
        dispach(updateProductFailure())
    }
}

export const addProduct = async(product,dispach)=>{
    dispach(addProductsStart());
    try{
        const res = await userRequest.post(`/product`,product)
        dispach(addProductSuccess(res.data))
    }catch(err){
        dispach(addProductFailure())
    }
}


