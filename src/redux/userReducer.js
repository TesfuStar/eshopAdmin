import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: 'user',
    initialState: {
      currentUser:null,
      isFeching:false,
      error:false,
      logout:null,
      updateError:false
    },

    reducers:{
      loginStart:(state,action)=>{
        state.isFeching = true;
        state.error= false
      },
      loginSuccess:(state,action)=>{
        state.isFeching = false;
        state.currentUser = action.payload
      },
      loginFailure:(state,action)=>{
        state.isFeching = false;
        state.error= true
      },
      logouting:(state,action)=>{
        state.currentUser = null ;
      },
      updateProfile:(state,action)=>{
        state.updateError=false
      },
      updateSuccess:(state,action)=>{
        state.isFeching = false;
        state.currentUser = action.payload

      },
      updateFailure:(state,action)=>{
        state.updateError=true
      },
      registerStart:(state,action)=>{
        state.isFeching = true;
        state.error= false
      },
      registerSuccess:(state,action)=>{
        state.isFeching = false;
        state.currentUser = action.payload
      },
      registerFailure:(state,action)=>{
        state.isFeching = false;
        state.error= true
      },

    }
})

export const {loginStart,loginSuccess,registerStart,registerSuccess,registerFailure,
  loginFailure,logouting,updateProfile,updateFailure,updateSuccess} = userSlice.actions
export default userSlice.reducer