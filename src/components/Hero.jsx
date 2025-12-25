import React from 'react'
import { AiOutlineLike } from "react-icons/ai";
import { FaPlayCircle } from "react-icons/fa";



function Hero() {
  return (
    <div className='Hero'>
      <div>
        <p className='paragraph'>
          Innovate. Build. Transform.
        </p>
        <h1>Empowering Businesses with Next-Gen IT Solutions</h1>
        <div className='hr'></div>
        <p className='para'>At Tecnospire, we deliver innovative digital products to help your business grow and thrive in the digital age.</p>
        <button className='btnn'> <AiOutlineLike />  Get Started Now</button>
         <button className='btnn1'> <FaPlayCircle /> How It Works</button>
      </div>
      <div>
        <img src="./girl.png" alt="" />
      </div>
    </div>

  )
}

export default Hero
