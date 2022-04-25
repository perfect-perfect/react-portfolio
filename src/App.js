// import './App.css';
import React, { useState } from 'react';
import Header from './components/Header';
// import Gallery from './components/Gallery';
import Portfolio from './components/Portfolio';
import About from './components/About'

function App() {
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
			></Header>
			<main>
				<Portfolio currentCategory={currentCategory}></Portfolio>
				<About></About>

			</main>
		</div>
	);
}

export default App;
