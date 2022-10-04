import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBookAlt} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {MdContactPhone} from 'react-icons/md'
const Nav = () => {
  const[active,setActive]=useState("#")
  return (
    <nav>
     <a href="#" onClick={e=>setActive("#")} className={active === "#" ? "active":" "}> <AiOutlineHome/></a>
     <a href="#about" onClick={e=>setActive("#about")} className={active === "#about" ? "active":" "}> <AiOutlineUser/></a>
     <a href="#experience" onClick={e=>setActive("#experience")} className={active === "#experience" ? "active":" "}> <BiBookAlt  /></a>
     <a href="#services" onClick={e=>setActive("#services")} className={active === "#services" ? "active":" "}> <RiServiceLine/></a>
     <a href="#contact" onClick={e=>setActive("#contact")} className={active === "#contact" ? "active":" "}><MdContactPhone/></a>
    </nav>
  )
}

export default Nav