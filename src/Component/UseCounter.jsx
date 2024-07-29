import React,{useState} from 'react'

const UseCounter = (initialValue=0) => {
    const [count, setCount] = useState(initialValue);

    const Increment = () => {
       setCount( count + 1);
    }

    const Decrement = () => {
        setCount( count - 1);

    }
  return [count, Increment, Decrement]
}

export default UseCounter
