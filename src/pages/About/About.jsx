import React from 'react'
import AboutPage from '../../components/AboutPage'
import './About.css'
import AboutPage2 from '../../components/AboutPage2'

function About() {
  return (
    <>
      <AboutPage />

      <div className='Aboutpage'>
        <div className='about-content'>
          <div className='Discover'>
            <h1>Discover Our Latest Achievements</h1>
            <span>Driving Innovation in IT Solutions</span>
          </div>
          <div>
            <button className='button'> Get Start Now</button>
          </div>
        </div>

        <div className='linne'></div>
        <div className='credit'>
          <p className='total'>7+</p>
          <p>TOTAL PROJECTS DELIVERED</p>
          <p className='total'>7</p>
          <p>SATISFIED CLIENTS WORLDWIDE</p>
          <p className='total'>4.5*</p>
          <p>AVERAGE CLIENT RATING</p>
        </div>
      </div>


      <div >
        <div className='ourteam'>
          <p className='meetourteam'>MEET OUR TEAM</p>
          <span className='creative'>Meet Our Creative Minds Behind the Magic</span>
          <span className='creative'>10+ Talented Professionals Working With Passion</span>
          <p className='meetourteam'>Our team of developers, designers, and strategists work closely together to bring your digital vision to life.</p>
          <span className='meetourteam'>We believe in creativity, collaboration, and customer satisfaction.</span>
          <br></br>
          <br></br>
          <br></br>

        </div>
        <div className='team-pics'>
          <div className='team1'>
            <img src='./team1.png'></img>
            <h3>Anamika Prajapati</h3>
            <p>Cretive Lead</p>
          </div>
          <div className='team1'>
            <img src='./team2.png'></img>
            <h3>Josh</h3>
            <p>Senior Full-Stack Developer</p>
          </div>
          <div className='team1'>
            <img src='./team3.png' height={300} width={300}></img>
            <h3>John</h3>
            <p>Backend Developer</p>
          </div>
        </div>
      </div>
    <div className='about-div'></div>


      <AboutPage2 />
    </>


  )
}

export default About
