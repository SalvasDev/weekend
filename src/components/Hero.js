import React from 'react'
import imgHero from '../img/image-hero.png'

const Hero = () => {
  return (
    <div className="hero__section">
      <img className="hero__img" src={imgHero} alt="Heroimage" />
      <h1 className="hero__title">
        <span>Las mejores</span>
        <span>vacaciones</span>
        <span>de tu vida</span>
      </h1>


    </div>

  )
}

export default Hero
