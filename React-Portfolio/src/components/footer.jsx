import React from 'react';
import gitLogo from '../assets/github-mark.png';
import linkedinLogo from '../assets/linkedinLogo.png'
export default function Footer() {
    return (
        <footer>
            <h3>Made by Ayden Krohn</h3>
                <ul className='logoContainer'>
                    <li className='gitLogo'>
                        <img src={gitLogo} className='gitImg'></img>
                        <a href='https://github.com/krohnayden' className='gitLink'>
                            GitHub
                        </a>
                    </li>
                    <li className='linkedinLogo'>
                        <img src={linkedinLogo} className='linkedinImg'></img>
                        <a href='https://www.linkedin.com/in/krohnayden' className='linkedinLink'>
                            Linkedin
                        </a>
                    </li>
                </ul>
        </footer>
    )
}