import React, {useState} from "react";

export default function BookingForm(props) {
	
	const [date, setDate] = useState("");
	const [guests, setGuests] = useState(0);
	const [occasion, setOccasion] = useState("");

	const updateBooks = (date, time, guests) => {
		props.setBookings([...props.bookings, { date, time, guests }]);
	};

	const submit = (e) => {
		e.preventDefault();
		setDate("");
		setGuests(0);
		setOccasion("");
		updateBooks(
			e.target.elements["res-date"].value,
			e.target.elements["res-time"].value,
			parseInt(e.target.elements["guests"].value)
		);
		props.onSubmit('formdata');
	};

	const handleDate = (date) => {
		props.setAvailableTimes({type: 'changed', payload: new Date(date)});
		setDate(date);
	};

	return (
		<form onSubmit={submit}>
			<label htmlFor="res-date">Choose date</label>
			<input
				type="date"
				id="res-date"
				onChange={(e) => handleDate(e.target.value)}
				value={date}
				required
			/>
			<label htmlFor="res-time">Choose time</label>
			<select
				id="res-time"
			>
				{props.availableTimes.map((hour) => {return <option>{hour}</option>})}
			</select>
			<label htmlFor="guests">Number of guests</label>
			<input
				type="number"
				placeholder="1"
				min="1"
				max="10"
				id="guests"
				onChange={(e) => setGuests(e.target.value)}
				value={guests}
			/>
			<label htmlFor="occasion">Occasion</label>
			<select
				id="occasion"
				onChange={(e) => setOccasion(e.target.value)}
				value={occasion}
			>
			    <option>Birthday</option>
				<option>Anniversary</option>
			</select>
			<input className="reserve" type="submit" value="Reserve" aria-label="On Click"/>
		</form>
	)
}
