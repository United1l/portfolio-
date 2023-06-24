import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Projects, moveX, setDefault, updateCarouselX } from '../components/Projects.jsx';
import { jest } from '@jest/globals';

test('renders an image slider with an image name', () => {
	render(<Projects />);

	const title = screen.getByText('Projects');
	const image1 = screen.getByAltText('A javaScript game');
	const image2 = screen.getByAltText('start game');

	const image1Name = screen.getByText('Slapomania');
	const image2Name = screen.getByText('Grand fisher');

	let mockFn1 = jest.fn();
	let mockFn2 = jest.fn();
	let mockFn3 = jest.fn();
	let dummyD = 2;
	let dummyBool = false;

	setDefault(mockFn1, dummyD);
	updateCarouselX(mockFn2, dummyD);

	moveX(mockFn1, mockFn3, dummyBool);

	expect(title).toBeInTheDocument();
	expect(image1).toBeInTheDocument();
	expect(image2).toBeInTheDocument();
	expect(image1Name).toBeInTheDocument();
	expect(image2Name).toBeInTheDocument();
	expect(mockFn1).toHaveBeenCalledWith(2);
	expect(mockFn2).toHaveBeenCalledWith(-2);
	expect(mockFn3).toHaveBeenCalled();
})