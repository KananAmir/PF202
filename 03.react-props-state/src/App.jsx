import './App.css'
import Button from './components/Button'
import  Kitablar from './components/Books'
function App() {


  function handleClick() {
    console.log("clicked")
  }
  return (
    <>
      <h1>React Props and State</h1>
      <hr />
      <Button textContent={"click"} className={"bg-orange"} handleClick={handleClick}/> 
      <Button textContent={"sign in"} className={"bg-teal"}  handleClick={handleClick}/> 
      <Button textContent={"contact"}  handleClick={handleClick}/> 
      <hr />

      <Kitablar />

      <hr />
    </>
  )
}

export default App
