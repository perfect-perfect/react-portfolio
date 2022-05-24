import React from 'react'
import githubIcon from '../../assets/images/github-logo.png';
import linkedInIcon from '../../assets/images/linkedin-xxl.png';
import instagramIcon from '../../assets/images/instagram-logo.png';

function Footer () {
    return (
        <>
        <section className='footer'>
            <a href='https://github.com/perfect-perfect' target='blank'><img src={githubIcon} className='icon' alt="github-icon" /> </a>
            <a href='https://www.linkedin.com/in/gilberto-covarrubias-merino-46aaa0223/'  target='blank'><img src={linkedInIcon} className='icon' alt="linkedIn-icon" /></a>
            <a href='https://www.instagram.com/shirtless___/' target='blank'><img src={instagramIcon} className='icon' alt="instagram-icon" /></a>
        </section>
        <p>© 2022 Gilberto Jesus Covarrubias Merino</p>
        </>

    )
}

export default Footer;