import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';
import './MobileMenu.css'


export default function MobileMenu({ toggleMobileMenu }) {
    return (
        <Slide direction='right' triggerOnce='true'>
            <div id='mobile-nav-container'>
                <Fade cascade damping={0.2}>
                    <ul>
                        <li className='mobile-nav-link'>
                            <Link 
                                to='/about'
                                onClick={toggleMobileMenu}
                                className='mobile-nav-link'
                            >
                                About Us
                            </Link>
                        </li>

                        <li className='services-nav'>
                            <Fade cascade damping={0.1}>
                            <ul>
                                <li className='services-nav-label'>Services</li>
                                
                                <li className='mobile-nav-link mobile-services-link-container'>
                                    <Link 
                                        to='/human-resources'
                                        onClick={toggleMobileMenu}
                                        className='mobile-services-link'
                                    >
                                        Human Resources
                                    </Link>
                                </li>

                                <li className='mobile-nav-link mobile-services-link-container'>
                                    <Link 
                                        to='/operations'
                                        onClick={toggleMobileMenu}
                                        className='mobile-services-link'
                                    >
                                        Operations
                                    </Link>
                                </li>

                                <li className='mobile-nav-link mobile-services-link-container'>
                                    <Link 
                                        to='/finance'
                                        onClick={toggleMobileMenu}
                                        className='mobile-services-link'
                                    >
                                        Accounting/ Bookkeeping
                                    </Link>
                                </li>
                            </ul>
                            </Fade >
                        </li>

                        <li>
                            <Link 
                                to='/prices'
                                onClick={toggleMobileMenu}
                                className='mobile-nav-link'
                            >
                                Prices
                            </Link>
                        </li>

                        <li id='mobile-contact-link-container'>
                            <Link 
                                to='/contact'
                                onClick={toggleMobileMenu}
                                className='mobile-nav-link'
                                id='mobile-contact-link'
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </Fade>
                
            </div>
        </Slide>
    )
}