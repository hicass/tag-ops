import { Link } from 'react-router-dom';
import smallPurpleLogo from '../../assets/images/logos/tag-sm-logo-purple.png';
import './NavBar.css'


export default function NavBar({ user, setUser }) {
  return (
    <nav id='main-nav'>
        <Link to='/' ><img id='nav-logo' src={smallPurpleLogo} alt='Tag Operations Logo' /></Link>
      <div>
        <Link className='nav-link' to='/about'>About Us</Link>
        <Link className='nav-link' to='/services'>
          Services 
          <span class='material-symbols-outlined down-arrow'>
            expand_more
          </span>
        </Link>
        <Link className='nav-link' to='/prices'>Prices</Link>
        <Link id='contact-link' className='nav-link' to='/contact'>Contact</Link>
      </div>
      <div>
      </div>
    </nav>
  );
}