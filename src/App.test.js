import { render, screen } from '@testing-library/react';
import Main from './components/Main';
import React from 'react';
import HomePage from './components/HomePage';

test('main renders about and home and I can navigate to those pages', () => {
	render(<HomePage />);
	const headingElement = screen.getByText("Little Lemon");
	expect(headingElement).toBeInTheDocument();
})
