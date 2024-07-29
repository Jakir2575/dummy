import React,{useState} from 'react'
import UseCounter from './UseCounter'

const Counter2 = () => {
   const [count, Increment, Decrement]= UseCounter(15)
  return (
   
      <div>
      <h1>Count={count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
    </div>
 
  )
}

export default Counter2
