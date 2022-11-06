import React, { useContext, useEffect, useRef } from 'react'
import MenuContext from '../context/MenuContext'
import Hero from './Hero'
import logo from '../img/logo.svg'
import arrow from '../img/arrow.svg'
import account_circle from '../img/account_circle.svg'
import DropDown from './DropDown'

const Header = () => {

  const { open, setOpen } = useContext(MenuContext)

  let menuRef = useRef()

  useEffect(()=> {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)){
        setOpen({ menuActive:false})
         
      }
    }
    document.addEventListener('mousedown', handler)

    return() => {
      document.removeEventListener('mousedown', handler)
    }

  },[])

  
  const hadleClick = (e, numItem) => {
    e.preventDefault()
    
    const actualMenu =  {
      menuActive : !open.menuActive,
      menuActual : numItem      
    }    
    setOpen( actualMenu )
  }




  return (
    <div className="header__container">
      <div className="header__bar">
          <img className="header__logo" src={logo} alt="logotype" />


        {/* <!-- burger menu -->      */}
        <div class="container__menu" id="container-menu">
          <button className="btn-burg" id="btn-burg">
            <div className="line1__btn-burg"></div>
            <div className="line2__btn-burg"></div>
            <div className="line3__btn-burg"></div>
          </button>
        </div>
        
         {/* <!-- Menu mobile -->           */}
        <nav className="showMenuMobile" id='showMenuMobile'>
          <a  href='index.html'>Home</a>
          <a  href="#proj">Projects</a>
          <a  href="#abt">About</a>
        </nav>


          <nav className="nav__bar" ref={menuRef}>
              <ul>
                <li  onClick={e =>{hadleClick(e, 1)}} >Galería <img src={arrow} alt="arrowdown" /> <DropDown open = {open} id = {1} /></li>
                                
                <li  onClick={e =>{hadleClick(e, 2)}}>Servicios <img src={arrow} alt="arrowdown" /> <DropDown open = {open} id={2} /></li>

                <li  onClick={e =>{hadleClick(e, 3)}}>Sobre nosotros <img src={arrow} alt="arrowdown" /> <DropDown open = {open} id={3} /></li>

                <li  onClick={e =>{hadleClick(e, 4)}}>Combo <img src={arrow} alt="arrowdown" />  <DropDown open = {open} id={4} /></li>
                                

              </ul>
          </nav>

          <button className="btn__profile"><img src={account_circle} alt="account" />ingresar</button>

      </div>
      <Hero />
    </div>
    
  )
}



export default Header
