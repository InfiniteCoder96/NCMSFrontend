import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { RiVirusLine } from "react-icons/ri";
import LoginForm from './LoginForm';
import LoginModal from 'react-modal';

function Navbar(props) {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);
  const [loginModalState, setLoginModalState] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const handleModal = () => setLoginModalState(props.loginModalState(!loginModalState));

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  const checkAuthenticated = () => {
    if(localStorage.getItem("accessToken")){
      setAuthenticated(true);
    }
  }

  useEffect(() => {
    console.log(props);
    checkAuthenticated();
    showButton();
  }, [localStorage.getItem("accessToken")]);

  const handleDashboard = () => props.handleDashboard();

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className='navbar'>
          <div className='navbar-container container'>
            <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
              <RiVirusLine className='navbar-icon' />
              NCMS
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                  HOME
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/services'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  ABOUT US
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/products'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  COVID 19
                </Link>
              </li>
              <li className='nav-item'>
                <Link
                  to='/COVID19-dashboard'
                  className='nav-links'
                  onClick={closeMobileMenu}
                >
                  COVID 19 DASHBOARD
                </Link>
              </li>
              <li className='nav-btn'>
                {authenticated ? (
                  <Link to='/dashboard' className='btn-link'>
                    <Button buttonStyle='btn--outline'>DASHBOARD</Button>
                  </Link>
                ) : (
                  //<Link to='/sign-up' className='btn-link'>
                    /*<Button
                      buttonStyle='btn--outline'
                      buttonSize='btn--mobile'
                      onClick={handleModal}
                    >
                      SIGN UP
                    </Button>*/
                    <Button buttonStyle='btn--outline' onClick={handleModal}>SIGN UP</Button>
                  //</Link>
                )}
              </li>
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
