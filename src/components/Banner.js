import React from 'react'
import walle from '../img/walle.png'
import waves from '../img/waves.svg'

const Banner = () => {
  return (
    <section className="banner__section">
      <div className="banner__container">
        
        <h3 className="banner__title">
            <span>Your</span>
            <span>vacation</span>
            <span>is here</span>
        </h3>
        
        <img className="walle" src={walle} alt="" />

      <div className="phrase__group">
        <h3 className="banner__subtitle">
            <span>Ready</span>
            <span>to</span>
            <span>sail</span>
        </h3>
        <img className="waves" src={waves} alt="" />
      </div> 
         
    </div>
  
    </section>
  )
}

export default Banner
