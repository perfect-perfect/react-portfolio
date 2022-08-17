import React from 'react';
import coverImage from "../../assets/about-me/portfolio-photo.png";

function About() {
    return (
        <>
            <section className="about-me">
                
                
                <div className="about-info-container">

                    <h2 className="about-header">ABOUT ME</h2>

                    <p className="about-info">
                        Full stack web developer, motivated self-starter, adaptive collaborator and curious
                        problem-solver with an extensive history in independent research and large team coordination.
                        Graduate of Case Western Reserve University’s Full-Stack Web Development program. A
                        passionate and skilled developer with an exceptional ability to analyze and solve problems, both
                        independently and with others– with over 4+ years of experience in leading large teams and
                        delivering results in a versatile and dynamic environment under strict timelines. An ambitious
                        and inspired programmer who is eager to contribute their skills and abilities to the
                        implementation of new technologies.
                    </p> 

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