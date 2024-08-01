import React from 'react'
import './Header.css'
import logo from '../../assets/logo.jpg'
import { Link } from 'react-scroll'


const Header = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="" className='logo' />
        <ul>
            <li><Link to='home' smooth={true} offset={0} duration={500}>Home</Link></li>
            <li><Link to='menu' smooth={true} offset={0} duration={500}>Menu</Link></li>
            <li><Link to='gallery' smooth={true} offset={0} duration={500}>Gallery</Link></li>
            <li><Link to='about' smooth={true} offset={0} duration={500}>About Us</Link></li>
            <li><Link to='services' smooth={true} offset={0} duration={500}>Our Services</Link></li>
            <li><Link to='contact' smooth={true} offset={0} duration={500}>Contact Us</Link></li>
            
        </ul>
      
    </nav>
  )
}

export default Header
