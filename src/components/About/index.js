import React from 'react';
import coverImage from "../../assets/about-me/portfolio-photo.png";

function About() {
    return (
        <>
            <section className="about-me">
                
                
                <div className="about-info-container">

                    <h2 className="about-header">ABOUT ME</h2>

                    <p className="about-info">I am a full-stack web developer, recent gradute of the 
                    Case Western Reserve Initiative for Continued Learning, auto-didactic bibliophile, and problem-solver with a rich work history in research based solutions and quality review</p> 

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