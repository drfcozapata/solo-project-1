import React from 'react';
import foto from '../../images/yo.jpg';
import './Header.css';

const Header = () => {
	return (
		<div className="header">
			<img src={foto} alt="" />
		</div>
	);
};

export default Header;
