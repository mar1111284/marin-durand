import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, Progress, Alert } from 'antd';
import Steps from '../components/Steps';
import HeaderMockup from '../assets/header-mockup.png';
import Step1Icon from '../assets/step1.svg';
import Step2Icon from '../assets/step2.svg';
import Step3Icon from '../assets/step3.svg';
import Step4Icon from '../assets/step4.svg';
import AboutMe from '../components/AboutMe';

const stepsData = [
  {
    id: 'step1',
    title: <h2><span><b>Step 1:</b></span> Visual Inspiration & <span style={{color: '#1e25a5'}}><b>Design</b></span></h2>,
    process: `I help you to find inspiration online and understand your preferences. We create a clear plan for your website's layout and navigation, ensuring it's easy to use. We help gather photos and text, and choose colors that match your brand.`,
    goal: 'I aim to create a design that embodies your brand and connects with your audience.',
    duration: '1 Week maximum',
    icon: Step1Icon
  },
  {
    id: 'step2',
    title: <h2><span><b>Step 2: </b></span><span style={{color: '#1e25a5'}}><b>Development</b></span> & Customization</h2>,
    process: `I work on coding and customizing your website according to your requirements and preferences. This involves building features, integrating functionalities, and ensuring the site functions smoothly across all devices.`,
    goal: 'My goal is to bring your design to life, creating a functional and user-friendly website tailored to your needs.',
    duration: '2 Weeks maximum',
    icon: Step2Icon
  },
  {
    id: 'step3',
    title: <h2><span><b>Step 3: </b></span>Validation & <span style={{color: '#1e25a5'}}><b>Quality Assurance</b></span></h2>,
    process: `I conduct thorough testing and quality assurance checks to ensure your website functions flawlessly and meets all your requirements. This involves testing functionalities, compatibility, and performance across various browsers and devices.`,
    goal: 'My goal is to ensure your website is bug-free, reliable, and delivers a seamless experience to your users.',
    duration: '1 Week maximum',
    icon: Step3Icon
  },
  {
    id: 'step4',
    title: <h2><span><b>Last Step: </b></span>Launch & <span style={{color: '#1e25a5'}}><b>Go Live</b></span></h2>,
    process: `I assist in deploying your website to the live server, ensuring a smooth transition from development to production. This involves configuring hosting, setting up domain, and optimizing the website for performance and security.`,
    goal: 'My goal is to successfully launch your website, making it accessible to your audience and ready to fulfill its purpose.',
    duration: '1 Week maximum',
    icon: Step4Icon
  }
];

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

      {stepsData.map((step, index) => (
        <div className={`step-detail ${index % 2 === 0 ? 'even-step' : ''}`} key={step.id} id={step.id}>
          <div className="step-detail-text">
            {step.title}
            <h3>Process</h3>
            <p>{step.process}</p>
            <h3>Goal</h3>
            <p>{step.goal}</p>
            <h3>Duration</h3>
            <p>{step.duration}</p>
          </div>
          <div className='illustration-container'>
            <img alt={`${step.title} illustration image`} src={step.icon} className="stepIcon" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
