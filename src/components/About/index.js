import React from 'react';
import coverImage from "../../assets/about-me/portfolio-photo.jpg";

function About() {
    return (
        <>
            <section className="about-me">
                
                
                <div className="about-info-container">

                    <h2 className="about-header">ABOUT ME</h2>

                    <p className="about-info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p> 

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