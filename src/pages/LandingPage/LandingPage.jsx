import './LandingPage.css';
import widePurpleLogo from '../../assets/images/logos/tag-lg-logo-purple.png';


export default function LandingPage() {
    return (
        <section id='landing-page'>
            <div id='landing-page-intro'>
                <h1 id='secret-title'>Tag Operations</h1>
                <div id='intro-txt-section'>
                    <h2 id='intro-h2'>Simplify, Optimize, Thrive with Tag Operations!</h2>
                    <div id='txt-container'>
                        <span id='intro-txt'>Your tech forward, embedded and flexible back office team!</span><br />
                    </div>
                </div>
                <img id='intro-logo' src={widePurpleLogo} alt='Tag Operations' />
            </div>

            <div id='bob-section'>
                <div className='blue-blob blob-6'></div>
                <div className='blue-blob blob-5'></div>
                <div className='blue-blob blob-4'></div>
                <div className='blue-blob blob-3'></div>
                <div className='purple-blob blob-2'></div>
                <div className='purple-blob blob-1'></div>
            </div>

            <div id='landing-solutions'>
                <h2>Our Solutions</h2>
            </div>
        </section>
    )
}