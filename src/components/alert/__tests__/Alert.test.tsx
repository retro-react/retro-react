import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Alert } from '../Alert';

describe('Alert', () => {
	it('renders with role alert and title', () => {
		render(<Alert title="Heads up">Body</Alert>);
		expect(screen.getByRole('alert')).toBeInTheDocument();
		expect(screen.getByText('Heads up')).toBeInTheDocument();
		expect(screen.getByText('Body')).toBeInTheDocument();
	});

	it('shows close button and fires onClose', async () => {
		const onClose = jest.fn();
		render(
			<Alert title="t" showCloseButton onClose={onClose}>
				body
			</Alert>,
		);
		await userEvent.click(screen.getByLabelText('Close alert'));
		expect(onClose).toHaveBeenCalled();
	});
});
