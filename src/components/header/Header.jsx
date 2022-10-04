import React from 'react'
import CTA from './CTA'
import './header.css'
import HeaderSocials from './HeaderSocials'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h2>Hello, I am</h2>
        <h1>Abhilash Kothapalli</h1>
        <h5>Frontend Developer</h5>
        <CTA/>
        <HeaderSocials/>
        <div className='me'>
          <img src="https://i.pinimg.com/originals/2b/a2/45/2ba2455ca817f7659e9ebfe9d494c5db.jpg" alt="" className='img'/>
        </div>
        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>     
    </header>
  )
}

export default Header