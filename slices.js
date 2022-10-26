import { createSlice } from "@reduxjs/toolkit"

let initialState={
    counter:0, 
    message:''
  }

  const user={
    isLoggedIn:false,
    message:'user is not loggedIn',
  }

  const counterSlice=createSlice({
    name:'counter',
    initialState:initialState,
    reducers:{
        increment:(state,action)=>{
             return {counter:state.counter+1,message:action.payload};},
        decrement:(state,action)=>{ 
            return {counter:state.counter-1,message:action.payload};}
    }
  })

  const loginSlice=createSlice({
    name:'login',
    initialState:user,
    reducers:{
     login :(state,action)=>{return {isLoggedIn:true,message:'user logged in successfully'};},
    logout :(state,action)=>{return{isLoggeddIn:false,message:'user is logged out'};}
    }
  })

  //export all actions

  export const {increment,decrement}=counterSlice.actions
  export const {login,logout}=loginSlice.actions

  //export all reducers

  export const counterRed=counterSlice.reducer;
  export const loginRed=loginSlice.reducer;