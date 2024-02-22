import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'

export default function Contact() {
    const [email, setEmail] = useState('');
    const [userName, setUserName] = useState('');
    const [message, setMessage] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    
    const handleInputChange = (e) => {
        const { target } = e;
        const inputType = target.name;
        const inputValue = target.value;
    
        if (inputType === 'email') {
            setEmail(inputValue);
        } else if (inputType === 'userName') {
            setUserName(inputValue);
        } else {
            setMessage(inputValue);
        }
    };
    
    const validateEvent = (event) => {
        event.preventDefault();

        if (!validateEmail(email)) {
            setErrorMsg('Email Invalid!')
            return;
        }

        if (!message.trim()) {
            setErrorMsg('Message Required!');
            return
        }
        setUserName('');
        setMessage('');
        setEmail('');
        setErrorMsg('');
    }
    return (
        <section className='contactMe'>
            <div className='contactInfo'>
                <div className=''>
                    <h3>Welcome, {userName}</h3>
                    <p>Need to get in touch?</p>
                    <address>
                        Topeka, KS <br />
                        Email:<a href='mailto://krohnayden@gmail.com'>krohnayden@gmail.com</a><br />
                        Phone Number:<a href='tel:785-955-7333'>785-955-7333</a>
                    </address>
                    <h3>Contact Me</h3>
                </div>
            </div>

            <div className='contactFormDiv'>
                <form className='contactForm'>
                    <div className='form'>
                        {/* <label htmlFor='contactName'>Your Name</label> */}
                        <input
                            value={userName}
                            name='userName'
                            onChange={handleInputChange}
                            type='text'
                            className='contactInput'
                            placeholder='Your Name'
                        />
                    </div>
                    <div className='form'>
                        {/* <label htmlFor='contactEmail'>Your Email</label> */}
                        <input
                            value={email}
                            name='email'
                            onChange={handleInputChange}
                            type='email'
                            className='contactInput'
                            placeholder='Your Email'
                        />
                    </div>
                    <div className='form'>
                        {/* <label htmlFor='contactMessage'>Your Message</label> */}
                        <textarea
                            value={message}
                            name='message'
                            onChange={handleInputChange}
                            type='message'
                            className='contactInput'
                            placeholder='Your Message'
                        />
                    </div>
                </form>
                <button type='button' onClick={validateEvent} className='formSubmit'> Submit </button>
            </div>
            {errorMsg && (
                <div>
                    <p className='errorText'>{errorMsg}</p>
                </div>
            )}
        </section>
    )
}