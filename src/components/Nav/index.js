import React from 'react';
// import { capitalizeFirstLetter } from '../../utils/helpers';

function Nav(props) {

    const {
        // categories = [],
        // setCurrentCategory

        // aboutMeSelected,
        setAboutMeSelected,

        // portfolioSelected,
        setPortfolioSelected,

        // resumeSelected,
        setResumeSelected,

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

    // function categorySelected(name) {
    //     console.log(`${name} clicked`)
    // }

    return(
        
        <nav className="flex-row px-1">
            <ul className="flex-row">
                <li className="mx-2">
                    <span onClick={aboutMeSelection}>
                        About Me
                    </span>
                </li>
                <li className="mx-2">
                    <span onClick={portfolioSelection}>
                        Portfolio
                    </span>
                </li>
                <li className="mx-2">
                    <span onClick={resumeSelection}>
                        Resume
                    </span>
                </li>
                <li className="mx-2">
                    <span onClick={contactSelection}>
                        Contact
                    </span>
                </li>
                {/* {categories.map((category) => (
                    <li className="mx-1" key={category.name}>
                        <span onClick={() => categorySelected(category.name)}>
                            {capitalizeFirstLetter(category.name)}
                        </span>
                    </li>
                ))} */}
            </ul>
        </nav>

    
    )
}

export default Nav;