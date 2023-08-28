import sfImage from '../../assets/images/about-page/about-sf.jpg';
import courtneyImage from '../../assets/images/about-page/courtney-profile.jpeg'
import './AboutPage.css'


export default function AboutPage() {
    return (
        <section>
            <div id='about-top'>
                <div id='about-intro'>
                    <div id='intro-right'>
                        <div id='intro-h1-container'>
                            <h1 id='about-h1'>About Us!</h1>
                        </div>
                        <div id='about-intro-txt'>
                            <p>
                                Master cleanse keffiyeh tote bag blog. Taxidermy forage everyday carry, gatekeep 
                                cold-pressed affogato literally kombucha XOXO gentrify pour-over same neutral milk 
                                hotel man bun brunch. Neutra wolf food truck, viral next level shoreditch pop-up small 
                                batch synth. ote bag twee pabst, pitchfork XOXO woke cornhole direct trade yr kickstarter 
                                distillery waistcoat messenger bag marxism stumptown. 
                            </p>
                        </div>
                    </div>
                    <img id='sf-image' src={sfImage} alt='Golden Gate Bridge' />
                </div>
            </div>

            <div id='about-mission-section'>
                <div id='blob-container'>
                    <div id='about-mission-text'>
                        <h2 id='mission-h2'>Our Mission</h2>
                        <p id='mission-p'>
                            Fingerstache fit vice glossier tilde typewriter. Semiotics kogi fanny pack selfies 
                            salvia gentrify leggings gorpcore, yuccie next level celiac irony. Artisan street 
                            art beard, food truck cupping chia gentrify literally yr. Selvage woke vinyl portland 
                            gentrify food truck. Bicycle rights beard semiotics blue bottle wayfarers XOXO.
                        </p>
                    </div>
                    <div className='mission-blue-blob mission-blob-1'></div>
                    <div className='mission-blue-blob mission-blob-2'></div>
                </div>
            </div>

            <div id='about-team-section'>
                <h2 id='team-h2'>Meet the team!</h2>

                <div id='team-container'>
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
                </div>
            </div>
        </section>
    )
}