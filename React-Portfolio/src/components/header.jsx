import React from 'react';
import Nav from './body/nav';
import profilePic from '../assets/headShot1.jpg';

export default function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className='portfolioHeader'>
                    <div className='navbar'>
                        <h1>Ayden Krohn's Portfolio</h1>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        />
                    </div>
                </header>
            </section>
            <section className='introMessage'>
                <div className='message'>
                    <h2>Welcome to My Portfolio</h2>
                    <img src={profilePic} className="headShot" alt='headShot'></img>
                </div>
            </section>
        </div>
    )
}