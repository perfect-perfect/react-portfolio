import React from 'react';
import Nav from '../Nav';
import portfolioLogo from '../../assets/images/portfolio-logo.png'
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
        <header>
            <div className="logo-name">
                <div>
                    <img className='portfolio-logo' src={portfolioLogo} alt="logo"></img>
                </div>
                <div>
                    <h1 className='header-name'>
            
                        Gilberto Jesus Covarrubias Merino
                    
            
                    </h1>
                </div>
            </div>
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