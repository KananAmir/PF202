import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Books from './components/Books'
import AddBook from './components/AddBook'

function App() {
    const [books, setBooks] = useState([])

  return (
    <>
    <AddBook books={books} setBooks={setBooks}/>
    <hr />
    <Books books={books} setBooks={setBooks}/>
    </>
  )
}

export default App
