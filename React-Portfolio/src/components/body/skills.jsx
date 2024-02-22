import React from "react";

export default function Skills() {
    return (
        <div className='skillsSection'>
            <div className='frontEndDiv'>
                <h3 className='frontEndTitle'>Front-End Tech</h3>
                <div className='frontEndColumn'>
                    <ul className='skillsList'>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>Bootstrap</li>
                        <li>API's</li>
                        <li>GIT</li>
                    </ul>
                </div>
            </div>
            <div className='backEndDiv'>
                <h3 className='backEndTitle'>Back-End Tech</h3>
                <div className='backEndColumn'>
                    <ul className='skillsList'>
                        <li>Node.js</li>
                        <li>Jest</li>
                        <li>Express.js</li>
                        <li>MySQL</li>
                        <li>Object-Relational Mapping (ORM)</li>
                        <li>Sequelize</li>
                        <li>Model-View-Controller (MVC)</li>
                    </ul>
                </div>
            </div>
            <div className='databaseTechDiv'>
                <h3 className='databaseTechTitle'>Database Tech</h3>
                <div className='databaseTechColumn'>
                    <ul className='skillsList'>
                        <li>Mongoose</li>
                        <li>GraphQL</li>
                        <li>Progessive Web Applications (PWA)</li>
                        <li>MongoDB</li>
                        <li>MERN</li>
                        <li>State</li>
                        <li>React</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}