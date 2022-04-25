import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory,
        aboutMeSelected,
        setAboutMeSelected,
        portfolioSelected,
        setPortfolioSelected
    } = props

    return (
        <header className='flex-row px-1'>
            <h2>
                <a href="/">
                    Gilberto Covarrubias Merino
                </a>
            </h2>
            <Nav
                categories={categories}
                setCurrentCategory={setCurrentCategory}
                aboutMeSelected={aboutMeSelected}
				setAboutMeSelected={setAboutMeSelected}
                portfolioSelected={portfolioSelected}
                setPortfolioSelected={setPortfolioSelected}
            ></Nav>

        </header>
    )
}

export default Header;