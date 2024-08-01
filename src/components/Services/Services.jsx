import React from 'react'
import './Services.css'
import image1 from '../../assets/wedding.jpg'
import image2 from '../../assets/birthday.jpg'
import image3 from '../../assets/events.jpg'
import icon1 from '../../assets/wedding-rings.png'
import icon2 from '../../assets/birthday-icon.png'
import icon3 from '../../assets/event.png'


const Services = () => {
  return (

    <div className='services-center'>
        <div className='headingText'>
        <h1>Our Services</h1>
        </div>
        <div className='services'>
          <div className='service'>
            <img src={image1} alt='' />
            <div className='caption'>
              <img src={icon1} alt='' />
              <p>Weddings</p>
            </div>
          </div>

          <div className='service'>
            <img src={image2} alt='' />
            <div className='caption'>
              <img src={icon2} alt='' />
              <p>Birthdays</p>
            </div>
          </div>

          <div className='service'>
            <img src={image3} alt='' />
            <div className='caption'>
              <img src={icon3} alt='' />
              <p>All kinds of events</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Services
