import { Link } from 'react-router-dom';
import { AttentionSeeker, Fade } from 'react-awesome-reveal';
import FlowCarousel from '../../components/FlowCarousel/FlowCarousel';
import widePurpleLogo from '../../assets/images/logos/tag-lg-logo-purple.png';
import dashboardImg from '../../assets/images/landing-page/dashboard.png';
import teamworkLogo from '../../assets/images/landing-page/teamwork-logo.png';
import './LandingPage.css';

export default function LandingPage({ shouldAnimate }) {
  const flowSection = (
    <div id="landing-flow-section">
      <h2 id="flow-h2">The Tag Ops Flow:</h2>

      <div className="added-txt-container">
        <p className="added-txt">
          Our Tag Ops Flow is your key to achieving streamlined success. It's a
          carefully crafted process that ensures we fully understand your unique
          needs and deliver precisely the support your business requires. From
          start to finish, we maintain clear communication, set expectations,
          and provide accountability, so you can focus on what you do best –
          growing your business.
        </p>
      </div>

      <FlowCarousel />

      <div id="dashboard-container">
        <h2 id="flow-h2">Analytics Empowerment</h2>
        <div id="dashboard-container-bottom">
          <div id="dashboard-container-right">
            <img id="dashboard-img" src={dashboardImg} alt="User dashboard" />
            <div id="dashboard-credit">
              <p className="added-txt">Powered by:</p>
              <a
                href="https://www.teamwork.com/"
                target="_blank"
                rel="noreferrer"
                className="partner-logo-link"
              >
                <img
                  id="teamwork-logo"
                  className="partner-logo"
                  src={teamworkLogo}
                  alt="Synergeic Group Logo"
                />
              </a>
            </div>
          </div>
          <div id="dashboard-txt" className="added-txt-container">
            <p className="added-txt">
              Utilizing our project management software, we empower your
              business with analytics, not only on tasks and project budget but
              also a breakdown on how much time is spent on any specific task
              within any division (Finance, HR, Ops) every quarter.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section id="landing-page">
      <div id="landing-page-intro">
        <h1 className="secret">Tag Operations</h1>

        <div id="intro-txt-section">
          <h2 id="intro-h2">
            Simplify, Optimize, Scale
            <br /> with Tag Operations!
          </h2>

          <div id="txt-container">
            <span id="intro-txt">
              Your tech forward, embedded, and flexible back office team!
            </span>
            <br />
          </div>
        </div>

        <img id="intro-logo" src={widePurpleLogo} alt="Tag Operations" />
      </div>

      <div id="landing-solutions-section">
        <div id="bob-section">
          <div className="blue-blob blob-6"></div>
          <div className="blue-blob blob-5"></div>
          <div className="blue-blob blob-4"></div>
          <div className="blue-blob blob-3"></div>
          <div className="purple-blob blob-2"></div>
          <div className="purple-blob blob-1"></div>
        </div>
        <AttentionSeeker effect="pulse">
          <h2 id="landing-solutions-h2">Our Solutions</h2>
        </AttentionSeeker>

        <div id="solutions-container">
          <Link className="solution-link" to="/human-resources">
            <div id="hr-solution" className="solution">
              <h3 className="solution-txt">Human Resources</h3>
            </div>
          </Link>

          <Link className="solution-link" to="/operations">
            <div id="operations-solution" className="solution">
              <h3 className="solution-txt">Operations</h3>
            </div>
          </Link>

          <Link className="solution-link" to="/finance">
            <div id="finance-solution" className="solution">
              <h3 className="solution-txt">Finance</h3>
            </div>
          </Link>
        </div>

        <p className="solutions-bottom-txt">
          Staffing your back office with a{' '}
          <span className="solutions-bottom-accent-txt">full-time</span>{' '}
          Finance, HR, and Operations leader can cost you over{' '}
          <span className="solutions-bottom-accent-txt">$7,000</span> per month
          per role, totaling{' '}
          <span className="solutions-bottom-accent-txt">$63,000</span> per
          quarter.
        </p>

        <p className="solutions-bottom-txt">
          We work with you to gain insights into your back office workload and{' '}
          tailor your back office people costs to{' '}
          <span className="solutions-bottom-accent-txt">fit your needs</span> as
          a business,{' '}
          <span className="solutions-bottom-accent-txt">saving</span> you as
          much as we can.
        </p>
      </div>

      <div id="blue-bar"></div>

      {shouldAnimate ? <Fade>{flowSection}</Fade> : flowSection}

      <div id="landing-testimonials-section">
        <h2 id="testimonials-h2">See what our clients are saying...</h2>

        <div id="testimonials-container">
          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="material-symbols-outlined testimonial-icon">
                sentiment_satisfied
              </span>

              <div>
                <p className="testimonial-name">Riece Keck</p>
                <p className="testimonial-role">
                  Founder & CEO, Vault Recruiting
                </p>
              </div>
            </div>

            <p className="testimonial-txt">
              "Courtney, in short, has transformed the back-end operations of
              our business. She started with bare bones and made an immediate,
              dramatic impact. She documented processes that improved candidate
              and internal employee experience, created more reports than I can
              count that gave excellent insight into our sales function, and
              fully owned and improved our routine operational processes."
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="material-symbols-outlined testimonial-icon">
                sentiment_very_satisfied
              </span>

              <div>
                <p className="testimonial-name">Jolie Curran</p>
                <p className="testimonial-role">Head of Operations, Ejento</p>
              </div>
            </div>

            <p className="testimonial-txt">
              "It is rare to find a talent like Courtney. She is intelligent,
              proactive, and professional. She tackles projects through
              thoughtful planning and then executes projects flawlessly. If she
              doesn't know how to do something, she dives into research and
              figures out a strategy."
            </p>
          </div>

          <div className="testimonial-card">
            <div className="testimonial-top">
              <span className="material-symbols-outlined testimonial-icon">
                mood
              </span>

              <div>
                <p className="testimonial-name">David Milner</p>
                <p className="testimonial-role">Head of IT, Celsius Network</p>
              </div>
            </div>

            <p className="testimonial-txt">
              "Working with Courtney was an absolute pleasure. She helped the IT
              team greatly in our interactions and took responsibility even for
              items that were not in her field of responsibility and brought
              them to the next level. We always felt she was a part of the team
              and her organisational skills are some of the best I have seen.
              Anyone would be happy to have her work in their company."
            </p>
          </div>
        </div>
      </div>

      <div id="landing-bottom" className="added-txt-container">
        <p id="landing-added-txt" className="added-txt">
          We simplify business operations, offering tailored solutions that
          scale with your needs. From optimizing processes to strategic
          guidance, Tag Ops empowers businesses of all sizes to thrive while we
          handle the operational heavy lifting. Discover a smarter way to run
          your company with Tag Ops.
        </p>

        <Link id="talk-link-landing" className="lets-talk-link" to="/contact">
          Let's talk!
        </Link>
      </div>
    </section>
  );
}
