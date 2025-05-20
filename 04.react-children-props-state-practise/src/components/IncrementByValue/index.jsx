import React from 'react'

const IncrementByValue = ({handleIncrementByInputValue, setInputValue, inputValue}) => {
    return (
        <>
            <input type="number" value={inputValue} onChange={(e) => {
                setInputValue(+e.target.value)
            }} />

            <button onClick={handleIncrementByInputValue}>increment by input value</button>
        </>
    )
}

export default IncrementByValue