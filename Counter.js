import React from 'react'
import { connect } from 'react-redux'
import { decrement, increment, login, logout} from '../redux/slices';

const mapStateToProps=(state)=>{
  return {
    counter: state.counterReducer.counter,
    message:state.counterReducer.message,
    login:state.loginReducer.isLoggedIn,
    loginMessage:state.loginReducer.message,
  };
}
const mapDispatchToProps=(dispatch)=>{
  return {
    incrementCounter:(message)=>dispatch(increment(message)),
    decrementCounter:(message)=>dispatch(decrement(message)),
    loginFun:()=>dispatch(login()),
    logoutFun:()=>dispatch(logout()),
  }
}

const Counter = (props) => {
  console.log(props)
  return (
    <div className='hello'>
     
    <div>
      {
        props.login?(<button onClick={()=>props.logoutFun()}>logout</button>)
                   :(<button onClick={()=>props.loginFun()}>login</button>)
      }
      <h3>{props.loginMessage }</h3>
      <br/>
      <br/>
      <br/>{
        props.login?(
          
        <div>
        counter value:{props.counter}
        <br/>
    <button  onClick={()=>props.incrementCounter('incremented')}>+</button>
    <button onClick={()=>props.decrementCounter('decremented')}>-</button>
    <br/>
    <h3>Message:{props.message}</h3> 
     </div>
        ):(
  <h2>pelase login to use counter</h2>
    )}
      </div></div>
  )
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);

