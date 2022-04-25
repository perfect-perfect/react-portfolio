// import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
// import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import About from './components/About';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {



	const [categories] = useState([
        {
            name: "portfolio",
        },
        {
            name: "resume",
        }
    ]);

	const [aboutMeSelected, setAboutMeSelected] = useState(true);
	const [portfolioSelected, setPortfolioSelected] = useState(false);
	const [resumeSelected, setResumeSelected] = useState(false);
	const [contactSelected, setContactSelected] = useState(false)

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

				resumeSelected={resumeSelected}
				setResumeSelected={setResumeSelected}

				contactSelected={contactSelected}
				setContactSelected={setContactSelected}
			></Header>
			<main>
				{portfolioSelected && 
					<Portfolio currentCategory={currentCategory}></Portfolio>
				}
				{/* <Portfolio currentCategory={currentCategory}></Portfolio> */}
				{aboutMeSelected &&
					<About></About>
				}
				{resumeSelected &&
					<Resume></Resume>
				}
				{contactSelected &&
					<Contact></Contact>
				}

			</main>
			<Footer></Footer>
		</div>
	);
}

export default App;
