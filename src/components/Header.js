import React, { useState } from 'react'
import Hero from './Hero'
import logo from '../img/logo.svg'
import arrow from '../img/arrow.svg'
import account_circle from '../img/account_circle.svg'
import DropDown from './DropDown'

const Header = () => {

  const [open, setOpen] = useState(false)
  return (
    <div className="header__container">
      <div className="header__bar">
          <img className="header__logo" src={logo} alt="logotype" />
          <nav className="nav__bar">
              <ul>
                <li  onClick={()=>{setOpen(!open)}} >Galería <img src={arrow} alt="arrowdown" /> <DropDown open = {open} id='1' /></li>
                                
                <li i onClick={()=>{setOpen(!open)}}>Servicios <img src={arrow} alt="arrowdown" /> <DropDown open = {open} d='2'/></li>

                <li  onClick={()=>{setOpen(!open)}}>Sobre nosotros <img src={arrow} alt="arrowdown" /> <DropDown open = {open} id='3'/></li>

                <li  onClick={()=>{setOpen(!open)}}>Combo <img src={arrow} alt="arrowdown" />  <DropDown open = {open} id='4'/></li>
                                

              </ul>
          </nav>

          <button className="btn__profile"><img src={account_circle} alt="account" />ingresar</button>

      </div>
      <Hero />
    </div>
    
  )
}



export default Header
