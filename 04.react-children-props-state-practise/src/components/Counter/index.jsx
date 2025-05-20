import { useState } from "react";
import Increment from "../Increment";
import Decrement from "../Decrement";
import Result from "../Result";
import Reset from "../Reset";
import IncrementByValue from "../IncrementByValue";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const handleIncrement = () => {
        // setCount(count + 1);
        setCount((prevCount=>prevCount+1))
        
    }

    // const handleDecrement = () => {
    //    setCount((prevCount)=> prevCount - 1)
    // }

    const handleIncrementByInputValue = () => {
        setCount((prevCount)=>prevCount + inputValue)
    }
      
    
    return (
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
            <Increment handleIncrement={handleIncrement}/>
            <Result count={count} />
            <Decrement count={count} setCount={setCount}/>
            <hr />
            <IncrementByValue handleIncrementByInputValue={handleIncrementByInputValue} setInputValue={setInputValue} inputValue={inputValue}/>
            <Reset setCount={setCount} setInputValue={setInputValue}/>
        </div>
    )
}

export default Counter