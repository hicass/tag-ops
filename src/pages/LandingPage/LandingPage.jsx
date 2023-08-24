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

            <div id='landing-solutions-section'>
                <h2 id='landing-solutions-h2'>Our Solutions</h2>

                <div id='solutions-container'>
                    <div id='hr-solution' className='solution'>
                        <h3 className='solution-txt'>Human Resources</h3>
                    </div>
                    <div id='operations-solution' className='solution'>
                        <h3 className='solution-txt'>Operations</h3>
                    </div>
                    <div id='finance-solution' className='solution'>
                        <h3 className='solution-txt'>Finance</h3>
                    </div>
                </div>

                <p id='solutions-bottom-txt'>We bring you expert level knowledge, automated processes, and clear policies</p>
            </div>

            <div id='landing-stats-section'>
                <h2 id='stats-h2'>Stats go here</h2>
            </div>

            <div id='landing-flow-section'>
                <h2 id='flow-h2'>The Tag Ops Flow:</h2>
            </div>

            <div id='landing-testimonials-section'>
                <h2 id='testimonials-h2'>See what our clients are saying</h2>

                <div id='testimonials-container'>
                    <div className='testimonial-card'>
                        <p className='testimonial-txt'>
                        "Courtney, in short, has transformed the back-end operations of our business. She started with bare bones and 
                        made an immediate, dramatic impact. She documented processes that improved candidate and internal employee 
                        experience, created more reports than I can count that gave excellent insight into our sales function, and 
                        fully owned and improved our routine operational processes."
                        </p>   
                        <p className='testimonial-name'>- Riece Keck</p>
                        <p className='testimonial-role'>Founder & CEO, Vault Recruiting</p>
                    </div>

                    <div className='testimonial-card'>
                        <p className='testimonial-txt'>
                        "It is rare to find a talent like Courtney. She is intelligent, proactive, and professional. She tackles projects 
                        through thoughtful planning and then executes projects flawlessly. If she doesn't know how to do something, she dives 
                        into research and figures out a strategy."
                        </p>   
                        <p className='testimonial-name'>- Jolie Curran</p>
                        <p className='testimonial-role'>Head of Operations, Ejento</p>
                    </div>

                    <div className='testimonial-card'>
                        <p className='testimonial-txt'>
                        "Working with Courtney was an absolute pleasure. She helped the IT team greatly in our interactions and took 
                        responsibility even for items that were not in her field of responsibility and brought them to the next level. 
                        We always felt she was a part of the team and her organisational skills are some of the best I have seen. 
                        Anyone would be happy to have her work in their company."
                        </p>   
                        <p className='testimonial-name'>- David Milner</p>
                        <p className='testimonial-role'>Head of IT, Celsius Network</p>
                    </div>
                </div>
            </div>
        </section>
    )
}