import React from 'react'
import logo from '../../Img/logo.png'
import './Nav.css'

import { NavLink, Routes, Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
const Nav = () => {
  return (
    <div className="pages">
    <div className='nav'>
        <div className="logo">
            <img src={logo}id='logo' alt="logo"/>
        </div>
        <div className="options">
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/about">About Us</NavLink></li>
                <li> <NavLink to="/properties">Properties</NavLink></li>
                <li> <NavLink to="/blogs">Blogs</NavLink></li>
                <li> <NavLink to="/contacts">Contact Us</NavLink></li>
            </ul>
        </div>
        </div>
        
        <Routes>
            <Route path='/' element={<Landing/>}/>
            <Route path='/about' element={<Landing/>}/>
            <Route path='/properties' element={<Landing/>}/>
            <Route path='/blogs' element={<Landing/>}/>
            <Route path='/contacts' element={<Landing/>}/>
        </Routes>
        </div>

  )
}

export default Nav