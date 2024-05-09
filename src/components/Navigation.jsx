import React, {useState, useEffect} from 'react'
import { Link, useLocation } from "react-router-dom";

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faXmark } from '@fortawesome/free-solid-svg-icons'


const Navigation = () => {

  const location = useLocation();
  const [navbarExpand, setNavbarExpand] = useState(false);
  const [bodyScroll, setBodyScroll] = useState(true);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  // Check for bodyScroll to avoid unpredictable behavior 
  useEffect(() => {
    const htmlElement = document.querySelector('html');

    if (navbarExpand) {
    //   console.log("Disabling scroll");
      htmlElement.style.overflowY = 'hidden';
    } else {
    //   console.log("Enabling scroll");
      htmlElement.style.overflowY = 'scroll';
    }

    // Clean up effect
    return () => {
      console.log("Re-enabling scroll on cleanup");
      htmlElement.style.overflowY = 'scroll';
    };
  }, [navbarExpand]);

  // Check the viewport / could be a custom hook ?
  useEffect(() => {

    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    }
    window.addEventListener('resize', changeWidth)

  }, [])

  // Check for bodyScroll avoid unpredictible behavior 
  useEffect(() => {
    navbarExpand ? setBodyScroll(false) : setBodyScroll(true)
    if(!bodyScroll){
      document.body.style.overflowY = 'hidden';
    }else{
      document.body.style.overflowY = 'scroll';
    }      
  })

  const handleToggle = () => {
    setNavbarExpand(prev => !prev);
  }

  return (
    <nav className={`navigation-container ${navbarExpand ? "expand" : ""}`}>

      <div className={`background-layer ${navbarExpand ? "expand" : ""}`}></div>

      <div className='navbar'>

        <div className='logo-container'>
          <p>Marin Durand</p>
          {/* <img src={Logo} alt="Logo Art of Gardens" className='navbar-logo'></img> */}
        </div>


        <div className={`links-container ${navbarExpand && screenWidth <= 480 ? "expand" : ""}`}>
        <Link className='link' to="/" onClick={navbarExpand ? handleToggle : null}>
          Home
          <div className={location.pathname === '/' ? 'selector selected' : 'selector'}></div>
        </Link>
          <Link className='link' to="/services" onClick={navbarExpand ? handleToggle : null}>
            Services
            <div className={location.pathname === '/services' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/contact"onClick={navbarExpand ? handleToggle : null}>
            Contact Us
            <div className={location.pathname === '/contact' ? 'selector selected' : 'selector'}></div>
          </Link>
          <Link className='link' to="/about"onClick={navbarExpand ? handleToggle : null}>
            About Us
            <div className={location.pathname === '/about' ? 'selector selected' : 'selector'}></div>
          </Link>
        </div>

        {navbarExpand ? 
            <FontAwesomeIcon className="menu-btn" icon={faXmark} style={{color: "black", fontSize: '3rem'}} onClick={handleToggle}/> :
            <FontAwesomeIcon className="menu-btn" icon={faBars} style={{color: "black", fontSize: '3rem'}} onClick={handleToggle}/>

        }
        
      </div>

    </nav>


  )
}

export default Navigation