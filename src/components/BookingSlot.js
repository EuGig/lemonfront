import React from "react";

export default function BookingSlot(props) {
	return (
		<li>Date: {props.date}<br/> Time: {props.time}<br/>Number of Guests: {props.guests}</li>
	)
}
