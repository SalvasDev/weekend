import React from 'react'
import curve from '../img/curve.svg'

const Servicios = () => {
  return (
    <section className="servicios__section">

      <div className="servicios__first">
          <h2 className="servicios__title">Lorem <br/>ipsum</h2>
          <p className="servicios__text">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>  
      </div>
      
      <div className="servicios__right">
        <h2 className="servicios__title2">Lorem ipsum</h2>
        <div className="group__texts">
            <p className="servicios__text2">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
            <p className="servicios__text3">Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna</p>
        </div>
      </div>

      <img className="curve" src={curve} alt="Rope" /> 
    </section>
  )
}

export default Servicios
