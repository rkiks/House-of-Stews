import React from 'react'
import './Menu.css';
import image1 from '../../assets/menu1.jpg'
import image2 from '../../assets/menu2.jpg'

const Menu = () => {
  return (
    <div className='menus'>
        <div className='menu'>
            <img src={image1} alt=''/>
        </div>
        <div className='menu'>
            <img src={image2} alt=''/>
        </div>
    </div>
  )
}

export default Menu
