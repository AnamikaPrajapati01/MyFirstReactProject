
import React from 'react'
import "./header.css"
import { MdOutlineEmail } from "react-icons/md";
import { Link } from 'react-router';
import { CiMail } from 'react-icons/ci';
import { LiaMagento } from 'react-icons/lia';
import { FaFacebook } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FiYoutube } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import { IoNavigate } from "react-icons/io5";





function Header() {
  return (
    <div className='container'>
      <div className='header-container'>
        <div>
          <div className='gmail'>
            <MdOutlineEmail />
            <p>test@gmail.com</p>
            <IoCallOutline />
            <p>+123 456 7890</p>
            <IoNavigate />
            <p>Shankhmul, Kathmandu</p>

          
          </div>
        </div>
        <div className='social-icons'>
          <FaFacebook />
          <CiLinkedin />
          <FiYoutube />
        </div>
      </div>
      <div className='header'>
        <div>
          <img src="./image.png" alt="" />
        </div>
        <nav>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/about">About</Link></li>
         <li><Link to="/service">Services</Link></li>
         <li><Link to="/portfolio">Portfolio</Link></li>
         <li><Link to="/blog">Blog</Link></li>
         <li><Link to="/contact">Contact</Link></li>
        </nav>
        <div>
          <button className='btn'>Schedule a Meeting</button>
        </div>
      </div>
    </div>
  )
}

export default Header
