import { Link } from 'react-router-dom';
import { Fade } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';
import sfImage from '../../assets/images/about-page/about-sf.jpg';
import courtneyImage from '../../assets/images/about-page/courtney-profile.jpeg'
import './AboutPage.css'


export default function AboutPage() {
    return (
        <section id='about-page'>

            <div id='about-top'>
                <div id='about-intro'>

                    <Slide direction='left' triggerOnce='true'>
                        <img id='sf-image' src={sfImage} alt='Golden Gate Bridge' />
                    </Slide>

                    <Slide direction='right' triggerOnce='true'>
                        <div id='intro-right'>
                            <div id='intro-h1-container'>
                                <h1 id='about-h1'>About Us!</h1>
                            </div>

                            <div id='about-intro-txt'>
                                <p>
                                    We are Tag Operations! Your partner in operational excellence. We believe that every business, 
                                    regardless of size, deserves tailored support to thrive. Born from this belief, 
                                    Tag Ops offers innovative and flexible back-office solutions, 
                                    empowering you to streamline operations, optimize resources, and achieve lasting success.
                                </p>
                            </div>
                        </div>
                    </Slide>

                </div>
            </div>


            <Fade>
                <div id='about-story-section'>
                    <h2 id='story-h2'>Our story</h2>

                    <p className='added-txt'>
                        Tag Ops was founded on the fundamental belief that every company, regardless of its size, 
                        requires operational support. We understand that not every business necessitates a full-time 
                        Operations leader to oversee extensive back-office projects or manage repetitive tasks such 
                        as payroll and invoicing.
                    </p>

                    <p className='added-txt'>
                        Our approach at Tag Ops is different. We provide a customizable model designed to meet you 
                        where you are in your business journey while offering the flexibility to scale as needed. 
                        We take the time to understand your unique requirements, conducting in-depth research to 
                        identify the most cost-effective tools, processes, and policies. Our goal is to dig deep 
                        with our clients, assisting in the establishment of a robust infrastructure that ensures 
                        your company runs smoothly without exhausting your resources.
                    </p>
                </div>
            </Fade>


            <div id='about-mission-section'>
                <div id='blob-container'>

                    <div id='about-mission-text'>
                        <h2 id='mission-h2'>Our Mission</h2>

                        <p id='mission-p'>
                            Simplify your operations, optimize your resources, and help you thrive.<br />
                            We make your business journey smoother, more efficient, and ultimately more successful!
                        </p>
                    </div>

                    <div className='mission-blue-blob mission-blob-1'></div>
                    <div className='mission-blue-blob mission-blob-2'></div>
                </div>
            </div>


            <div id='about-team-section'>
                <h2 id='team-h2'>Meet the team!</h2>

                <div id='team-container'>
                    <Fade cascade direction='left' duration='900' triggerOnce='true'>
                        <div className='team-member'>
                            <img className='team-member-img' src={courtneyImage} alt='Courtney Walters' />

                            <div className='member-bio'>
                                <h3 className='bio-name'>Courtney Walters</h3>

                                <h4 className='bio-role'>Founder & Operations Consultant</h4>

                                <p className='bio-txt'>
                                    Twee austin scenester polaroid keffiyeh VHS shabby chic cronut wolf. Solarpunk gochujang 
                                    try-hard quinoa normcore typewriter vexillologist. Yuccie blog master cleanse, semiotics 
                                    narwhal irony kitsch offal quinoa marxism helvetica. Small batch paleo kinfolk tofu fam 
                                    jean shorts Brooklyn PBR&B helvetica. VHS ennui banh mi actually taxidermy leggings stumptown 
                                    vape sus, bodega boys distillery bitters farm-to-table yr.
                                </p>
                            </div>
                        </div>

                        <div className='team-member'>
                            <img className='team-member-img' src={courtneyImage} alt='Courtney Walters' />

                            <div className='member-bio'>
                                <h3 className='bio-name'>Courtney Walters</h3>

                                <h4 className='bio-role'>Founder & Operations Consultant</h4>

                                <p className='bio-txt'>
                                    Twee austin scenester polaroid keffiyeh VHS shabby chic cronut wolf. Solarpunk gochujang 
                                    try-hard quinoa normcore typewriter vexillologist. Yuccie blog master cleanse, semiotics 
                                    narwhal irony kitsch offal quinoa marxism helvetica. Small batch paleo kinfolk tofu fam 
                                    jean shorts Brooklyn PBR&B helvetica. VHS ennui banh mi actually taxidermy leggings stumptown 
                                    vape sus, bodega boys distillery bitters farm-to-table yr.
                                </p>
                            </div>
                        </div>

                        <div className='team-member'>
                            <img className='team-member-img' src={courtneyImage} alt='Courtney Walters' />

                            <div className='member-bio'>
                                <h3 className='bio-name'>Courtney Walters</h3>

                                <h4 className='bio-role'>Founder & Operations Consultant</h4>
                                
                                <p className='bio-txt'>
                                    Twee austin scenester polaroid keffiyeh VHS shabby chic cronut wolf. Solarpunk gochujang 
                                    try-hard quinoa normcore typewriter vexillologist. Yuccie blog master cleanse, semiotics 
                                    narwhal irony kitsch offal quinoa marxism helvetica. Small batch paleo kinfolk tofu fam 
                                    jean shorts Brooklyn PBR&B helvetica. VHS ennui banh mi actually taxidermy leggings stumptown 
                                    vape sus, bodega boys distillery bitters farm-to-table yr.
                                </p>
                            </div>
                        </div>
                    </Fade>
                </div>
                
                <div id='team-txt-container'>
                    <p className='added-txt'>
                        Our Tag Ops team is a dynamic group of experts dedicated to operational excellence. With diverse industry backgrounds, 
                        we bring a wealth of knowledge to every project. We're committed to tailoring solutions to your specific needs, 
                        from process optimization to strategic guidance.
                    </p>
                </div>

                <Link className='lets-talk-link' to='/contact'>Let's talk!</Link>
            </div>
        </section>
    )
}