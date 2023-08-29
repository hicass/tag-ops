import './ContactPage.css';


export default function ContactPage() {
    return (
        <section id='contact-page'>
            <div id='contact-page-l'>
                <h1 id='contact-h1'>Contact</h1>

                <p className='added-txt' id='contact-page-txt'>
                    If you've made it this far, it means our mission to support your business
                    has struck a chord with you. Whether your business is large or small, we're here to assist you in achieving your 
                    operational goals. Let's start a conversation and build a relationship to understand how we can best serve you.
                </p>
            </div>

            <form action='hicass.dev@gmail.com' id='contact-form'>
                <div id='contact-form-top'>
                    <fieldset id='form-top-l'>
                        <label className='form-label'>
                            Name
                            <input className='form-input' type='text' required></input>
                        </label>
                        <label className='form-label'>
                            Email
                            <input className='form-input' type='email' required></input>
                        </label>
                        <label className='form-label'>
                            Company Name
                            <input className='form-input' type='text' required></input>
                        </label>
                    </fieldset>

                    <fieldset id='form-top-r'>
                        <p className='form-label'>Service</p>
                        <label className='form-label' id='service-select'>
                            Human Resources
                            <input className='form-checkbox' value='Human Resources' type='checkbox' />
                        </label>
                        <label className='form-label' id='service-select'>
                            Operations
                            <input className='form-checkbox' value='Operations' type='checkbox' />
                        </label>
                        <label className='form-label' id='service-select'>
                            Accounting/ Bookkeeping
                            <input className='form-checkbox' value='Accounting/ Bookkeeping' type='checkbox' />
                        </label>
                    </fieldset>
                </div>

                <label className='form-label'>
                    Message
                    <textarea className='form-input' id='form-textarea'></textarea>
                </label>
                
                <input id='form-submit' type='submit' />
            </form>
        </section>
    )
}