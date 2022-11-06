 import React from 'react'
 import star from '../img/star.svg'
import SliderSwiper from './SliderSwiper'
    
    const About = () => {
    
    const images = [ 1, 2, 3, 4, 5 ]
    var i = 0

    return (
        <section className="about">
            <div className="stars">
                {images.map(img => {
                    i = i + 1
                    return (
                      <img src={star} alt="Like" key={i.toString()} />
                )})}
            </div>
            <h3 className="about__title">Tu palabra, no nuestra</h3>
            <p className="about__subtitle">After 15 years running The Yacht Week, people have a lot to say about us</p>

           <SliderSwiper />

        </section>
          
      )
    }
    
    export default About
    