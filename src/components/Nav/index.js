import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const {

        aboutMeSelected,
        setAboutMeSelected,

        portfolioSelected,
        setPortfolioSelected,

        resumeSelected,
        setResumeSelected,

        contactSelected,
        setContactSelected
    } = props

    const aboutMeSelection = () => {
        setAboutMeSelected(true);
        setPortfolioSelected(false);
        setResumeSelected(false);
        setContactSelected(false);
    }

    const portfolioSelection = () => {
        setAboutMeSelected(false);
        setPortfolioSelected(true);
        setResumeSelected(false);
        setContactSelected(false);
    }

    const resumeSelection = () => {
        setAboutMeSelected(false);
        setPortfolioSelected(false);
        setResumeSelected(true);
        setContactSelected(false);
    }

    const contactSelection = () => {
        setAboutMeSelected(false);
        setPortfolioSelected(false);
        setResumeSelected(false);
        setContactSelected(true);
    }


    return(
        
        <nav className="flex-row px-1">
            <ul className="flex-row space-between">
                <li className={`mx-2 ${aboutMeSelected && 'navActive'}`}>
                    <span onClick={aboutMeSelection}>
                        About Me
                    </span>
                </li>
                <li className={`mx-2 ${portfolioSelected && 'navActive'}`}>
                    <span onClick={portfolioSelection}>
                        Portfolio
                    </span>
                </li>
                <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                    <span onClick={resumeSelection}>
                        Resume
                    </span>
                </li>
                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                    <span onClick={contactSelection}>
                        Contact
                    </span>
                </li>
            </ul>
        </nav>

    
    )
}

export default Nav;