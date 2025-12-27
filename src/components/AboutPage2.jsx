import React from 'react'
import "./header.css"
import { MdPlayCircleOutline } from "react-icons/md";

function AboutPage2() {
  return (
<>
          <div className='heroo'>
            <div>
              <img className='img' src="./why.png" alt="" />
            </div>
            <div>
              <p className='aboutt'>Why Choose Us</p>
              <h1>We Deliver Creative, Scalable & Tailored Solutions</h1>
              <div>
                <img src="./border.png" alt="" />
              </div>
              <p className='paraa'>At Tecnospire, we combine innovation with technology to provide solutions that are not only beautiful but functional. We help brands modernize their systems, improve their user experience, and grow their business.</p>
              <p className='paraa'>Whether you're a startup or an enterprise, we adapt to your needs and deliver results that exceed expectations.</p>
              <div className='points'>
    
                <div className='point'>
                  Experienced & Skilled Team
                </div>
                <div className='point'>
                  Tailored Business Solutions
                </div>
    
                <div className='point'>
                  Lifetime Support & Maintenance
                </div>
    
                <div className='point'>
                  Transparent & Competitive Pricing
                </div>
                <a className='link' href='www.youtube.com'><MdPlayCircleOutline /> Watch Us</a>
              </div>
            </div>
          </div>
</>
  )
}

export default AboutPage2
