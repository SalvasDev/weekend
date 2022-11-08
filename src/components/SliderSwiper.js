import React from 'react'
import Card from './Card'
import { Autoplay, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'


const SliderSwiper = () => { 
const cards = [ 1, 2, 3, 4, 5, 6, 7 ]
  return (
    <div>
      <div className="container">
        <div className="swiperContainer">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{
              loop: true,
              delay: 3000,
              disableOnInteraction: false
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={3} 
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              
               "@0.50": {
                slidesPerView: 1.15,
                spaceBetween: 20,
              },

              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
             
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },

                       
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
 
            }}
          >
             {cards.map(img => {
                return (
                    <SwiperSlide    key={img.toString()} >                  
                    <Card 
                        id={img}                     
                        name={'Alexandra Graff'} 
                        description= {'Lorem ipsum dolor sit amet, conse adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor.'}
                    />
                   </SwiperSlide>
            )})}
            </Swiper>
     </div>
        <div className="pagination" />
      </div>
    </div>
  )
}

export default SliderSwiper
