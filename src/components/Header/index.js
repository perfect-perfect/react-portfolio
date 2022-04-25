import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,

        aboutMeSelected,
        setAboutMeSelected,

        portfolioSelected,
        setPortfolioSelected,

        resumeSelected,
        setResumeSelected,

        contactSelected,
        setContactSelected
    } = props

    return (
        <header className='flex-row space-between'>
            <h1>
       
                Gilberto Covarrubias Merino
             
    
            </h1>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}

                aboutMeSelected={aboutMeSelected}
				setAboutMeSelected={setAboutMeSelected}

                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}

                resumeSelected={resumeSelected}
				setResumeSelected={setResumeSelected}

                contactSelected={contactSelected}
				setContactSelected={setContactSelected}
            ></Nav>

        </header>
    )
}

export default Header;