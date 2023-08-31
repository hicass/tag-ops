import { Link } from 'react-router-dom';
import './DropdownMenu.css';


export default function DropdownMenu({ handleMouseLeave }) {
    return (
        <div id='dropdown-menu-items'>
        <ul>
            <li className='dropdown-li'><Link className='dropdown-link' to='/human-resources'>Human Resources</Link></li>
            <li className='dropdown-li'><Link className='dropdown-link' to='/operations'>Operations</Link></li>
            <li className='dropdown-li'><Link className='dropdown-link' to='/finance'>Accounting/ Bookkeeping</Link></li>
        </ul>
        </div>
    )
}