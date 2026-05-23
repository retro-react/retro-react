import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Modal } from '../Modal';

describe('Modal', () => {
	it('renders title and children when open', () => {
		render(
			<Modal open title="Settings">
				<p>Body</p>
			</Modal>,
		);
		expect(screen.getByRole('dialog')).toBeInTheDocument();
		expect(screen.getByText('Settings')).toBeInTheDocument();
		expect(screen.getByText('Body')).toBeInTheDocument();
	});

	it('calls onClose on Escape', () => {
		const onClose = jest.fn();
		render(
			<Modal open onClose={onClose} title="x">
				<p>y</p>
			</Modal>,
		);
		fireEvent.keyDown(window, { key: 'Escape' });
		expect(onClose).toHaveBeenCalled();
	});

	it('does not render content when closed', () => {
		render(
			<Modal open={false} title="x">
				<p>SECRET</p>
			</Modal>,
		);
		expect(screen.queryByText('SECRET')).not.toBeInTheDocument();
	});
});
