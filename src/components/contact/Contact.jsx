import React, { useEffect } from 'react'
import "./contact.css"
import { FaBehance, FaDribbble, FaFacebookF } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { SiInstagram } from 'react-icons/si'
import AOS from 'aos';
import 'aos/dist/aos.css'

const Contact = () => {

    useEffect(()=> {
        AOS.init();
      }, [])
      
  return (
    <div className='contact-section' id='contact'>
        <div className='contact'>
            <div className='contact-text' data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
                <h3>CONTACT US</h3>
                <h1>Reach out for a new project or just say hello</h1>

            </div>

            <div className='contact-box' >
                <div className='c-left'>
                    <h3>SEND US MESSAGE</h3>
                    <form>
                        <input type='text' placeholder='Your Name'/>
                        <input type='text' placeholder='Your Email'/>
                        <input type='text' placeholder='Subject'/>
                        <textarea type='text'  placeholder='Your Message'/>
                        <button>SUBMIT</button>
                    </form>
                </div>
                <div className='c-right'>
                    <h3>CONTACT INFO</h3>
                    <div>
                        <h4 className='c-title'>Where to Find Us</h4>
                        <p>1600 Amphitheatre Parkway Mountain View, CA94043 US</p>
                    </div>
                    <div>
                        <h4 className='c-title'>Email Us At</h4>
                        <p>contact@codecraft.com</p>
                        <p>info@codecraft.com</p>
                    </div>
                    <div>
                        <h4 className='c-title'>Call Us At</h4>
                        <p>Phone: (+234) 12345652</p>
                        <p>Mobile: (+234) 12345548</p>
                        <p>Fax: (+234) 12345678</p>
                    </div>
                    <div className='contact-socials'>
                        <FaFacebookF />
                        <SiInstagram />
                        <FaXTwitter />
                        <FaBehance  />
                        <FaDribbble  />
                    </div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default Contact