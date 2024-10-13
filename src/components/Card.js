import React from "react";
export default function Card(props) {
	return (
		<section className="card">
			<img src={props.image} alt={props.alt}/>
			<div className="card-title">
				<h1>{props.name}</h1>
				<h2>$ {props.price}</h2>
			</div>
			<p>{props.description}</p>
		</section>
	)
}
