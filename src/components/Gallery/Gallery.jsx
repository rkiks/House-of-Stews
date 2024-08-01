import React from 'react'
import image1 from '../../assets/houseofstewbg.jpg'
import image2 from '../../assets/gallery/catering1.jpg'
import image3 from '../../assets/gallery/catering2.jpg'
import image4 from '../../assets/gallery/catering3.jpg'
import './Gallery.css'

const Gallery = () => {
  return (
    <div className='gallery-center'>
     <main>
    <swiper-container style={
        {
        "--swiper-navigation-color": "#fff", 
        "--swiper-pagination-color": "#fff"
        }
    } 
    pagination-clickable="true" 
    navigation="true" 
    className="mySwiper">
            <swiper-slide lazy="true">
                <img src={image1} loading="lazy" alt="" />
            </swiper-slide>
                
            <swiper-slide lazy="true">
                <img loading="lazy" src={image2} alt="" />
            </swiper-slide>

            <swiper-slide lazy="true">
                <img loading="lazy" src={image3} alt="" />
            </swiper-slide>

            <swiper-slide lazy="true">
                <img loading="lazy" src={image4} alt="" />
            </swiper-slide>

            <swiper-slide lazy="true">
                    <img loading="lazy" src={image1} alt="" />
            </swiper-slide>
        </swiper-container>
    </main>
        
    </div>
  )
}

export default Gallery