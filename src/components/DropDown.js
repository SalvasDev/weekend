import React, { useContext } from 'react'
import MenuContext from '../context/MenuContext'


const DropDown = ({id}) => {

const { open } = useContext(MenuContext)

var {  menuActive, menuActual} = open


function DropdownItem() {

  return(
    <li className="dropdownItem"> 
     <a href="">Lorem Ipsum</a>
    </li>
  )
}



return (
    <ul className={`dropdown-menu ${ menuActual === id && menuActive ? 'active' : 'inactive'}`}>
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
    </ul>
  )
}

export default DropDown
