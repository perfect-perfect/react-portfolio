import React from 'react';
import Nav from '../Nav';

function Header(props) {

    const {
        categories = [],
        setCurrentCategory
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
            ></Nav>

        </header>
    )
}

export default Header;