import { Link } from 'react-router-dom';
import smallPurpleLogo from '../../assets/images/logos/tag-sm-logo-purple.png';
import './NavBar.css'


export default function NavBar({ user, setUser }) {
  return (
    <nav>
      <img id='nav-logo' src={smallPurpleLogo} alt='Tag Operations Logo' />
      <div>
        <Link to='/about'>About Us</Link>
        <Link to='/services'>Services</Link>
        <Link to='/prices'>Prices</Link>
        <Link to='/contact'>Contact</Link>
      </div>
    </nav>
  );
}