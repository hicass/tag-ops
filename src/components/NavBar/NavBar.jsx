import { useState } from 'react';
import { Link } from 'react-router-dom';
import smallPurpleLogo from '../../assets/images/logos/tag-sm-logo-purple.png';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import './NavBar.css'


export default function NavBar() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const [navActive, setNavActive] = useState(false);

  function handleMouseEnter() {
    setNavActive(true);
    setDropdownVisible(true);
  }

  function handleMouseLeave() {
    setNavActive(false);
    setDropdownVisible(false);
  }

  const navStyle = {
    color: navActive ? '#bba6e8' : '#5E17EB',
    transition: 'color 0.2s ease-in-out',
  };


  return (
    <nav id='main-nav'>
      <Link to='/' >
        <img id='nav-logo' src={smallPurpleLogo} alt='Tag Ops Logo' />
      </Link>

      <div id='link-div'>
        <Link className='nav-link' to='/about'>About Us</Link>

        <div id='dropdown-parent-div' onMouseLeave={handleMouseLeave}>
          <p 
            onMouseEnter={handleMouseEnter}
            className='nav-link' 
            style={navStyle}
          >
            Services 
            <span class='material-symbols-outlined down-arrow'>
              expand_more
            </span>
          </p>
          {isDropdownVisible && <DropdownMenu handleMouseLeave={handleMouseLeave} />}
        </div>

        <Link className='nav-link' to='/prices'>Prices</Link>

        <Link id='contact-link' className='nav-link' to='/contact'>Contact</Link>
      </div>
      
      <div>
      </div>
    </nav>
  );
}