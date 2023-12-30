import React, { useEffect, useState } from 'react'
import "./about.css"
import AOS from 'aos';
import 'aos/dist/aos.css'
import { FaArrowUp } from 'react-icons/fa';

const About = () => {

  useEffect(()=> {
    AOS.init();
  }, [])
  
  const maxNumbers = {
    count1: 124,
    count2: 670,
    count3: 134,
    count4: 142,
  };

  const [counts, setCounts] = useState({
    count1: 0,
    count2: 0,
    count3: 0,
    count4: 0,
  });

  useEffect(() => {
    const updateCount = (countName) => {
      setCounts((prevCounts) => {
        const newCount = prevCounts[countName] + 1;
        return newCount <= maxNumbers[countName]
          ? { ...prevCounts, [countName]: newCount }
          : prevCounts;
      });
    };

   
    const intervals = Object.keys(counts).map((countName) => {
      return setInterval(() => updateCount(countName), 10);
    });

   
    return () => {
      intervals.forEach((interval) => clearInterval(interval));
    };
  }, []);

  const [scrolled, setScrolled] = useState(false)

  window.onscroll = () => {
    setScrolled(window.pageYOffset  > 1100 ? false : true);
    return () => (window.onscroll = null);

}


  return (
    <div className='about-container'  id='about'>
        <div className='about-text'  data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
        <h3>HELLO THERE</h3>
        <h1>We Are Codecraft</h1>
        <hr/>
        </div>
       
        <p  data-aos="zoom-in"   data-aos-duration="1000" data-aos-once="false">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est a ea voluptatibus cum exercitationem magnam veritatis iusto hic? Suscipit neque amet unde obcaecati deleniti fuga, ut alias odit reiciendis impedit culpa nulla voluptatem molestias? Dolores magni recusandae facilis reprehenderit nihil quod quos incidunt sed. Praesentium, unde modi veritatis neque veniam expedita incidunt, molestiae iure labore quos quae, consectetur deleniti iusto.</p>
        <div className='numbers'  data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
            <div>
                <h1> {counts.count1}</h1>
                <h3>Award Received</h3>
            </div>
            <div>
                <h1> {counts.count2}</h1>
                <h3>Cups of Coffee</h3>
            </div>
            <div>
                <h1> {counts.count3}</h1>
                <h3>Projects Completely</h3>
            </div>
            <div>
                <h1> {counts.count4}</h1>
                <h3>Happy Clients</h3>
            </div>
        </div>
        <div className='about-line'></div>
        <a href='#home' className= {scrolled ? "nilup" : "up"}><FaArrowUp/> </a>
    </div>
  )
}

export default About