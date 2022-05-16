import React from 'react';
import './Footer.css';
import { ReactComponent as Twitter } from '../../images/twitter.svg';
import { ReactComponent as Facebook } from '../../images/facebook.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as GitHub } from '../../images/github.svg';

const Footer = () => {
	return (
		<div>
			<footer className="footer">
				<div className="container footer-icons">
					<a
						href="https://twitter.com/drfcozapata"
						rel="noreferrer"
						target="_blank"
					>
						<Twitter className="footer-icon" />
					</a>
					<a
						href="https://facebook.com/drfcozapata"
						rel="noreferrer"
						target="_blank"
					>
						<Facebook className="footer-icon" />
					</a>
					<a
						href="https://instagram.com/drfcozapata"
						rel="noreferrer"
						target="_blank"
					>
						<Instagram className="footer-icon" />
					</a>
					<a
						href="https://github.com/drfcozapata"
						rel="noreferrer"
						target="_blank"
					>
						<GitHub className="footer-icon" />
					</a>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
