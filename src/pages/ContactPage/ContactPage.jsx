import { useRef, useEffect, useState } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import './ContactPage.css';

export default function ContactPage() {
  const form = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  const [emailMessage, setEmailMessage] = useState('');
  const [isHRChecked, setIsHRChecked] = useState(false);
  const [isOpsChecked, setIsOpsChecked] = useState(false);
  const [isFinChecked, setIsFinChecked] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: '',
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });

  const sendEmail = (e) => {
    e.preventDefault();

    try {
      emailjs
        .sendForm(
          'contact_service',
          'contact_form',
          form.current,
          process.env.REACT_APP_EMAIL_KEY
        )
        .then(
          (result) => {
            if (result.status === 200) {
              handleSubmit();
            }
          },
          (error) => {
            console.log(error.text);
          }
        );
    } catch {
      handleError();
    }
  };

  const handleSubmit = () => {
    setEmailMessage('');
    setFormSubmitted(true);
    setConfirmationMessage('Thank you for reaching out, we will be in touch!');
    setIsHRChecked(false);
    setIsOpsChecked(false);
    setIsFinChecked(false);
    setFormValues({
      name: '',
      email: '',
      company: '',
      message: '',
      service: '',
    });

    setTimeout(() => setFormSubmitted(false), 7000);
  };

  const handleError = () => {
    setEmailMessage('');
    setFormSubmitted(true);
    setConfirmationMessage(
      "Oops! Something isn't working, email us directly instead."
    );
    setIsHRChecked(false);
    setIsOpsChecked(false);
    setIsFinChecked(false);
    setFormValues({
      name: '',
      email: '',
      company: '',
      message: '',
      service: '',
    });

    setTimeout(() => setFormSubmitted(false), 7000);
  };

  const validateEmail = (e) => {
    const email = e.target.value;

    if (validator.isEmail(email)) {
      setEmailMessage('');
    } else {
      setEmailMessage('Please enter a valid email...');
    }
  };

  const handleEmail = (e) => {
    setFormValues({ ...formValues, email: e.target.value });
    validateEmail(e);
  };

  const handleCheck = (service) => {
    switch (service) {
      case 'HR':
        setIsHRChecked(!isHRChecked);
        break;
      case 'Ops':
        setIsOpsChecked(!isOpsChecked);
        break;
      case 'Fin':
        setIsFinChecked(!isFinChecked);
        break;
      default:
        console.log('Invalid option!');
    }
  };

  return (
    <section id="contact-page">
      <div id="contact-page-l">
        <div id="contact-page-l-top">
          <AttentionSeeker effect="pulse" triggerOnce="true">
            <h1 id="contact-h1">Contact</h1>
          </AttentionSeeker>

          <p className="added-txt" id="contact-page-txt">
            Fill out this form to start the conversation on how we can best
            support your business. Whether your business is large or small,
            we're here to assist you in achieving your operational goals.
          </p>
        </div>

        <div id="contact-page-l-bot">
          <a
            href="https://www.linkedin.com/company/tag-operations/"
            target="_blank"
            rel="noreferrer"
          >
            <i
              id="linkedin-link"
              className="fa fa-linkedin-square"
              aria-hidden="true"
            ></i>
            <p className="secret">Tag Operations LinkedIn</p>
          </a>
          <p id="contact-page-email">tag@tagoperations.com</p>
        </div>
      </div>

      <div id="contact-page-r">
        <div id="confirmation-msg">
          <span className="place-holder">p</span>

          {formSubmitted && <p>{confirmationMessage}</p>}
        </div>

        <form id="contact-form" ref={form} onSubmit={sendEmail} noValidate>
          <div id="contact-form-top">
            <fieldset id="form-top-l">
              <label className="form-label">
                Name
                <input
                  className="form-input"
                  type="text"
                  name="from_name"
                  value={formValues.name}
                  onChange={(e) =>
                    setFormValues({ ...formValues, name: e.target.value })
                  }
                  required
                />
              </label>

              <label className="form-label">
                Email
                <input
                  className="form-input"
                  type="email"
                  name="from_email"
                  value={formValues.email}
                  onChange={(e) => handleEmail(e)}
                  required
                />
                <p id="email-message">
                  {emailMessage}
                  <span className="place-holder">p</span>
                </p>
              </label>

              <label className="form-label">
                Company Name
                <input
                  className="form-input"
                  type="text"
                  name="from_company"
                  value={formValues.company}
                  onChange={(e) =>
                    setFormValues({ ...formValues, company: e.target.value })
                  }
                  required
                />
              </label>
            </fieldset>

            <fieldset id="form-top-r">
              <p className="form-label">Service</p>

              <label className="service-option form-label" id="service-select">
                Human Resources
                <input
                  className="form-checkbox"
                  name="selected_service"
                  value=" Human Resources"
                  type="checkbox"
                  checked={isHRChecked}
                  onChange={() => handleCheck('HR')}
                />
                <div className="checkmark"></div>
              </label>

              <label className="service-option  form-label" id="service-select">
                Operations
                <input
                  className="form-checkbox"
                  name="selected_service"
                  value=" Operations"
                  type="checkbox"
                  checked={isOpsChecked}
                  onChange={() => handleCheck('Ops')}
                />
                <div className="checkmark"></div>
              </label>

              <label className="service-option  form-label" id="service-select">
                Finance
                <input
                  className="form-checkbox"
                  name="selected_service"
                  value=" Finance"
                  type="checkbox"
                  checked={isFinChecked}
                  onChange={() => handleCheck('Fin')}
                />
                <div className="checkmark"></div>
              </label>
            </fieldset>
          </div>

          <label className="form-label">
            Message
            <textarea
              className="form-input"
              name="message"
              id="form-textarea"
              value={formValues.message}
              onChange={(e) =>
                setFormValues({ ...formValues, message: e.target.value })
              }
            />
          </label>

          <input id="form-submit" type="submit" />
        </form>
      </div>
    </section>
  );
}
