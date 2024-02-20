import React, { useEffect } from 'react';

export default function Nav(props) {
    const {
        currentTab,
        handleTabChange
    } = props;

    // useEffect(() => {
    //     document.title = capitalizeFirstLetter(currentTab.name);
    // }, [currentTab]);

    return (
        <nav>
            <ul className='nav nav-tabs'>
                <li className='navItem'>
                    <a 
                    href='#about'
                    onClick={() => handleTabChange('About')}
                    className={currentTab === 'About' ? 'nav-link active' : 'nav-link'}
                    >About</a>
                </li>
                <li className='navItem'>
                    <a 
                    href='#portfolio'
                    onClick={() => handleTabChange('Portfolio')}
                    className={currentTab === 'Portfolio' ? 'nav-link active' : 'nav-link'}
                    >Portfolio</a>
                </li>
                <li className='navItem'>
                    <a 
                    href='#contact'
                    onClick={() => handleTabChange('Contact')}
                    className={currentTab === 'Contact' ? 'nav-link active' : 'nav-link'}
                    >Contact</a>
                </li>
                <li className='navItem'>
                    <a 
                    href='#resume'
                    onClick={() => handleTabChange('Resume')}
                    className={currentTab === 'Resume' ? 'nav-link active' : 'nav-link'}
                    >Resume</a>
                </li>
            </ul>
        </nav>
    )
}