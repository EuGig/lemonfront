import React from 'react';
import image from '../icons_assets/reschef.jpg';

export default function About() {
	return (
		<section className='about'>
			<h1>Little Lemon</h1>
			<h2>Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant.
To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.
			</h2>
			<img src={image} alt='res'></img>
		</section>
	)
}
