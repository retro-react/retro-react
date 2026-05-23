import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Checkbox } from '../Checkbox';

describe('Checkbox', () => {
	it('renders with label', () => {
		render(<Checkbox label="Accept" />);
		expect(screen.getByLabelText('Accept')).toBeInTheDocument();
	});

	it('toggles when uncontrolled', async () => {
		render(<Checkbox label="Toggle me" />);
		const box = screen.getByLabelText('Toggle me') as HTMLInputElement;
		expect(box.checked).toBe(false);
		await userEvent.click(box);
		expect(box.checked).toBe(true);
	});

	it('respects controlled checked', () => {
		const Wrapper = () => {
			const [c] = useState(true);
			const noop = () => undefined;
			return <Checkbox label="On" checked={c} onChange={noop} />;
		};
		render(<Wrapper />);
		expect(screen.getByLabelText<HTMLInputElement>('On').checked).toBe(true);
	});

	it('honors disabled', async () => {
		const onChange = jest.fn();
		render(<Checkbox label="x" disabled onChange={onChange} />);
		const box = screen.getByLabelText('x') as HTMLInputElement;
		expect(box).toBeDisabled();
		await userEvent.click(box);
		expect(onChange).not.toHaveBeenCalled();
	});
});
