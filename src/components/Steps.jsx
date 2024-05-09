// Steps.jsx

import { Link } from 'react-router-dom';
import Step1Icon from '../assets/step1.svg';
import Step2Icon from '../assets/step2.svg';
import Step3Icon from '../assets/step3.svg';
import Step4Icon from '../assets/step4.svg';
import { Flex, Progress } from 'antd';

const Steps = () => {
    return (
        <div className="steps-components">
            
            <h2 className='steps-components-title'>Crafting Your Online Presence: <span style={{color: '#1e25a5'}}><b>Four Essential Steps</b></span></h2>

            <div className="step" id="step1">

                <div className='top-step-container'>
                    <h2>Visual Inspiration & Design</h2>
                    <Progress type="circle" percent={25} size="small" format={(percent) => `Step 1`} overlayStyle={{position:'fixed'}} />
                </div>

                <div className='illustration-container'>
                    <img alt="Step 1 icon" src={Step1Icon} className="stepIcon"></img>
                </div>
                <p className="step-description">
                    Share your vision with us. We'll listen carefully and understand your unique requirements.
                </p>
                <Link className="step-button" to="">View more</Link>

            </div>

            <div className="step" id="step2">

                <div className='top-step-container'>
                    <h2>Development & Customization</h2>
                    <Progress type="circle" percent={50} size="small" format={(percent) => `Step 2`} overlayStyle={{position:'fixed'}} />
                </div>

                <div className='illustration-container'>
                    <img alt="Step 2 icon" src={Step2Icon} className="stepIcon"></img>
                </div>

                <p className="step-description">
                    Our skilled team will bring your vision to life with precision and expertise.
                </p>
                <Link className="step-button" to="">View more</Link>


            </div>

            <div className="step" id="step3">

                <div className='top-step-container'>
                    <h2>Validation & Quality Assurance</h2>
                    <Progress type="circle" percent={75} size="small" format={(percent) => `Step 3`} overlayStyle={{position:'fixed'}} />
                </div>


                <div className='illustration-container'>
                    <img alt="Step 3 icon" src={Step3Icon} className="stepIcon"></img>
                </div>

                <p className="step-description">
                    We thoroughly test every aspect of your website to ensure a flawless user experience.
                </p>
                <Link className="step-button" to="">View more</Link>


            </div>

            <div className="step" id="step4">

                <div className='top-step-container'>
                    <h2>Launch & Go Live</h2>
                    <Progress type="circle" percent={100} size="small"/>
                </div>
                
                <div className='illustration-container'>
                    <img alt="Step 4 icon" src={Step4Icon} className="stepIcon"></img>
                </div>

                <p className="step-description">
                    Once everything is perfect, we make the payment process easy and convenient for you to finalize your project.
                </p>
                <Link className="step-button" to="">View more</Link>

            </div>
        </div>
    )
}

export default Steps;
