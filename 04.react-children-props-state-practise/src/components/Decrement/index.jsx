import React from 'react'

const Decrement = ({count, setCount}) => {
  return (
    <button onClick={()=>{
        // setCount(count - 1);

        setCount((prevCount)=>prevCount - 1)
    }}>decrement</button>
  )
}

export default Decrement