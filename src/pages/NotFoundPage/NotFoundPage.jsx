import { Link } from 'react-router-dom';
import widePurpleLogo from '../../assets/images/logos/tag-lg-logo-purple.png';
import './NotFoundPage.css';

export default function NotFoundPage() {
  return (
    <section id="not-found-page">
      <div>
        <h2 id="not-found-h2">Uh oh...</h2>
        <h3 id="not-found-h3">Looks like what you are trying to find doesn't exist.</h3>
        <Link id="talk-link-landing" className="lets-talk-link" to="/contact">
          Let's talk!
        </Link>
      </div>
      <div>
        <img id="not-found-logo" src={widePurpleLogo} alt="Tag Operations" />
      </div>
    </section>
  );
}
