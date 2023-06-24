import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Skills } from '../components/Skills.jsx';

test('renders image logos', () => {
	render(<Skills />);

	const title = screen.getByText('Skills');
	const html = screen.getByAltText('HTML');
	const css = screen.getByAltText('CSS');
	const js = screen.getByAltText('JS');
	const react = screen.getByAltText('React');

	expect(title).toBeInTheDocument();
	expect(html).toBeInTheDocument();
	expect(css).toBeInTheDocument();
	expect(js).toBeInTheDocument();
	expect(react).toBeInTheDocument();
})