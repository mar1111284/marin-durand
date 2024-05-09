// Home.jsx

// Import components
import InProgress from "../components/InProgress";
import {Link} from 'react-router-dom';
// Font Awesome
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';

// Import components
import Steps from "../components/Steps";
import { Flex, Progress } from 'antd';

import HeaderMockup from '../assets/header-mockup.png'



const Home = () => {

    return (
        <div className='page-container home'>
            {/* <InProgress/> */}

            <div className="home-header">
                <div className="top-header">

                    <div className="header-left-container">
                        <h1 >Promote your <span>business</span></h1>
                        <h2><i>Affordable Website Solutions for any devices at $300!</i></h2>
                        <Link className="get-in-touch-btn" to='/contact'>Get in touch</Link>
                    </div>

                    <img src={HeaderMockup} className="header-mockup"alt="Responsive devices mockup"></img>

                </div>
                <div className="bottom-header">
                    <Steps/>
                </div>
            </div>

        </div>
    )
  }
  
export default Home;