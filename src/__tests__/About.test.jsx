import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { About } from '../components/About.jsx';

test('renders about image, title and tagline', () => {
	render(<About />);

	const title = screen.getByText('About me');
	const image = screen.getByAltText('profile');
	const tagline1 = screen.getByText("Hi, I'm a front-end developer");
	const tagline2 = document.querySelector('p');

	expect(title).toBeInTheDocument();
	expect(image).toBeInTheDocument();
	expect(tagline1).toBeInTheDocument();
	expect(tagline2).toBeInTheDocument();
	expect(tagline2).toHaveTextContent("Dedicated to building fast, responsive and scalable webpages, websites and web-apps.")
})