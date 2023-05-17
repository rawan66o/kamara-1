import React, { useState } from 'react'
import "./Navbar.css"
import logo from "./images/logo.png"
import { TbGridDots } from "react-icons/tb"
import { AiFillCloseCircle } from "react-icons/ai"

const Navbar = () => {
  const [count, setCount] = useState(false);
 

  const [active, setActive] = useState('navLinks flex')

  const showNav = () => {
    setActive('navLinks flex active')
    setCount(!count)
  }

  const removeNav = () => {
    setActive('navLinks flex')
    setCount(!count)
  }

  return (
    <div className='navbar flex'>
      <div className='logo'>
        <img src={logo} alt='logo' />
      </div>
      <div className='links'>
        <ul className={active}>
          <li className='link'><a href="#">من نحن</a></li>
          <li className='link'><a href="#">إحصائياتنا</a></li>
          <li className='link'><a href="#">خدماتنا</a></li>
          <li className='link'><a href="#">عملائنا</a></li>
          <li className='link'><a href="#">أعمالنا</a></li>
        </ul>
      </div>

      {count === false
        ?
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className="icon" />
        </div>
        :
        <div onClick={removeNav} className="closeNavbar">
          <AiFillCloseCircle className='icon' />
        </div>}

   
    </div>
  )
}

export default Navbar