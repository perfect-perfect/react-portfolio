import React from 'react'
import githubIcon from '../../assets/images/github-logo.png';
import linkedInIcon from '../../assets/images/linkedin-xxl.png';

function Footer () {
    return (
        <>
        <section className='footer'>
            <a href='https://github.com/perfect-perfect' target='blank'><img src={githubIcon} className='icon' alt="github-icon" /> </a>
            <a href='https://www.linkedin.com/in/gilberto-covarrubias-merino-46aaa0223/'  target='blank'><img src={linkedInIcon} className='icon' alt="linkedIn-icon" /></a>
        </section>
        <p>© 2022 Gilberto Jesus Covarrubias Merino</p>
        </>

    )
}

export default Footer;