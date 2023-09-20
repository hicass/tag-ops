import { useRef, useEffect, useState } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import validator from 'validator';
import './ContactPage.css';


export default function ContactPage() {
    const form = useRef()
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [emailMessage, setEmailMessage] = useState('');
    const [formValues, setFormValues] = useState({
      name: '',
      email: '',
      company: '',
      message: '',
      service: ''
    });

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    });

    const sendEmail = (e) => {
        e.preventDefault()
    
        emailjs.sendForm('contact_service', 'contact_form', form.current, process.env.REACT_APP_EMAIL_KEY)
          .then((result) => {
            console.log(result);
            if (result.status === 200) {
              handleSubmit();
            }
    
          }, (error) => {
              console.log(error.text)
          });
    }

    const handleSubmit = () => {
        setFormSubmitted(true)
        setFormValues({
            name: '',
            email: '',
            company: '',
            message: '',
            service: ''
        });
        setEmailMessage('');
        setTimeout(() => setFormSubmitted(false), 7000);
      }

    const validateEmail = (e) => {
        const email = e.target.value

        if (validator.isEmail(email)) {
            setEmailMessage('');
        } else {
            setEmailMessage('Please enter a valid email...');
        }
    }

    const handleEmail = (e) => {
        setFormValues({ ...formValues, email: e.target.value });
        validateEmail(e);
    }


    return (
        <section id='contact-page'>
            <div id='contact-page-l'>

                <div id='contact-page-l-top'>
                    <AttentionSeeker effect='pulse' triggerOnce='true'>
                        <h1 id='contact-h1'>Contact</h1>
                    </AttentionSeeker>

                    <p className='added-txt' id='contact-page-txt'>
                        Fill out this form to start the conversation on how we can best support 
                        your business. Whether your business is large or small, we're here to assist 
                        you in achieving your operational goals. 
                    </p>
                </div>

                <div id='contact-page-l-bot'>
                    <a 
                        href='https://www.linkedin.com/company/tag-operations/' 
                        target='_blank' 
                        rel='noreferrer'
                    >
                        <i id='linkedin-link' class='fa fa-linkedin-square' aria-hidden='true'></i>
                        <p className='secret'>Tag Operations LinkedIn</p>
                    </a>
                    <p id='contact-page-email'>tag@tagoperations.com</p>
                </div>
            </div>


            <div id='contact-page-r'>
                <div id='confirmation-msg'>
                {formSubmitted && 
                    <p>Thank you for reaching out, we will be in touch!
                        <span className='place-holder'>p</span>
                    </p>
                }
                </div>

                <form id='contact-form' ref={form} onSubmit={sendEmail} noValidate>
                    <div id='contact-form-top'>
                        <fieldset id='form-top-l'>
                            <label className='form-label'>
                                Name
                                <input 
                                    className='form-input' 
                                    type='text' 
                                    name='from_name'
                                    value={formValues.name}
                                    onChange={(e) =>
                                        setFormValues({ ...formValues, name: e.target.value })
                                    }
                                    required 
                                />
                            </label>

                            <label className='form-label'>
                                Email
                                <input 
                                    className='form-input' 
                                    type='email' 
                                    name='from_email' 
                                    value={formValues.email}
                                    onChange={(e) => handleEmail(e)}
                                    required 
                                />
                                <p id='email-message'>
                                    {emailMessage}
                                    <span className='place-holder'>p</span>
                                </p>
                            </label>

                            <label className='form-label'>
                                Company Name
                                <input 
                                    className='form-input' 
                                    type='text' 
                                    name='from_company'
                                    value={formValues.company}
                                    onChange={(e) =>
                                        setFormValues({ ...formValues, company: e.target.value })
                                    }
                                    required 
                                />
                            </label>
                        </fieldset>

                        <fieldset id='form-top-r'>
                            <p className='form-label'>Service</p>

                            <label className='form-label' id='service-select'>
                                Human Resources
                                <input 
                                    className='form-checkbox' 
                                    name='selected_service'
                                    value=' Human Resources' 
                                    type='checkbox' 
                                />
                            </label>

                            <label className='form-label' id='service-select'>
                                Operations
                                <input 
                                    className='form-checkbox' 
                                    name='selected_service'
                                    value=' Operations' 
                                    type='checkbox' 
                                />
                            </label>

                            <label className='form-label' id='service-select'>
                                Finance
                                <input 
                                    className='form-checkbox' 
                                    name='selected_service'
                                    value=' Finance' 
                                    type='checkbox' 
                                />
                            </label>
                        </fieldset>
                    </div>

                    <label className='form-label'>
                        Message
                        <textarea 
                            className='form-input' 
                            name='message'
                            id='form-textarea' 
                            value={formValues.message}
                            onChange={(e) =>
                                setFormValues({ ...formValues, message: e.target.value })
                            }
                        />
                    </label>
                    
                    <input id='form-submit' type='submit' />
                </form>
            </div>
        </section>
    )
}