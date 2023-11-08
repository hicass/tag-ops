import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import { Slide } from 'react-awesome-reveal';
import sfImage from '../../assets/images/about-page/about-sf.jpg';
import courtneyImage from '../../assets/images/about-page/courtney-profile.jpeg';
import danielImage from '../../assets/images/about-page/daniel-soyinka.png';
import alloLogo from '../../assets/images/about-page/allo-hire.png';
import synLogo from '../../assets/images/about-page/synergic-group.png';
import './AboutPage.css';

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0 });
  });

  return (
    <section id="about-page">
      <div id="about-top">
        <div id="about-intro">
          <Slide direction="left" triggerOnce="true">
            <img id="sf-image" src={sfImage} alt="Golden Gate Bridge" />
          </Slide>

          <Slide direction="right" triggerOnce="true">
            <div id="intro-right">
              <div id="intro-h1-container">
                <h1 id="about-h1">About Us!</h1>
              </div>

              <div id="about-intro-txt">
                <p>
                  We are Tag Operations! Your partner in operational excellence.
                  We believe that every business, regardless of size, deserves
                  tailored support to thrive. Born from this belief, Tag Ops
                  offers innovative and flexible back-office solutions,
                  empowering you to streamline operations, optimize resources,
                  and achieve lasting success.
                </p>
              </div>
            </div>
          </Slide>
        </div>
      </div>

      <Fade>
        <div id="about-story-section">
          <h2 id="story-h2">Our Story</h2>

          <p className="added-txt">
            Tag Ops was founded on the fundamental belief that every company,
            regardless of its size, requires operational support. We understand
            that not every business necessitates a full-time Operations leader
            to oversee extensive back-office projects or manage repetitive tasks
            such as payroll and invoicing.
          </p>

          <p className="added-txt">
            Our approach at Tag Ops is different. We provide a customizable
            model designed to meet you where you are in your business journey
            while offering the flexibility to scale as needed. We take the time
            to understand your unique requirements, conducting in-depth research
            to identify the most cost-effective tools, processes, and policies.
            Our goal is to dig deep with our clients, assisting in the
            establishment of a robust infrastructure that ensures your company
            runs smoothly without exhausting your resources.
          </p>
        </div>
      </Fade>

      <div id="about-mission-section">
        <div id="blob-container">
          <div id="about-mission-text">
            <h2 id="mission-h2">Our Mission</h2>

            <p id="mission-p">
              To revolutionize the back office with standardized and dependable
              systems, processes, and people; and to empower leadership with key
              insights into their back office costs.
            </p>
          </div>

          <div className="mission-blue-blob mission-blob-1"></div>
          <div className="mission-blue-blob mission-blob-2"></div>
        </div>
      </div>

      <div id="about-team-section">
        <h2 id="team-h2">Meet the team!</h2>

        <div id="team-txt-container">
          <p className="added-txt">
            Our Tag Ops team is a dynamic group of experts dedicated to
            operational excellence. With diverse industry backgrounds, we bring
            a wealth of knowledge to every project. We're committed to tailoring
            solutions to your specific needs, from process optimization to
            strategic guidance.
          </p>
        </div>

        <div id="team-container">
          <Fade cascade direction="left" duration="900" triggerOnce="true">
            <div className="team-member">
              <img
                className="team-member-img"
                src={courtneyImage}
                alt="Courtney Walters"
              />

              <div className="member-bio">
                <h3 className="bio-name">Courtney Walters</h3>

                <h4 className="bio-role">Founder & Operations Consultant</h4>

                <p className="bio-txt">
                  I founded Tag Ops after 8 years of working in Operations in
                  the San Francisco startup sphere. From Accounting & HR SaaS
                  companies, to FinTech and Cryptocurrency, to Recruiting.
                  Regardless of the industry, I'm incredibly adaptable, enjoy
                  learning, and love problem solving. I have a fiery passion for
                  helping small companies strategize and stay organized amongst
                  the chaos of scaling. In my spare time, I enjoy hiking around
                  the Bay Area, playing dnd and strategy-based RPGs, and
                  spending time with my family, friends, and partner.
                </p>
              </div>
            </div>

            <div className="team-member">
              <img
                className="team-member-img"
                src={danielImage}
                alt="Courtney Walters"
              />

              <div className="member-bio">
                <h3 className="bio-name">Daniel Soyinka</h3>

                <h4 className="bio-role">Bookkeeping Consultant</h4>

                <p className="bio-txt">
                  With a degree in Accounting, I have gained experience across
                  various roles in different companies, from internee to CEO. I
                  have been helping numerous small and medium-size businesses
                  grow by serving as a remote Bookkeeper. I possess
                  comprehensive expertise in all aspects of Accounting and
                  Bookkeeping.
                </p>
              </div>
            </div>
          </Fade>
        </div>

        <h2 id="team-h2">Partnering with:</h2>

        <div id="partner-logo-container">
          <div>
            <a
              href="https://www.allohire.com/"
              target="_blank"
              rel="noreferrer"
              className="partner-logo-link"
            >
              <img
                className="partner-logo"
                src={alloLogo}
                alt="AlloHire Logo"
              />
            <h3 className="partner-name">AlloHire</h3>
            </a>
          </div>

          <div>
            <a
              href="https://www.synergic-corp.com/"
              target="_blank"
              rel="noreferrer"
              className="partner-logo-link"
            >
              <img
                className="partner-logo"
                src={synLogo}
                alt="Synergeic Group Logo"
              />
            <h3 className="partner-name">Synergic Group</h3>
            </a>
          </div>
        </div>

        <p id="partner-txt" className="added-txt">
          We pride ourselves on being versatile, the go-to team for all things,
          while our partners excel as the masters we turn to for support, a
          helping hand, or specialized expertise. We work with them to make the
          most informed decisions and next steps to get your back office
          established, organized, and scalable.
        </p>

        <Link className="lets-talk-link" to="/contact">
          Let's talk!
        </Link>
      </div>
    </section>
  );
}
