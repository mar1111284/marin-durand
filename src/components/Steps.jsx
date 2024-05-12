import { Link } from 'react-router-dom';
import { Progress } from 'antd';
import Step1Icon from '../assets/step1.svg';
import Step2Icon from '../assets/step2.svg';
import Step3Icon from '../assets/step3.svg';
import Step4Icon from '../assets/step4.svg';

const stepData = [
  {
    title: "Visual Inspiration & Design",
    percent: 25,
    icon: Step1Icon,
    description: "Share your vision with us. We'll listen carefully and understand your unique requirements.",
    link: "/step1"
  },
  {
    title: "Development & Customization",
    percent: 50,
    icon: Step2Icon,
    description: "Our skilled team will bring your vision to life with precision and expertise.",
    link: "/step2"
  },
  {
    title: "Validation & Quality Assurance",
    percent: 75,
    icon: Step3Icon,
    description: "We thoroughly test every aspect of your website to ensure a flawless user experience.",
    link: "/step3"
  },
  {
    title: "Launch & Go Live",
    percent: 100,
    icon: Step4Icon,
    description: "Once everything is perfect, we make the payment process easy and convenient for you to finalize your project.",
    link: "/step4"
  }
];

const Steps = () => {
    return (
        <div className="steps-components">
            <h2 className='steps-components-title'>
                Crafting Your Online Presence: <span style={{color: '#1e25a5'}}><b>Four Essential Steps</b></span>
            </h2>

            {stepData.map((step, index) => (
                <div className="step" key={index} id={`step${index + 1}`}>
                    <div className='top-step-container'>
                        <h2>{step.title}</h2>
                        <Progress type="circle" percent={step.percent} size="small" format={(percent) => `Step ${index + 1}`} overlayStyle={{position:'fixed'}} />
                    </div>

                    <div className='illustration-container'>
                        <img alt={`Step ${index + 1} icon`} src={step.icon} className="stepIcon" />
                    </div>

                    <p className="step-description">
                        {step.description}
                    </p>
                    <Link className="step-button" to={step.link}>View more</Link>
                </div>
            ))}
        </div>
    )
}

export default Steps;
