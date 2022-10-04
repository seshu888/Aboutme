import React from "react";
import './header.css'
import {AiFillGithub} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'
import {BsDribbble} from 'react-icons/bs'
const HeaderSocials = () => {
  return (
    <div className="header_socials">
        <a href="https://github.com" target="_blank"><AiFillGithub/></a>
        <a href="https://linkedin.com" target="_blank"><AiFillLinkedin/></a>
        <a href="https://dribble.com" target="_blank"><BsDribbble/></a>
    </div>
  )
}
export default HeaderSocials