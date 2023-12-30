import React, { useEffect, useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import "./navbar.css"
import { FaArrowCircleDown, FaArrowDown, FaFacebookF } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { FaXTwitter } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css'

const Navbar = () => {

  useEffect(()=> {
    AOS.init();
  }, [])


  const [mobileNav, setMobileNav] = useState(false)

  const showMobileNav = () => {
    setMobileNav(!mobileNav)
  }
  const hideMobileNav = () => {
    setMobileNav(false)
  }

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (mobileNav && !event.target.closest('nav')) {
        setMobileNav(false);
      }
    };

    document.addEventListener('click', handleOutsideClick);

    return () => {
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [mobileNav]);


  const [scrolled, setScrolled] = useState(false)

  window.onscroll = () => {
      setScrolled(window.pageYOffset === 0 ? false : true);
      return () => (window.onscroll = null);
  }


  return (
    
    <header id='home'>
      <div className='overlay'>
    <nav>
        <div className='nav-left'>CodeCraft<FiberManualRecordIcon className='logo-dot' style={{color: "#2272FF"}}/></div>
        <div  className= {scrolled ? "nav__scrolled" : "nav-right"}><small>MENU</small> <MenuIcon onClick={showMobileNav} style={{fontSize:"40px", color:"white"}}/></div>
    </nav>

    <div className='header-text' data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
      <div>
    <h3>WELCOME TO CODECRAFT</h3>
    <h1>We are an innovative tech company, fostering creativity, and driving global advancements.</h1>
    </div>
    <div className='header-socials'>
      <div className='circle' data-tooltip-id="my-tooltip" data-tooltip-content='Facebook' > <FaFacebookF /></div>
      <div className='circle' data-tooltip-id="my-tooltip" data-tooltip-content='Instagram'><SiInstagram /></div>
      <div className='circle' data-tooltip-id="my-tooltip" data-tooltip-content='Twiter'><FaXTwitter /></div>
      <div className='circle' data-tooltip-id="my-tooltip" data-tooltip-content='Behance'><FaBehance /></div>
      <div className='circle' data-tooltip-id="my-tooltip" data-tooltip-content='Dribble'><FaDribbble /></div>
      <Tooltip id="my-tooltip"  />
    </div>
    </div>

    <div className='CTA'>
      <a href='#contact' className='CTA-btn'>START A PROJECT</a>
      <a href='#about'  className='CTA-btn'> MORE ABOUT US</a>
     
    </div>

    {mobileNav? <div className='mobile-nav' data-aos="fade-left"   data-aos-duration="1000">
      <div className='navigation'>
      <h3>NAVIGATION </h3> <h3 onClick={hideMobileNav} style={{color:"white"}}>X</h3>
      </div>

      <ul className='menu' data-aos="fade-left"   data-aos-duration="1500">
        <a href='#home'><li>Home</li></a>
        <a href='#about'> <li>About</li></a>
        <a href='#client'><li>Client</li></a>
        <a href='#intro'><li>Service</li></a>
        <a href='#work'><li>Work</li></a>
        <a href='#contact'><li>Contact</li></a>
      </ul>

      <div className='nav-text' data-aos="fade-left"   data-aos-duration="1400">
        Lorem ipsum dolor sit amet consectetur 
        adipisicing elit. Esse <span style={{color:"gray"}}>voluptates</span> quae
        expedita animi reiciendis placeat corrupti
        error omnis nesciunt voluptate!
      </div>

      <div className='nav-socials' data-aos="fade-left"   data-aos-duration="1300">
      <FaFacebookF />
      <FaXTwitter />
      <SiInstagram />
      <FaBehance  />
      <FaDribbble  />
      </div>
      
    </div> : ""}
    </div>
    <div className='home-line'></div>
    <div className='scroll'> <a href='#about'> <FaArrowCircleDown/> Scroll down</a></div>
    </header>
  )
}

export default Navbar