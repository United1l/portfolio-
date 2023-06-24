import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App.jsx';

test('renders the app', () => {
	render(<App />);

	const title = screen.getByText('Michael Asare');

	expect(title).toBeInTheDocument();
})