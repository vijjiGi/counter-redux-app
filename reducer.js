//import { createAction } from "@reduxjs/toolkit"
//import { combineReducers } from "redux"

import { createReducer } from "@reduxjs/toolkit";
import { decrement, increment, login, logout } from "./action";

let initialState={
    counter:0, 
    message:''
  }

  const user={
    isLoggedIn:false,
    message:'user is not loggedIn',
  }

export const counterReducer=createReducer(initialState,{
  [increment]:(state,action)=>{ return {counter:state.counter+1,message:action.payload};},
  [decrement]:(state,action)=>{ return {counter:state.counter-1,message:action.payload};}
})

export const loginReducer=createReducer(user,{
  [login] :(state,action)=>{return {isLoggedIn:true,message:'user logged in successfully',
  };},
  [logout] :(state,action)=>{return{isLoggeddIn:false,message:'user is logged out',
  };}
})


  /*export function counterReducer(state=initialState,action){
       switch (action.type){
        case 'increment':
          return {counter:state.counter+1,message:action.payload};
          case 'decrement':
            return  {counter:state.counter-1,message:action.payload};
            default :
              return state;
       }
  }*/

  /* if(action.type==='increment'){
          return {counter:state.counter+1,message:action.payload}
        }
        else if(action.type==='decrement'){
          return {counter:state.counter-1,message:action.payload}
        }
        else{
          return state;
       } */

       
  /*export function loginReducer(state=user,action){
    switch (action.type){
    case 'login':
        return {
          isLoggedIn:true,
          message:'user logged in successfully',
        };
    case 'logout':
      return{
        isLoggeddIn:false,
        message:'user is logged out',
      };
      default:
        return state;
    }
  }*/


  /* if(action.type==='login'){
      return {
        isLoggedIn:true,
        message:'user logged in successfully'
      }
    }
    else if(action.type==='logout'){
      return{
        isLoggeddIn:false,
        message:'user is logged out'
      }
    }
    else{
      return state;
    }*/

  //export const reducer=combineReducers({
   // counterReducer,loginReducer
  //})