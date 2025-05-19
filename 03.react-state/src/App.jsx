import { useState } from 'react'
import './App.css'
import Card from './components/Card';
import Counter from './components/Counter';

function App() {

  const [username, setUsername] = useState("rashad")
  const [cardSatus, setCardSatus] = useState(false)

  const [students, setStudents] = useState(["sakina", "teymur", "hazrat"])
  console.log("component rendered");

  // let username = "rashad"

  const handleClick = () => {
    // username = "sakina"
    // console.log(username);
    setUsername("sakina")
  }


  // const renderCard = ()=>{
  //   if(cardSatus){
  //     return <Card/>
  //   }else{
  //     return <p>no card</p>
  //   }
  // }

  return (
    <>
      <h1>Ract State</h1>

      <button onClick={()=>{
        setStudents([["sakina", "teymur", "hazrat"]])
      }}>change state</button>

      <h2>Username:  {username} </h2>

      <hr />

      <button onClick={handleClick}>click</button>

      <hr />

      <div style={{ margin: "1rem 0" }}>

        <button onClick={() => {
          setCardSatus(true)
        }}>Show Card</button>

        <button onClick={() => {
          setCardSatus(false)
        }}>Hide Card</button>

        <button onClick={() => {
          setCardSatus(!cardSatus)
        }}>Toggle</button>
      </div>

      {/* conditional rendering */}

      {/* {renderCard()} */}


      {/* {
        cardSatus ? <Card /> : <p>No Card</p>
      } */}


      {
        cardSatus && <Card />
      }

      <hr />
      <Counter/>
    </>
  )
}

export default App


// hooks: useState, useEffect, useContext, useReducer, useCallback, useMemo, useRef