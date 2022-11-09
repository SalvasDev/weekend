import React, { Fragment } from 'react'
import close from '../img/close.svg'


const SideMenu = ({ setActiveMenu }) => {

    const handleClick = e => {
        e.preventDefault()
        setActiveMenu(false)
        var contMenu = document.querySelector('.container__menu')
        contMenu.classList.display = 'none'
    }

    return (
        <Fragment>
            <div className='menu__container'>               

                <nav className="burger__menu">

                     <button
                    className="close__button"
                    onClick={e => handleClick(e)}
                >
                   <img src={close} alt="" />
                </button>
                    <a href="home">Home</a>
                    <a href="#galería">Galería</a>
                    <a href="#servicios">Servicios</a>
                    <a href="nosotros">Sobre nosotros</a>
                    <a href="combo">Combo</a>
                </nav>

            </div>
        </Fragment>
    )
}

export default SideMenu
