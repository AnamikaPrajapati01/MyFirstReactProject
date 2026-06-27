import React from 'react'
import Hero from '../../components/Hero'
import AboutPage from '../../components/AboutPage'
import './Home.css'
import { FaLongArrowAltRight } from "react-icons/fa";
import { MdPlayCircleOutline } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { CiMail } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";




function Home() {
  return (
    <>
      <Hero />
      <AboutPage/>



      <div className='Div'>
      </div>
      <div className='service-head'>
        <p className='Paragra'>Service we provide</p>
        <h1>Professional Services We Offer</h1>
      </div>
      <div className='catagory'>
        <div className='box1'>
          <img src="./web.jpg" alt="" height={250} />
          <p>software Development</p>
          <button className='btnn4'> <FaLongArrowAltRight /> View Details</button>
        </div>
        <div className='box1'>
          <img src="./clo.jpg" alt="" height={250} />
          <p> cloud solutions</p>
          <button className='btnn4'><FaLongArrowAltRight /> View Details</button>
        </div>
        <div className='box1'>
          <img src="./pro.jpg" alt="" height={250} />
          <p>Digital Marketing</p>
          <button className='btnn4'><FaLongArrowAltRight /> View Details</button>
        </div>
      </div>


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



      <div className='service-headd'>
        <p className='Paragra'>LATEST BLOG</p>
        <h1>Read Our Latest Insights</h1>
        <div className='catagory'>
          <div className='box2'>
            <img src="./download.jpg" alt="" height={250} />
            <p className='sd'>software Development</p>
            <button className='btnn5'> View Details <FaLongArrowAltRight /></button>
          </div>
          <div className='box2'>
            <img src="./dev.png" alt="" height={200} />
            <p className='sd'> cloud solutions</p>
            <button className='btnn5'>View Details <FaLongArrowAltRight /></button>
          </div>
          <div className='box2'>
            <img src="./5.jpg" alt="" height={175} />
            <p className='sd'>Digital Marketing</p>
            <button className='btnn5'> View Details <FaLongArrowAltRight /> </button>
          </div>
        </div>
      </div>

      
      <div className='Divv'></div>


      <div className='team'>
        <div className='members'>
          <h4> <CgProfile /> Anamika Prajapati</h4>
          <p className='intro'>
            Tecnospire developed a custom software solution tailored to our business workflow, and the results have been phenomenal. Their team took the time to understand our needs and delivered a scalable, user-friendly product that streamlined our operations.
          </p>
        </div>
        <div className='members'>
          <h4> <CgProfile /> Josh</h4>

          <p className='intro'>
            Tecnospire developed a custom software solution tailored to our business workflow, and the results have been phenomenal. Their team took the time to understand our needs and delivered a scalable, user-friendly product that streamlined our operations.
          </p>
        </div>
        <div className='members'>
          <h4> <CgProfile /> John</h4>

          <p className='intro'>
            Tecnospire developed a custom software solution tailored to our business workflow, and the results have been phenomenal. Their team took the time to understand our needs and delivered a scalable, user-friendly product that streamlined our operations.
          </p>
        </div>
      </div>

      <div className='Contactform'>
        <div className='get'>
          <h1>Get in Touch</h1>
          <p className='feedback'>We’d love to hear from you. Reach out with any questions or feedback.</p>
        </div>

        <div className='contact'>
          <div className='left-side-contact'>
            <div className='Email'>
              <h3> <CiMail /> Email</h3>
              <p>test@gmail.com</p>
            </div>
            <div className='Email'>
              <h3> <FaPhoneAlt /> Phone</h3>
              <p>980000000</p>
            </div>
            <div className='Email'>
              <h3> <IoMdPin /> Address</h3>
              <p>Shankhmul, Kathmandu</p>
            </div>
          </div>
          <div className='form'>
            <form >
              <div className='.form-contact'>
                <label for="fname">Name</label>
                <br></br>
                <input type='text' placeholder='Enter Name'></input>
              </div>
              <div>
                <label for="fname">Contact</label>
                <br></br>
                <input type="tel" id="phone" name="phone" placeholder="+98" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required></input>
              </div>
              <div>
                <label for="fname">Email</label>
                <br></br>
                <input type='Email' placeholder='test@gmail.com'></input>
              </div>
              <div>
                <label for="fname">Message</label>
                <br></br>
                <input type='text' placeholder=''></input>
              </div>
              <button>Submit</button>
            </form>
          </div>
        </div>
      </div>

      <div className='location'>
        <h1>Our Location</h1>
      </div>
      <div className='map'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5158.702557970414!2d85.34202310782689!3d27.693123997502546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198f03394b37%3A0xcd7712094f490bf2!2sShantinagar%20Futsal!5e0!3m2!1sen!2snp!4v1766698721027!5m2!1sen!2snp" width="600" height="450" allowfullscreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  )
}

export default Home