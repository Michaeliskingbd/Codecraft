import React from 'react'
import "./intro.css"

import DesignServicesOutlinedIcon from '@mui/icons-material/DesignServicesOutlined';
import SquareOutlinedIcon from '@mui/icons-material/SquareOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import FormatShapesOutlinedIcon from '@mui/icons-material/FormatShapesOutlined';
import CodeOutlinedIcon from '@mui/icons-material/CodeOutlined';


const Intro = () => {
  return (
    <div className='intro' id='intro'>
        <div className='intro-heading'  data-aos="fade-up"   data-aos-duration="1000" data-aos-once="false">
            <h3>WHAT WE DO</h3>
            <h1>We’ve got everything you need to launch and grow your business</h1>
            <hr/>
        </div>
        <div className='intro-content'  data-aos="fade-up-right"   data-aos-duration="1000" data-aos-once="false">
            <div className='intro-items'>
                <DesignServicesOutlinedIcon/>
            <div className='intro-items-text'>
                <h2>Brand Identity</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non! Quasi itaque cupiditate sit, debitis voluptatem doloribus sint quos quia corrupti nisi velit, repudiandae sequi!</p>
            </div>
            </div>

            <div className='intro-items'>
                <SquareOutlinedIcon/>
            <div className='intro-items-text'>
                <h2>Illustration</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non! Quasi itaque cupiditate sit, debitis voluptatem doloribus sint quos quia corrupti nisi velit, repudiandae sequi!</p>
            </div>
            </div>

            <div className='intro-items'>
                <CampaignOutlinedIcon/>
            <div className='intro-items-text'>
                <h2>Marketing</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non! Quasi itaque cupiditate sit, debitis voluptatem doloribus sint quos quia corrupti nisi velit, repudiandae sequi!</p>
            </div>
            </div>

            <div className='intro-items'>
                <PublicOutlinedIcon/>
            <div className='intro-items-text'>
                <h2>Web Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non! Quasi itaque cupiditate sit, debitis voluptatem doloribus sint quos quia corrupti nisi velit, repudiandae sequi!</p>
            </div>
            </div>

            <div className='intro-items'>
                <FormatShapesOutlinedIcon/>
            <div className='intro-items-text'>
                <h2>Packaging Design</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non! Quasi itaque cupiditate sit, debitis voluptatem doloribus sint quos quia corrupti nisi velit, repudiandae sequi!</p>
            </div>
            </div>

            <div className='intro-items'>
                <CodeOutlinedIcon/>
            <div className='intro-items-text'>
                <h2>Web Development</h2>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi, non! Quasi itaque cupiditate sit, debitis voluptatem doloribus sint quos quia corrupti nisi velit, repudiandae sequi!</p>
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Intro