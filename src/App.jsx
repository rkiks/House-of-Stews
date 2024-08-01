import React from 'react'
import Header from './components/Header/Header'
import './App.css'

import Home from './components/Home/Home'
import Menu from './components/Menu/Menu'
import Gallery from './components/Gallery/Gallery'
import About from './components/AboutUs/About'
import Services from './components/Services/Services'
import Contact from './components/Contact/Contact'

const App = () => {
  return (
    <div className='container'>
      
      <Header />
      <div id='home'>
        <Home />
      </div>

      <div id='menu'>
        <Menu />
      </div>

      <div id='gallery'>
        <Gallery/>
      </div>

      <div id='about'>
        <About/>
      </div>

      <div id='services'>
        <Services/>
      </div>

      <div id='contact'>
        <Contact/>
      </div>
      
      
      
      
    </div>
  )
}

export default App

