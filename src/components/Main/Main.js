import React from 'react';
import About from './About/About';
import Info from './Info/Info';
import Interests from './Interests/Interests';
import './Main.css';

const Main = () => {
	return (
		<div className="main">
			<Info />
			<About />
			<Interests />
		</div>
	);
};

export default Main;
