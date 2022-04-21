import {createSlice} from '@reduxjs/toolkit'

const productSlice = createSlice({
    name: 'product',
    initialState: {
      products:[],
      pending:false,
      error:false,
    },

    reducers:{
      getProductsStart:(state,action)=>{
        state.pending = true;
        state.error= false
      },
      getProductSuccess:(state,action)=>{
        state.pending = false;
        state.products = action.payload
      },
      getProductFailure:(state,action)=>{
        state.pending = false;
        state.error= true
      },
      deleteProductsStart:(state,action)=>{
        state.pending = true;
        state.error= false
      },
      deleteProductSuccess:(state,action)=>{
        state.pending = false;
        state.products.splice(
            state.products.findIndex((item)=>item._id === action.payload),1
        )
      },
      deleteProductFailure:(state,action)=>{
        state.pending = false;
        state.error= true
      },

      //update start
      updateProductsStart:(state,action)=>{
        state.pending = true;
        state.error= false
      },
      updateProductSuccess:(state,action)=>{
        state.pending = false;
        state.products[
          state.products.findIndex((item) => item._id === action.payload.id)
        ] = action.payload.product;
      },
      updateProductFailure:(state,action)=>{
        state.pending = false;
        state.error= true
      },

       //add product
      addProductsStart:(state,action)=>{
        state.pending = true;
        state.error= false
      },
      addProductSuccess:(state,action)=>{
        state.pending = false;
        state.products.push(action.payload)
      },
      addProductFailure:(state,action)=>{
        state.pending = false;
        state.error= true
      },

    }
})

export const {getProductsStart,getProductSuccess,getProductFailure,
  updateProductsStart,updateProductSuccess,deleteProductsStart,
  deleteProductSuccess,deleteProductFailure,updateProductFailure,
  addProductsStart,addProductSuccess,addProductFailure} = productSlice.actions
export default productSlice.reducer