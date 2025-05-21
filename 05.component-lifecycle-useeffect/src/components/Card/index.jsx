import { useState } from 'react';
import { useEffect } from 'react'

const Card = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");


    useEffect(()=>{
        console.log("card component mounted");

        //cleanup function
        // works only when component is unmounted
        return ()=>{
            console.log("card component unmounted");
        }
    }, [])

    useEffect(()=>{
        console.log("card component updated");
    }, [count, inputValue])


  return (
    <div style={{maxWidth: "400px", border: "2px solid", padding: "1rem"}}>
      <h2>PF202 Frontend Devs</h2>
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Assumenda itaque architecto nam molestiae maxime error. Id illo voluptate recusandae dignissimos possimus culpa quod libero. Voluptatum voluptates aut incidunt sit quod.</p>

      <button onClick={()=>{
        setCount((prevCount)=>prevCount+1)
      }}>{count}</button>

      <input type="text" value={inputValue} onChange={(e)=>{setInputValue(e.target.value)}}/>

      <p>Input Value: {inputValue}</p>
    </div>
  )
}

export default Card
