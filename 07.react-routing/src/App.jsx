import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Products from './pages/Products'
import ProductDetail from './pages/ProductDetail'
import NotFound from './pages/NotFound'

function App() {

  return (
    <>
    <Header/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route path="/products/detail/:id" element={<ProductDetail/>}/>

      <Route path="*" element={<NotFound/>}/>

     </Routes>
    <Footer/>
    </>
  )
}

export default App
