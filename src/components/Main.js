import BookingPage from './BookingPage';
import NotImpl from './NotImpl';
import About from './About';
import ConfirmedBooking from './ConfirmedBooking';
import HomePage from './HomePage';
import {Routes, Route, useNavigate} from 'react-router-dom';
import React, {useReducer} from 'react';
import {fetchAPI, submitAPI} from '../api.js';


export default function Main() {
	
	const today = new Date();
	
	const updateTimes = (state, action) => {
		if (action.type === 'changed') {
			return getTimes(action.payload);
		}
		return state;
	};

	const getTimes = (date) => {
		return fetchAPI(date);
	};

	const initializeTimes = getTimes(today);

	const [state, dispatch] = useReducer(updateTimes, initializeTimes);

	const navigate = useNavigate();

	const submitForm = (formData) => {
		const res = submitAPI(formData);
		if (res) {
			navigate('/confirmed');
		}
	};


	return (
		<Routes>
			<Route path="/" element={<HomePage />} /> 
			<Route path="/booking" element={<BookingPage times={state} onChange={dispatch} onSubmit={submitForm}/>} />
			<Route path="/confirmed" element={<ConfirmedBooking />} />
			<Route path='/about' element={<About />} />
			<Route path='/notimp' element={<NotImpl />} />
		</Routes>
	)
}
