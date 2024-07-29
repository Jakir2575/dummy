import React, { useState } from 'react'
import UseCounter from './UseCounter'
import useDarkMode from '../DarkMode/useDarkMode'

const Counter1 = () => {
    const [count, Increment, Decrement]= UseCounter(10)
    const [isDarkMode,togglrDarkMode] = useDarkMode();
  return (
    <div>
      <h1>Count={count}</h1>
      <button onClick={Increment}>Increment</button>
      <button onClick={Decrement}>Decrement</button>
      <button onClick={togglrDarkMode}>Counter Dark Mode</button>
    </div>
  )
}

export default Counter1
