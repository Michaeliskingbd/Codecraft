import React, { useEffect } from 'react'
import "./work.css"
import image1 from "../../assets/portfolio1.jpg" 
import image2 from "../../assets/portfolio2.jpg" 
import image3 from "../../assets/portfolio3.jpg" 
import image4 from "../../assets/portfolio4.jpg" 
import image5 from "../../assets/portfolio5.png" 
import image6 from "../../assets/portfolio6.jpg" 
import InsertLinkOutlinedIcon from '@mui/icons-material/InsertLinkOutlined';
import AOS from 'aos';
import 'aos/dist/aos.css'

const Work = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

  return (
    <div className='work-section' id='work'>
    <div className='work' data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
        <div className='work-text' data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
            <h3>RECENT WORK</h3>
            <h1>We love what we do, check out some of our latest works</h1>
            <hr/>
        </div>
        <div className='gallery'>
        
        <div className="image-container">
      <img src={image1} alt="Your Image" className="hover-image" />
      <div className="work-overlay">
      <p className="visit-site-text">
      <InsertLinkOutlinedIcon/>
      VISIT SITE
      </p>
      </div>
    </div>

    <div className="image-container">
      <img src={image6} alt="Your Image" className="hover-image" />
      <div className="work-overlay">
      <p className="visit-site-text">
      <InsertLinkOutlinedIcon/>
      VISIT SITE
      </p>
      </div>
    </div>

    <div className="image-container">
      <img src={image2} alt="Your Image" className="hover-image" />
      <div className="work-overlay">
      <p className="visit-site-text">
      <InsertLinkOutlinedIcon/>
      VISIT SITE
      </p>
      </div>
    </div>

    <div className="image-container">
      <img src={image3} alt="Your Image" className="hover-image" />
      <div className="work-overlay">
      <p className="visit-site-text">
      <InsertLinkOutlinedIcon/>
      VISIT SITE
      </p>
      </div>
    </div>

    <div className="image-container">
      <img src={image4} alt="Your Image" className="hover-image" />
      <div className="work-overlay">
      <p className="visit-site-text">
      <InsertLinkOutlinedIcon/>
      VISIT SITE
      </p>
      </div>
    </div>

    <div className="image-container">
      <img src={image5} alt="Your Image" className="hover-image" />
      <div className="work-overlay">
      <p className="visit-site-text">
      <InsertLinkOutlinedIcon/>
      VISIT SITE
      </p>
      </div>
    </div>
        
        </div>
    </div>
    </div>
  )
}

export default Work