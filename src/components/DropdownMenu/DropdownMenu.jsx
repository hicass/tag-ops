import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import './DropdownMenu.css';

export default function DropdownMenu({ shouldAnimate }) {
  return (
    <>
      {shouldAnimate ? (
        <div id="dropdown-menu-items">
          <Fade>
            <ul>
              <Fade cascade duration="400">
                <li className="dropdown-li">
                  <Link className="dropdown-link" to="/human-resources">
                    Human Resources
                  </Link>
                </li>

                <li className="dropdown-li">
                  <Link className="dropdown-link" to="/operations">
                    Operations
                  </Link>
                </li>

                <li className="dropdown-li">
                  <Link className="dropdown-link" to="/finance">
                    Finance
                  </Link>
                </li>
              </Fade>
            </ul>
          </Fade>
        </div>
      ) : (
        <div id="dropdown-menu-items">
          <ul>
            <li className="dropdown-li">
              <Link className="dropdown-link" to="/human-resources">
                Human Resources
              </Link>
            </li>

            <li className="dropdown-li">
              <Link className="dropdown-link" to="/operations">
                Operations
              </Link>
            </li>

            <li className="dropdown-li">
              <Link className="dropdown-link" to="/finance">
                Finance
              </Link>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}
