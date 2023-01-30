import React from 'react';
import {Link} from 'react-router-dom';
function Header() {
	return (
		<>
			<nav>Get Ready To Complete Your Daily Goals</nav>
			<div className="header">
				<Link to="/">Home</Link>
				<Link to="./contact">Contact</Link>
				<Link to="./about">About</Link>
				<Link to="./user">User</Link>
			</div>
		</>
	);
}

export default Header;
