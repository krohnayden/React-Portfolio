import React from "react";
import codingQuiz from '../../assets/portfolioWorks/codingQuiz.png';
import eCommerceApp from '../../assets/portfolioWorks/eCommerceApp.png';
import logoGen from '../../assets/portfolioWorks/logoGen.png';
import passGen from '../../assets/portfolioWorks/passGen.png';
import regexTutorial from '../../assets/portfolioWorks/regexTutorial.png';
import readmeGen from '../../assets/portfolioWorks/readMeGen.png';


export default function Portfolio() {
    return (
        <div>
            <section className='portfolio'>
                <div>
                    <h2 className='portfolioTitle'>Projects</h2>
                </div>
                <div className='#'>
                    <div className='projects'>
                        <div className='projectImgDiv'>
                            <a href='https://github.com/krohnayden/coding-quiz'>
                               <img
                               src={codingQuiz}
                               className='codingQuiz projectImg'
                               alt="Coding-Quiz"
                               />
                               <div className="imgCaptions">Front-end application that provides fun coding quiz.</div>
                            </a>
                        </div>
                        <div className='projectImgDiv'>
                            <a href='https://github.com/krohnayden/eCommerceApplication'>
                               <img
                               src={eCommerceApp}
                               className='eCommerceApp projectImg'
                               alt="eCommerce-Application"
                               />
                                <div className="imgCaptions">Back-end application that uses mySQL and express accessed by Insomnia.</div>
                            </a>
                        </div>
                        <div className='projectImgDiv'>
                            <a href='https://github.com/krohnayden/logoGenerator'>
                               <img
                               src={logoGen}
                               className='logoGen projectImg'
                               alt="Logo-Generator"
                               />
                               <div className="imgCaptions">Back-end application that generates svg files with user inputted shape, text, background color, and text color.</div>
                            </a>
                        </div>
                        <div className='projectImgDiv'>
                            <a href='https://github.com/krohnayden/password-generator'>
                               <img
                               src={passGen}
                               className='passGen projectImg'
                               alt="Password-Generator"
                               />
                               <div className="imgCaptions">This front-end application generates a custom password with user chosen parameters.</div>                              
                            </a>
                        </div>
                        <div className='projectImgDiv'>
                            <a href='https://gist.github.com/krohnayden/46f67de3f6058ab3be5fbae6e1778c74'>
                               <img
                               src={regexTutorial}
                               className='regexTutorial projectImg'
                               alt="Regex-Tutorial"
                               />
                               <div className="imgCaptions">This tutorial covers the topic of regular expressions; breaking down an expression into its components.</div>
                            </a>
                        </div>
                        <div className='projectImgDiv'>
                            <a href='https://github.com/krohnayden/readme-Gen'>
                               <img
                               src={readmeGen}
                               className='readmeGen projectImg'
                               alt="ReadMe-Generator"
                               />
                               <div className="imgCaptions">This back-end application generates a professional ReadME with various sections.</div>
                            </a>
                        </div>
                        
                    </div>
                </div>
            </section>
        </div>
    )
}