import { useState } from 'react';
import { Link } from 'react-router-dom';
import smallPurpleLogo from '../../assets/images/logos/tag-sm-logo-purple.png';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import MobileMenu from '../MobileMenu/MobileMenu';
import './NavBar.css'


export default function NavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setMobileMenuVisible] = useState(false);
  const [navActive, setNavActive] = useState(false);

  function handleMouseEnter() {
    setNavActive(true);
    setDropdownVisible(true);
  }

  function handleMouseLeave() {
    setNavActive(false);
    setDropdownVisible(false);
  }

  function toggleMobileMenu() {
    setMobileMenuVisible((open) => !open);
  }

  const navStyle = {
    color: navActive ? '#bba6e8' : '#5E17EB',
    transition: 'color 0.2s ease-in-out',
  };


  return (
    <>
    <nav id='main-nav'>
      <Link to='/' >
        <img id='nav-logo' src={smallPurpleLogo} alt='Tag Ops Logo' />
      </Link>

      <div className='main-link-div'>
        <Link className='nav-link' to='/about'>About Us</Link>

        <div id='dropdown-parent-div' onMouseLeave={handleMouseLeave}>
          <p 
            onMouseEnter={handleMouseEnter}
            className='nav-link' 
            style={navStyle}
          >
            Services 
            <span className='material-symbols-outlined down-arrow'>
              expand_more
            </span>
          </p>

          {isDropdownVisible && <DropdownMenu handleMouseLeave={handleMouseLeave} />}
        </div>

        <Link className='nav-link' to='/prices'>Prices</Link>
        <Link id='contact-link' className='nav-link' to='/contact'>Contact</Link>
      </div>
      
      <div id='menu-toggle'>
        <input 
          id='toggle-checkbox' 
          className={isMobileMenuVisible ? 'toggle-on' : ''}
          type='checkbox' 
        />
        <label 
          className='toggle mobile-nav-trigger' 
          htmlFor='toggle-checkbox' 
          onClick={toggleMobileMenu}
        >
          <div className='bar bar--top'></div>
          <div className='bar bar--middle'></div>
          <div className='bar bar--bottom'></div>
        </label>
      </div>
    </nav>

    <div className='mobile-nav-div'>
      {isMobileMenuVisible && <MobileMenu toggleMobileMenu={toggleMobileMenu}/> }
    </div>
    </>
  );
}