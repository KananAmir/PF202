
const Reset = ({setCount, setInputValue}) => {
  return (
    <button onClick={()=>{
        setCount(0)
        setInputValue("")
    }}>Reset</button>
  )
}

export default Reset