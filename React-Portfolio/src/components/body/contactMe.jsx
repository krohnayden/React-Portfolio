import React, { useState } from 'react';

// import { validateEmail } from '../../utils/helpers';

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
            setErrorMsg(inputValue);
        }
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();

        // if (!validateEmail(email) || !userName) {
        //     setErrorMsg('Name or Email is invalid.');
        //     return;
        // }
        if (!setMessage(message)) {
            setErrorMsg('Message Required!');
            return;
        }

        setUserName('');
        setMessage('');
        setEmail('');
    };

    return (
        <section className='contactMe'>
            <div className='flex-row'>
                <h2 className='contactTitle'> Contact Me!</h2>
            </div>

            <div className='contactInfo'>
                <div>
                    <h3>Welcome, {userName}</h3>
                    <p>Need to contact me?</p>
                    <address>
                        Topeka, KS <br/>
                        Email:<a href='mailto://krohnayden@gmail.com'>krohnayden@gmail.com</a><br />
                        Phone Number:<a href='tel:785-955-7333'>785-955-7333</a>
                    </address>
                </div>
            </div>

            <div className='contactForm'>
                <h3>Contact Me</h3>
                <form className='form'>
                    <label htmlFor='contactName'>Your Name</label>
                    <input 
                    value={userName}
                    name='userName'
                    onChange={handleInputChange}
                    type='text'
                    id='contactName'
                    placeholder='Your Name'
                    />
                </form>
                <form className='form'>
                    <label htmlFor='contactEmail'>Your Email</label>
                    <input 
                    value={email}
                    name='email'
                    onChange={handleInputChange}
                    type='email'
                    id='contactEmail'
                    placeholder='Your Email'
                    />
                </form>
                <form className='form'>
                    <label htmlFor='contactMessage'>Your Message</label>
                    <textarea
                    value={message}
                    name='message'
                    onChange={handleInputChange}
                    type='message'
                    id='contactMessage'
                    placeholder='Your Message'
                    />
                    <button type='button' onClick={handleFormSubmit}> Submit </button>
                </form>
            </div>
            {errorMsg && (
                <div>
                    <p className='errorText'>{errorMsg}</p>
                </div>
            )}
        </section>
    )
}