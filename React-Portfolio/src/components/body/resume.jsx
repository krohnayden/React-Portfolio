import React from "react";
import resumePDF from '../../assets/Resume.pdf'
import resumeLogo from '../../assets/resumeLogo.png'
import Skills from '../body/skills'


export default function Resume() {
    return (
        <div className='skillsContainer'>
            <div className='skillsContainer'>
                <h2 className='skillsIntro'>Explore my Related Skills Below!</h2>
                <Skills />
            </div>
            <section className='welcomeSection'>
                <div>
                    <h2 className='resumeIntro'>Click the Image to Download My Resume</h2>
                </div>
                <div className='resumeDiv'>
                    <a href={resumePDF} target='_blank' rel="noreferrer"><img src={resumeLogo} className='resumeLogo' /></a>
                </div>
            </section>
        </div>
    )
}