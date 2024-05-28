import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Progress, Alert } from 'antd';
import QrImage from '../assets/soft_black_version.png';
import ProfileImage from '../assets/profile.png';

const Homepage = () => {
  return (
    <div className="homepage">

      {/* CONTENT CONTAINER */} 
      <div className='home-content-container'>

        <div className='home-text-container'>

          <div className='title-container'>
            <h1>Hey, I'm <b style={{color: " #61DBFB"}}>Marin.</b></h1>
            <h2>Welcome on my portfolio!</h2>            
          </div>

          <div className='home-hero-container'>
            <img src={ProfileImage}></img>
          </div>

          <p>As an IT student, I'm passionate about creating dynamic and responsive web applications. Let's build something amazing together as I continue to learn and grow!</p>
        </div>

        <div className='icons-container'>
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sass/sass-original.svg" />
          <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-plain.svg" />
        </div>

        <div className='home-nav-container'>
          <Link to="" className='home-link'>Get in Touch</Link>
          <span>|</span>
          <Link to="" className='home-link'>My Projects</Link>
          <span>|</span>
          <Link to="" className='home-link'>About Me</Link>
          <span>|</span>
          <Link to="" className='home-link'>Career</Link>
          <span>|</span>
          <Link to="" className='home-link'>About this template</Link>          
        </div>

        {/* <div className='react-logo-container'>
          <img src={ReactLogo} alt="React Logo"></img>
        </div> */}

      </div>

      {/* QR CODE CONTAINER */}
      <div className='qrcode-container'>

        <p>Get my resume</p>

        <div className='qr-card'>
          <div className='qr-label'>
            <p style={{fontSize: "4rem"}}>Scan It</p>
            <p>Or</p>
            <p style={{backgroundColor: " #61DBFB", padding: "0.5rem"}}>Click Here!</p>
          </div>    
          <img src={QrImage} alt="qr-code"></img>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
