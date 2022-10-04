import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from'react-icons/ri'
import {ImWhatsapp} from 'react-icons/im'
const Contact = () => {
  return (
    <section id="contact">
    <h5>Get In Touch</h5>
    <h2>Contact Me</h2>
    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
          <AiOutlineMail className='contact_option-icon'/>
          <h4>Email</h4>
          <h5>kothapalli.abhilash@gmail.com</h5>
          <a href="mailto:kothapalli.abhilash@gmail.com" target="_blank">Send a Message</a> 
        </article>
        <article className='contact_option'>
          <RiMessengerLine className='contact_option-icon'/>
          <h4>Messenger</h4>
          <h5>kothapalli Abhilash</h5>
          <a href="facebook.com" target="_blank">Send a Message</a> 
        </article>
        <article className='contact_option'>
        <ImWhatsapp className='contact_option-icon'/>
        <h4>Whatsapp</h4>
        <h5>+91 96183858961</h5>
        <a href="https://api.whatsapp.com/send?phone+919618385961" target="_blank">Send a Message</a> 
      </article>
      </div>
      <form action=''>
        <input name='name' type="text" placeholder='Your full name' required/>
        <input name='email' type="email" placeholder='Your email' required/>
        <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
        <button type="submit" className='btn btn-primary'>Send Message</button>
      </form>
    </div>
    </section>
  )
}

export default Contact