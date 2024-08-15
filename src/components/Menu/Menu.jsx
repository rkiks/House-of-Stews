import React from 'react'
import './Menu.css';
import image1 from '../../assets/menu1.jpg'
import image2 from '../../assets/menu2.jpg'

const Menu = () => {
  return (
    <div className='menudo'>
      <div className='header'>
            <h1>Menu</h1>
      </div>
      <div className='menus'>
          
          <div className='menu'>
              <img src={image1} alt=''/>
          </div>
          <div className='menu'>
              <img src={image2} alt=''/>
          </div>
      </div>
    </div>
  )
}

export default Menu
