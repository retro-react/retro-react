import { render, screen } from '@testing-library/react';
import React from 'react';
import { Card } from '../Card';

describe('Card', () => {
	it('renders header, children and footer', () => {
		render(
			<Card header="Title" footer="Foot">
				<p>Body</p>
			</Card>,
		);
		expect(screen.getByText('Title')).toBeInTheDocument();
		expect(screen.getByText('Body')).toBeInTheDocument();
		expect(screen.getByText('Foot')).toBeInTheDocument();
	});

	it('renders image when provided', () => {
		render(
			<Card image="https://example.test/img.png" alt="example">
				body
			</Card>,
		);
		expect(screen.getByAltText('example')).toBeInTheDocument();
	});
});
