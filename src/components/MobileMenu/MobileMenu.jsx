import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';
import './MobileMenu.css'


export default function MobileMenu({ toggleMobileMenu }) {
    return (
        <Slide direction='right'>
            <div id='mobile-nav-container'>
            <Fade cascade damping={0.3}>
                <ul>
                    <li>
                        <Link 
                            to='/about'
                            onClick={toggleMobileMenu}
                        >
                            About Us
                        </Link>
                    </li>

                    <li>Services
                        <Fade cascade damping={0.1}>
                        <ul>
                            <li>
                                <Link 
                                    to='/human-resources'
                                    onClick={toggleMobileMenu}
                                >
                                    Human Resources
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to='/operations'
                                    onClick={toggleMobileMenu}
                                >
                                    Operations
                                </Link>
                            </li>

                            <li>
                                <Link 
                                    to='/finance'
                                    onClick={toggleMobileMenu}
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
                        >
                            Prices
                        </Link>
                    </li>

                    <li>
                        <Link 
                            to='/contact'
                            onClick={toggleMobileMenu}
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