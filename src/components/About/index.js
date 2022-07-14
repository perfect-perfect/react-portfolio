import React from 'react';
import coverImage from "../../assets/about-me/portfolio-photo.png";

function About() {
    return (
        <>
            <section className="about-me">
                
                
                <div className="about-info-container">

                    <h2 className="about-header">ABOUT ME</h2>

                    <p className="about-info">Full-Stack Web Developer, self-starter, and problem-solver with a demonstrable history in research based solutions. I earned my Full-Stack Web Development certificate from Case Western Reserve University. I take pride in my ability to analyze and solve problems, both alone and with others--through teamwork. My curiosity, flexibility, patience and adaptiveness have all allowed me to develop into a skilled web developer and excellent team member.</p> 

                </div>


                <div className="headshot-container">
                    <img src={coverImage} className="my-2 headshot" alt="cover" />
                </div>

            </section>

            <div className="about-container"></div>
        </>
    );
};

export default About;