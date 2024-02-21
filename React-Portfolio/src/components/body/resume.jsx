import React from "react";
import resumePDF from '../../assets/Resume.pdf'
import resumeLogo from '../../assets/resumeLogo.png'
import Skills from '../body/skills'


export default function Resume() {
    return (
        <div>
            <section className='welcomeSection'>
                <div>
                    <h2 className='resumeIntro'>Download My Resume</h2>
                </div>
                <div className='resumeDiv'>
                    <a href={resumePDF} target='_blank' rel="noreferrer"><img src={resumeLogo} className='resumeLogo'/></a>

                    <p className='resumeCaption'>Click to View Resume</p>
                </div>
                <div className='skillsContainer'>
                <p>Explore my Related Skills Below!</p>
                    <Skills />
                </div>
            </section>
        </div>
    )
}