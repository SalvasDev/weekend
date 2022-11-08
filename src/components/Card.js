import React from 'react'
import picture from '../img/picture-profile.png'

const Card = ({ name, description }) => {


  return (
    <div className="card">        
      <div className="row__profile">
            <img src={ picture } alt="" />
            <p>{ name }</p>  
      </div>
      <p className="card__description">{ description }</p>          
    </div>
  )
}

export default Card
