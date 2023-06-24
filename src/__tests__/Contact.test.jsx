import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Contact } from '../components/Contact.jsx';

test('renders contact icons wrapped in img tags with the message "DM".', () => {
	// ARRANGE(render the component)
	render(<Contact />);

	// ACT(get specific tag or initiate an event)
	const message = screen.getByText('DM');
	const iG = screen.getByAltText('instagram icon');
	const tW = screen.getByAltText('twitter icon');
	const lI = screen.getByAltText('linkedin icon');
	const icons = [iG, tW, lI];

	// ASSERT
	expect(message).toHaveTextContent('DM');
	expect(iG).toBeInTheDocument();
	expect(tW).toBeInTheDocument();
	expect(lI).toBeInTheDocument();
})
