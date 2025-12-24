import React from 'react'
import Hero from '../../components/Hero'
import './Home.css'
import { TbDeviceDesktopCode } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { LuPenOff } from "react-icons/lu";
import { FaLightbulb } from "react-icons/fa6";
import { MdGroups } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";



function Home() {
  return (
<>
<Hero/>
<div className='hero'>
  <div>
    <img className='img' src="./heroo.png" alt="" />
  <div className='exp'>
  <div className='web'>
  <h4>1+</h4>
    <p className='web-para'>Years Experience</p>
  </div>
  <div className='web'>
    <h4> 7+</h4>
    <p className='web-para'>Happy Clients</p>
  </div>
  <div className='web'>
    <h4>11+</h4>
    <p className='web-para'>Team Members</p>
  </div>
  <div className='web'>
    <h4>7+</h4>
    <p className='web-para'>Projects Completed</p>
  </div>
  </div>
  </div>
  <div>
    <p className='aboutt'>About Tecnospire</p>
    <h1>Empowering Innovation & Growth Since 2025</h1>
    <div className='hrr'></div>
    <p className='paraa'>We're an innovative IT company dedicated to empowering businesses with cutting-edge technology solutions. From custom software development and robust cybersecurity to cloud integration and IT consulting, we partner with our clients to navigate the complexities of the digital landscape and achieve their strategic goals. Our passion lies in transforming challenges into opportunities through intelligent, scalable, and reliable IT services.</p>
  <div className='services'>
  <div className='web'>
    <h6><TbDeviceDesktopCode /> Web Development</h6>
    <p className='web-para'>Building responsive and dynamic websites tailored to your business needs.</p>
  </div>
  <div className='web'>
    <h6><FaDatabase /> Data Solutions</h6>
    <p className='web-para'>Scalable, secure databases and cloud systems.</p>
  </div>
  <div className='web'>
    <h6><FaMobileAlt/>  Mobile App Development</h6>
    <p className='web-para'>Cross-platform mobile apps with sleek UI and high performance</p>
  </div>
  <div className='web'>
    <h6> <LuPenOff/> UI/UX Design</h6>
    <p className='web-para'>Protecting your digital assets with advanced security measures and protocols.</p>
  </div>
  </div>
    <div>
  <h5><FaLightbulb/> Our Vission</h5>
  <p className='vission'>To be the catalyst for digital transformation, creating innovative solutions that redefine industries and elevate businesses to unprecedented levels of success.</p>
  </div>
  <div>
  <h5> <MdGroups/> Our Mission</h5>
  <p className='vission'>To deliver unparalleled technology services through innovation, expertise, and partnership, helping clients navigate and thrive in the digital age.</p>
  <button className='btnn2'><AiOutlineLike/> Get Started</button>
  <button className='btnn3'>Learn More</button>
  </div>
  </div>
</div>
</>
  )
}

export default Home