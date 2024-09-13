import {createSlice} from '@reduxjs/toolkit'
const initialState={
    currentUser:null,
    loading:false,
    error:false,
    currentfollow:null
}

export const currentUserSlice = createSlice({
name:'currentUser',
initialState,
reducers:{
    loginStart:(state)=>{
        state.loading=false;
    },
    loginSuccess:(state,action)=>{
        state.loading=true;
        state.currentUser=action.payload
    },
    loginFailure:(state)=>{
        state.loading=false;
        state.error=true
    },
    logout:(state)=>{
        state.currentUser=null;
        state.loading=false;
        state.error=false
    },
     
}
})

export const { loginStart,loginSuccess,loginFailure,logout }= currentUserSlice.actions

export default currentUserSlice.reducer
