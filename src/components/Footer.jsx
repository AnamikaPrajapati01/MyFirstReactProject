import React from 'react'
import "./header.css"
import { CiMail } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaYoutube } from "react-icons/fa";
import { GrCloudSoftware } from "react-icons/gr";
import { FaMobileAlt } from "react-icons/fa";




function Footer() {
    return (
        <>
            <div className='footer'>
                <div className='footer-gmail'>

                    <span> <CiMail /> Say Hello</span>
                    <h3>Test@gmail.cpm</h3>

                </div>
                <div className='footer-logo'>
                    <img src='./image.png'></img>
                </div>
                <div className='anchor-tag'>
                    <div>
                        <a href="https://www.facebook.com/">  <FaFacebookF /></a>
                    </div>
                    <div>
                        <a href="https://www.linkedin.com"><CiLinkedin /> </a>
                    </div>
                    <div>
                        <a href="https://www.youtube.com"><FaYoutube /> </a>
                    </div>

                </div>
            </div>

            <div className='footerr'>
                <div>
                    <h3 className='h33'>About Us</h3>
                    <p className='footer-about'>Tecnospire is a forward-thinking IT company delivering top-tier digital solutions, including web and mobile app development, cloud integration, and UI/UX design. Our mission is to empower businesses with cutting-edge technology tailored to their unique needs.</p>
                </div>
                <div>
                    <h3 className='h33'>company</h3>
                    <ul className='footer-list'>
                        <li>About Us</li>
                        <li>Meet Our Team</li>
                        <li>Projects</li>
                        <li>Blogs</li>
                        <li>Contact Us</li>
                    </ul>

                </div>
                <div>
                    <h3 className='h33'>Our Core services</h3>
                    <br></br>
                    <span> <GrCloudSoftware /> Custom Software Development</span>
                    <br></br>
                    <br></br>
                    <br></br>
                    <span> <FaMobileAlt /> Mobile App Development</span>
                </div>
                <div>
                    <h3 className='h34'>From Our Tech Blog</h3>
                    <p className='design'>“How a Well-Designed Website Impacts Your Brand and Sales” </p>
                    
                    <p>“Top Mobile App Development Trends in 2025”</p>
                </div>
            </div>
            <hr></hr>

            <div className='Technospire'>
                <p>© 2025 Testspire. All rights reserved.</p>
            </div>
        </>
    )
}

export default Footer
