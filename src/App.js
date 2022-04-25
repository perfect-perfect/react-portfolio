// import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
// import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import About from './components/About'

function App() {

	const [aboutMeSelected, setAboutMeSelected] = useState(true)
	const [portfolioSelected, setPortfolioSelected] = useState(false)

	const [categories] = useState([
        {
            name: "portfolio",
        },
        {
            name: "resume",
        }
    ]);

	const [currentCategory, setCurrentCategory] = useState(categories[0]);

	return (
		<div>
			<Header
				categories={categories}
				setCurrentCategory={setCurrentCategory}
				aboutMeSelected={aboutMeSelected}
				setAboutMeSelected={setAboutMeSelected}
				portfolioSelected={portfolioSelected}
				setPortfolioSelected={setPortfolioSelected}
			></Header>
			<main>
				{portfolioSelected && 
					<Portfolio currentCategory={currentCategory}></Portfolio>
				}
				{/* <Portfolio currentCategory={currentCategory}></Portfolio> */}
				{aboutMeSelected &&
					<About></About>
				}

			</main>
		</div>
	);
}

export default App;
