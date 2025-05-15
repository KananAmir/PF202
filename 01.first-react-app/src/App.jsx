import './App.css'
import { Fragment } from 'react'
import Heading from './components/Heading'
import Wellcome from './components/Wellcome'
import Input from './components/input'

function App() {

  return (
    <>
      {/* <h2>Hello React!</h2> */}

     <Heading/>

     <hr />

     <Wellcome />

      <hr />

      <form>
        <Input />
      </form>

    </>
  )
}

export default App


// function Wellcome() {
//   return (
//     <>
//       <h1>Welcome to React!</h1>
//       <p>This is a simple React component.</p>
//     </>
//   )
// }

// const Heading = () => {
//   return (
//     <h1>Hello, PF202!</h1>
//   )
// }

// function sum(a,b){
//   return a + b
// }

// console.log(sum(1,2)); //3
// console.log(sum(5,9)); //14

