import React from 'react'

const DropDown = ({open}) => {

function DropdownItem() {

  return(
    <li className="dropdownItem"> 
    <a href="">Lorem ipsum</a>
    </li>
  )
}

return (
    <div className={`dropdown-menu ${open ? 'active' : 'inactive'}`}>
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
      <DropdownItem />
    </div>
  )
}

export default DropDown
