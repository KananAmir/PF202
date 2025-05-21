import { useState } from 'react'
import './App.css'
import Card from './components/Card'
import Categories from './components/Categories'

function App() {


  // mounting
  // unmounting
  // updating

  const [show, setShow] = useState(false)
  

  return (
    <>
    <button onClick={()=>{setShow(!show)}}>Toggle Card</button>
    <hr />
    {show && <Card/>}

    <hr />
    <Categories />
    </>
  )
}

export default App
