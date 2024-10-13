import logo from "../icons_assets/Logo.svg";
import React from "react";

function Footer() {
	return (
		<footer className="footer">
			<img src={logo} alt="logo"/>
			<ul>
				<li>Doormat Navigation</li>
				<li><a href="/">Home</a></li>
				<li><a href="/about">About</a></li>
				<li><a href="/notimp">Menu</a></li>
				<li><a href="booking">Reservations</a></li>
				<li><a href="/notimp">Login</a></li>
			</ul>
			<ul>
				<li>Contact</li>
				<li>Adress</li>
				<li>Phone Number</li>
				<li>Email</li>
			</ul>
			<ul>
				<li>Social Media Links</li>
				<li><a href="www.instagram.com">Instagram</a></li>
				<li><a href="www.facebook.com">Facebook</a></li>
			</ul>
		</footer>
	)
}

export default Footer;
