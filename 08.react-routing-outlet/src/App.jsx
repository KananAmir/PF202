
import './App.css'
import AdminLayout from './components/Admin'
import ClientLayout from './components/Client'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Client/Home'
import About from './pages/Client/About'
import Contact from './pages/Client/Contact'
import Dashboard from './pages/Admin/Dashoboard'
import AdminProducts from './pages/Admin/Products'
import Products from './pages/Client/Products'
import ErrorPage from './pages/Client/ErrorPage'
import ProductDetail from './pages/Client/ProductDetail'
function App() {

  return (
    <>
      <Routes>
        {/* client layout */}
        <Route path={"/"} element={<ClientLayout />}>
          <Route index element={<Home />} />
          <Route path={"about"} element={<About />} />
          <Route path={"contact"} element={<Contact />} />
          <Route path={"products"} element={<Products />} />
          {/* <Route path={"products/:id"} element={<ProductDetail />} /> */}

          <Route path={"products"} >
            <Route index element={<Products />}/>
            <Route path=':id' element={<ProductDetail />}/>
          </Route>

        </Route>

        {/* admin layout */}
        <Route path={"/admin"} element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path={"products"} element={<AdminProducts />} />
        </Route>
        <Route path={"*"} element={<ErrorPage />} />
      </Routes>
    </>
  )
}

export default App
