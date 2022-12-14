import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {SiWorldhealthorganization} from 'react-icons/si'
import {VscBook} from 'react-icons/vsc'
const About = () => {
  return (
    <section id="about" className='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className='container about_container'>
        <div className='about_me'>
          <div className='about_me-image'>
            <img src="https://i.pinimg.com/originals/2b/a2/45/2ba2455ca817f7659e9ebfe9d494c5db.jpg" alt=""/>
          </div>
        </div>
        <div className='about_content'>
          <div className='about_cards'>
            <article className='about_card'>
              <FaAward className='about_icon'/>
              <h5>Experience</h5>
              <span>2.5 years</span>
            </article>
            <article className='about_card'>
              <SiWorldhealthorganization className='about_icon'/>
              <h5>Company</h5>
              <span>FastScript Tech</span>
            </article>
            <article className='about_card'>
              <VscBook className='about_icon'/>
              <h5>Projects</h5>
              <span>3 </span>
            </article>
          </div>
          <p>Experience on up to date advance web development technologies React JS, ES6, JavaScript,Bootstrap, CSS, HTML5, Material UI, NPM, GIT etc.
        Skilled in designing and implementing end-to-end solutions with well organized andmaintainable code.</p>
           <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>    
    </section>
  )
}

export default About