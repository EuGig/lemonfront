import image from "../icons_assets/Logo.svg";
import React from "react";

function Nav() {
	return (
		<nav className="nav">
			<ul>
				<li><img src={image} alt="logo"/></li>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/notimp">Menu</a></li>
				<li><a href='/booking'>Reservations</a></li>
				<li><a href="notimp">Login</a></li>
			</ul>
		</nav>
	)
}

export default Nav;
