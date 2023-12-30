import React from 'react'
import "./footer.css"
import { MailOutline } from '@mui/icons-material'

const Footer = () => {
  return (
    <div className='footer'>
        <div className='main-footer'>
            <div className='left-footer'>
                <h1>Codecraft</h1>
                <p>consectetur Fugiat culpa nisi, officia ex. Rerum blanditiis recusandae dolores. perspiciatis reprehenderit quae minus libero laborum tempore. Delectus aperiam doloremque quia repudiandae quasi molestiae numquam, voluptas maxime, deleniti ullam distinctio tenetur eaque sint vel!</p>
            </div>
            <div className='right-footer'>
                <h3>Get Notified</h3>
                <p>consectetur adipisicing elit. Veritatis, dolorem! Cumque beatae dolore, quo numquam dolores dicta ea illo debitis adipisci quibusdam assumenda laudantium.</p>
                <div className='subscribe'>
                    <MailOutline/>
                    <input type='text' placeholder='Email Address'/>
                    <button className='btn'>SUBSCRIBE</button>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <span>@ Copyright Codecraft 2024</span>
            <span>Site Designed by <span style={{color:"white"}}>Michael King</span></span>
        </div>
    </div>
  )
}

export default Footer