import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'
const services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className='container services_container'>
        <article className='service'>
          <div className='services_head'>
            <h3>UI Design</h3>
          </div>
          <ul className='services_list'>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
          </ul>
        </article>
        <article className='service'>
          <div className='services_head'>
            <h3>Web Development</h3>
          </div>
          <ul className='services_list'>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon' />
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
            <li>
              <BiCheck className='sercice_list-icon'/>
              <p>Lorem,epsum dolor sit amet conssectuetur elit</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default services