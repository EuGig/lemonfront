import React from 'react';
import image from "./../icons_assets/restaurant.jpg";

export default function ConfirmedBooking() {
	return (
		<section className="confirmation">
			<img src={image} alt='booked'/>
			<h2>Booking Confirmed</h2>
			<p>Thank you for your reservation. We look forward to serving you!</p>
		</section>
	)	
}
