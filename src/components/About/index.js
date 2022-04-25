import React from 'react';
import coverImage from "../../assets/about-me/portfolio-photo.jpg";

function About() {
    return (
        <section className="my-5">

            <h1 id="about">About Me</h1>

            <p>I am a full-stack developer currently enrolled at the Case Western Reserve full stack coding bootcamp</p>

            <img src={coverImage} className="my-2" style={{ width: "100%" }} alt="cover" />
            
        </section>
    );
};

export default About;