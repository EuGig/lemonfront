import image from "./../icons_assets/restauranfood.jpg";
import Card from "./Card.js";
import salad from "./../icons_assets/salad.jpg";
import brusk from "./../icons_assets/bruchetta.svg";
import pasta from "./../icons_assets/pasta.jpeg";
import React from "react";
import {useNavigate} from 'react-router-dom';

function HomePage(props) {

	const specials = [
		{
			name: "Greek Salad",
			price: 3,
			description: "The famous Greek salad of crispy lettuce, peppers, olives and our Chicago styled feta cheese, garnished with crunchy garlic, rosemary croutons.",
			alt: "salad",
			image: salad
		},
		{
			name: "Bruschetta",
			price: 4.50,
			description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil; made perfect for an evening dinner.",
			alt:"brusk",
			image: brusk
		},
		{
			name: "Pasta",
			price: 10,
			description: "This comes straight from Grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
			alt:"pasta",
			image: pasta
		}
	];
	const cards = specials.map((spec) => {
		return (
			<li>
			<Card
				name={spec.name}
				price={spec.price}
				description={spec.description}
				image={spec.image}
				alt={spec.alt}
			/>
			</li>
		)
	});

	const navigate = useNavigate();
	
	return (
		<main>
			<section>
				<article>
					<h1>Little Lemon</h1>
					<h2>Chicago</h2>
					<p>We are a family owned Mediterranean restaurant, focused on trdaitional recipes served with a modern twist.</p>
					<button onClick={() => navigate("/booking")}>Reserve a Table</button>
				<img src={image} alt="resthome"/>
				</article>
			</section>
			<section className="specials">
					<h2>This weeks specials!</h2>
					<button>Online Menu</button>
					<ul>{cards}</ul>
			</section>
		</main>
	)
}

export default HomePage;
