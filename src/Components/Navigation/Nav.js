import React, { useState } from 'react'
import logo from '../../Img/logo.png'
import './Nav.css'
import menu from '../../Img/menus.png'

import { NavLink, Routes, Route } from 'react-router-dom'
import Landing from '../Landing/Landing'
const Nav = () => {
    const [isSidebarVisible, setIsSidebarVisible] = useState(false);
    const handleMenuIconClick = () => {
        setIsSidebarVisible(!isSidebarVisible);
      };
  return (
    <div className="pages">
    <div className='nav'>
        <div className="logo">
            <img src={logo}id='logo' alt="logo"/>
        </div>
        <div className={`options${isSidebarVisible ? ' visible' : ''}`}  >
            <ul>
                <li> <NavLink to="/">Home</NavLink></li>
                <li> <NavLink to="/about">About Us</NavLink></li>
                <li> <NavLink to="/properties">Properties</NavLink></li>
                <li> <NavLink to="/blogs">Blogs</NavLink></li>
                <li> <NavLink to="/contacts">Contact Us</NavLink></li>
            </ul>
        </div>
        <div className="menus" >
            <img src={menu} alt="menu" onClick={handleMenuIconClick} />
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