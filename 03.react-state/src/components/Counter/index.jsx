import { useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState("");


    console.log(inputValue);

    const handleIncrement = () => {
        setCount(count + 1);
    }

    const handleDecrement = () => {
        setCount(count - 1)
    }

    const handleIncrementByInputValue = () => {
        setCount(count + inputValue)
    }
      
    
    return (
        <div style={{ backgroundColor: "lightblue", padding: "20px" }}>
            <button onClick={handleIncrement}>increment</button>
            <h3>{count}</h3>
            <button onClick={handleDecrement}>decrement</button>

            <hr />

            <input type="number" value={inputValue} onChange={(e) => {
                // setInputValue(e.target.valueAsNumber)
                // setInputValue(parseInt(e.target.value))
                // setInputValue(Number(e.target.value))
                setInputValue(+e.target.value)
            }} />


            <button onClick={() => {
                setCount(0)
                setInputValue("")
            }}>Reset</button>


            <button onClick={handleIncrementByInputValue}>increment by input value</button>
        </div>
    )
}

export default Counter