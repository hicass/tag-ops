import { useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import './ServiceContent.css';

export default function ServicePage({
  serviceName,
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
      <Fade>
        <div id="service-content-title-container">
          <h1 id="service-content-title">{serviceName}</h1>
        </div>

        <p id="service-phrase">{phrase}</p>

        <div id="service-content-quote-div">
          <p>{serviceQuote}</p>
          <div>
            <p>
              - {quoteSource}
              <a href={sourceLink} target="_blank" rel="noreferrer">
                {sourceLinkText}
              </a>
            </p>
          </div>
        </div>
      </Fade>

      <div>
        <Fade>
          <div className="service-div">
            <div className="service-img">
              <img src={service1Img} alt={service1Title} />
            </div>

            <div className="service-item">
              <p className="bio-name">{service1Title}</p>
              <p className="bio-role">{service1Txt}</p>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="service-div">
            <div className="service-item">
              <p className="bio-name">{service2Title}</p>
              <p className="bio-role">{service2Txt}</p>
            </div>

            <div className="service-img">
              <img src={service2Img} alt={service2Title} />
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="service-div">
            <div className="service-img">
              <img src={service3Img} alt={service3Title} />
            </div>

            <div className="service-item">
              <p className="bio-name">{service3Title}</p>
              <p className="bio-role">{service3Txt}</p>
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="service-div">
            <div className="service-item">
              <p className="bio-name">{service4Title}</p>
              <p className="bio-role">{service4Txt}</p>
            </div>

            <div className="service-img">
              <img src={service4Img} alt={service4Title} />
            </div>
          </div>
        </Fade>

        <Fade>
          <div className="service-div">
            <div className="service-img">
              <img src={service5Img} alt={service5Title} />
            </div>

            <div className="service-item">
              <p className="bio-name">{service5Title}</p>
              <p className="bio-role">{service5Txt}</p>
            </div>
          </div>
        </Fade>
      </div>
    </section>
  );
}
