import React from 'react'
import './Contact.css'
import image1 from '../../assets/logo3.png'

const Contact = () => {
  return (
    <div className='allText bottomText'>
      <h1 className='headingText'>Contact Us</h1>
      <div className='infos'>
        <div className='background-pic'>
        <img src={image1} alt=''/>
        </div>
            <div className='infos'>
                <h2>Address</h2>
                <p className='text-blk description'>76 Oswald Dr. Spruce Grove T7X 1A8</p>
            
            
                <h2>Email Address</h2>
                <p className='text-blk description'>houseofstewsfil@gmail.com</p>
            
            
                <h2>Phone Number</h2>
                <p className='text-blk description'>780-599-0036</p>
            </div>
        
      </div>

      
    </div>
  )
}

export default Contact
