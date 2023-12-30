import React, { useEffect } from 'react'
import './client.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import image1 from "../../assets/avatar1.jpg"
import data from "../clients/Data"
import AOS from 'aos';
import 'aos/dist/aos.css'


const Client = () => {

  useEffect(()=> {
    AOS.init();
  }, [])

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      
      
    };
    
    
   
   
    return (
      <div className='client-section' id='client'>
        <div className='client' data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
        <h3>OUR CLIENT</h3>
        <h1>Codecraft has been honored to partner up with these clients</h1>
        <hr/>
      
        <Slider {...settings} >
  {data.map(({ avatar, name, review, company }, index) => (
    <div key={index} className='testimonial'>
      <p className='client-review'>{review}</p>
      <img className='client-avatar' src={avatar} alt='img' />
      <div className='client-details'>
        <span className='client-name'>{name}</span>
        <span className='client-company'>{company}</span>
      </div>
    </div>
  ))}
</Slider>
      
        </div>
      </div>
    
    );
  }


export default Client