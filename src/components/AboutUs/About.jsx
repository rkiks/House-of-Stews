import React from 'react'
import './About.css'
import image1 from '../../assets/houseofstewbg.jpg'

const About = () => {
  return (
    <div className='allText bottomText'>
      <h1 className='headingText'>About Us</h1>
      <div className='container-about'>
        
        <p className='text-blk description'>House of Stews is an exceptional catering service that specializes in 
        organizing events, tailored to meet your specific requirements. Regardless 
        of the size of your event, our off-premise catering services are available for 
        your home, office or any other venue of your preference. We take pride in providing 
        comprehensive catering services to the greater Edmonton area, ensuring your special 
        occasion is a memorable experience.</p>

        <div className='background-pic'>
        <img src={image1} alt=''/>
        </div>
      </div>

      
    </div>
  )
}

export default About
