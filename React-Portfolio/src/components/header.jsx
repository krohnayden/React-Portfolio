import React from 'react';
import Nav from './body/nav';

export default function Header(props) {
    const { currentTab, handleTabChange } = props;

    return (
        <div>
            <section>
                <header className=''>
                    <div>
                        <h1>Ayden Krohn's Portfolio</h1>
                    </div>
                    <div>
                        <Nav
                            currentTab={currentTab}
                            handleTabChange={handleTabChange}
                        />
                    </div>
                </header>
            </section>
            <section className='introMessage'>
                <div className='message'>
                    <h2>Welcome to my Portfolio</h2>
                    {/* <img src={imgSource} className="headShot" alt='headShot'></img> */}
                </div>
            </section>
        </div>
    )
}