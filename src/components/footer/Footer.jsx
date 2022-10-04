import React from 'react'
import'./footer.css'
import {FaFacebookSquare} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
const Footer = () => {
  return (
    <footer id="#footer">
      <a href="facebook.com" className='footer_logo'>ABHILASH</a>
      <ul className='footer_list'>
        <li><a className='#'>Home</a></li>
        <li><a className='#about'>About</a></li>
        <li><a className='#portfolio'>Portfolio</a></li>
        <li><a className='#services'>Services</a></li>
        <li><a className='#contact'>Contact</a></li>
        <li><a className='#footer'>Footer</a></li>
      </ul>
      <div className='footer_socials'>
        <a href="https://facebook.com"><FaFacebookSquare className='footer_icon'/></a>
        <a href="https://linkedin.com"><BsLinkedin className='footer_icon'/></a>
        <a href="https://instagram.com"><BsInstagram className='footer_icon'/></a>
      </div>
      <p className='footer_copyright'>Abhilsh copy right-@2022</p>
    </footer>
  )
}

export default Footer