import React from 'react';
import { ReactComponent as Email } from '../../../images/email.svg';
import { ReactComponent as LinkedIn } from '../../../images/linkedin.svg';
import './Info.css';

const Info = () => {
	return (
		<div className="info">
			<h2 className="info-name">Francisco Zapata</h2>
			<h4 className="info-title">Full Stack Developer</h4>
			<p className="info-social">@drfcozapata</p>
			<div className="info-buttons">
				<button className="info-email">
					<a
						className="info-link"
						href="mailto:drfcozapata@gmail.com"
						rel="noreferrer"
						target="_blank"
					>
						<Email />
						Email
					</a>
				</button>
				<button className="info-linkedin">
					<a
						className="info-link"
						href="https://www.linkedin.com/in/drfcozapata/"
						rel="noreferrer"
						target="_blank"
					>
						<LinkedIn />
						LinkedIn
					</a>
				</button>
			</div>
		</div>
	);
};

export default Info;
