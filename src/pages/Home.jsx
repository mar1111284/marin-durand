import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Progress, Alert } from 'antd';
import Steps from '../components/Steps';
import HeaderMockup from '../assets/header-mockup.png';
import AboutMe from '../components/AboutMe';

const Home = () => {
  return (
    <div className="page-container home">
      <div className="home-header">
        <div className="top-header">
          <div className="header-left-container">
            <h1>Promote your <span>business</span></h1>
            <h2><i>Affordable Website Solutions for any devices at $300!</i></h2>
            <Link className="get-in-touch-btn" to='/contact'>Get in touch</Link>
          </div>
          <img src={HeaderMockup} className="header-mockup" alt="Responsive devices mockup" />
        </div>
        <div className="bottom-header">
          <Steps />
        </div>

        <AboutMe/>
      </div>
    </div>
  );
};

export default Home;
