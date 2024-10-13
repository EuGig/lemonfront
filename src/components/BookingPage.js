import React, {useState} from "react";
import BookingForm from "./BookingForm.js";
import BookingSlot from "./BookingSlot.js";

function BookingPage(props) {
	const [bookings, setBookings] = useState([]);

	return (
		<article className="booking">
			<h1>Reserve a Table</h1>
			<ul>
				{bookings.map((ele, idx) => {return <BookingSlot key={idx} date={ele.date} time={ele.time} guests={ele.guests} />})}
			</ul>
			<BookingForm 
				availableTimes={props.times}
				setAvailableTimes={props.onChange}
				bookings={bookings}
				setBookings={setBookings}
				onSubmit={props.onSubmit}
			/>
		</article>
	)
}

export default BookingPage;
