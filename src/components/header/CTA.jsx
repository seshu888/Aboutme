import React from 'react'
import './header.css'
import CV from '../../assets/CV.pdf'
const CTA = () => {
  return (
    <div className='cta'>   
        <a href="#about" src={CV}  className="btn" download>Download CV</a>
        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA