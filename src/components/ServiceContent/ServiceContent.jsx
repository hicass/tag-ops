import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-awesome-reveal';
import './ServiceContent.css';

export default function ServicePage({
  serviceName,
  serviceImg,
  serviceIntroTxt,
  serviceQuote,
  quoteSource,
  sourceLinkText,
  sourceLink,
  phrase,
  service1Title,
  service1Img,
  service1Txt,
  service2Title,
  service2Img,
  service2Txt,
  service3Title,
  service3Txt,
  service3Img,
  service4Title,
  service4Img,
  service4Txt,
  service5Title,
  service5Img,
  service5Txt,
}) {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  return (
    <section id="service-content">
      <div id="service-content-title-container">
        <h1 id="service-content-title">{serviceName}</h1>
      </div>

      <div id="service-top-intro">
        <Slide direction="left" triggerOnce="true">
          <img id="service-top-img" src={serviceImg} alt="Service" />
        </Slide>
        <Slide direction="right" triggerOnce="true">
          <p className="service-intro-txt">{serviceIntroTxt}</p>
        </Slide>
      </div>

      <div id="service-content-quote-div">
        <p id="service-content-quote">
          <span className="material-symbols-outlined" id="quote-bulb">
            lightbulb
          </span>
          {serviceQuote}
        </p>
        <div id="service-content-quote-source">
          <p>
            - {quoteSource}
            <a
              id="service-quote-link"
              href={sourceLink}
              target="_blank"
              rel="noreferrer"
            >
              {sourceLinkText}
            </a>
          </p>
        </div>
        <p className="service-phrase">{phrase}</p>
      </div>

      <h2 id="story-h2">How we can help:</h2>

      <div id="services-container">
        <div className="service-div">
          <div className="service-img">
            <img src={service1Img} alt={service1Title} />
          </div>

          <div className="service-item">
            <p className="bio-name service-title">{service1Title}</p>
            <div className="service-item-txt">
              <p>{service1Txt}</p>
            </div>
          </div>
        </div>

        <div className="service-div reverse">
          <div className="service-img">
            <img src={service2Img} alt={service2Title} />
          </div>

          <div className="service-item">
            <p className="bio-name service-title">{service2Title}</p>
            <div className="service-item-txt">
              <p>{service2Txt}</p>
            </div>
          </div>
        </div>

        <div className="service-div">
          <div className="service-img">
            <img src={service3Img} alt={service3Title} />
          </div>

          <div className="service-item">
            <p className="bio-name service-title">{service3Title}</p>
            <div className="service-item-txt">
              <p>{service3Txt}</p>
            </div>
          </div>
        </div>

        <div className="service-div reverse">
          <div className="service-img">
            <img src={service4Img} alt={service4Title} />
          </div>

          <div className="service-item">
            <p className="bio-name service-title">{service4Title}</p>
            <div className="service-item-txt">
              <p>{service4Txt}</p>
            </div>
          </div>
        </div>

        <div className="service-div">
          <div className="service-img">
            <img src={service5Img} alt={service5Title} />
          </div>

          <div className="service-item">
            <p className="bio-name service-title">{service5Title}</p>
            <div className="service-item-txt">
              <p>{service5Txt}</p>
            </div>
          </div>
        </div>
      </div>

      <p id="service-txt-bot" className="service-phrase added-txt">
        For more information and pricing details, get in touch with us to craft
        the ideal solution for your business.
      </p>

      <Link id="talk-link-landing" className="lets-talk-link" to="/contact">
        Let's talk!
      </Link>
    </section>
  );
}
