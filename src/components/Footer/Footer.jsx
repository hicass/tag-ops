import { Link } from 'react-router-dom';
import wideWhiteLogo from '../../assets/images/logos/tag-lg-logo-white.png';
import './Footer.css';


export default function Footer() {
    return (
        <footer>
            <div id='footer-left'>
                <div>
                    <img id='footer-logo' src={wideWhiteLogo} alt='Tag Operations' />
                </div>

                <div className='footer-col'>
                    <p className='footer-col-label'>Services</p>
                    <Link to='/human-resources' className='footer-link'>Human Resources</Link>
                    <Link to='/operations' className='footer-link'>Operations</Link>
                    <Link to='/accounting-bookkeeping' className='footer-link'>Accounting/ Bookkeeping</Link>
                </div>

                <div className='footer-col'>
                    <p className='footer-col-label'>Company</p>
                    <Link to='/about' className='footer-link'>About Us</Link>
                    <Link to='/contact' className='footer-link'>Contact</Link>
                </div>
            </div>

            <div id='footer-right'>
                <p className='creator-link'>Website created by: <a href='https://hicass.dev/' target='_blank' rel='noreferrer'  className='creator-link'>Cass Walters</a></p>
            </div>
        </footer>
    )
}