import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.css'
const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
         <nav>
            {/* <ul className="flex space-x-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </ul> */}
            <ul className="flex space-x-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
                <NavLink to="/products">Products</NavLink>
            </ul>
         </nav>
    </header>
  )
}

export default Header
