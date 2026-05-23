import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React, { useState } from 'react';
import { Input } from '../Input';

describe('Input', () => {
	it('renders with placeholder', () => {
		render(<Input placeholder="Type..." />);
		expect(screen.getByPlaceholderText('Type...')).toBeInTheDocument();
	});

	it('works as uncontrolled input', async () => {
		render(<Input placeholder="x" />);
		const el = screen.getByPlaceholderText('x') as HTMLInputElement;
		await userEvent.type(el, 'hi');
		expect(el.value).toBe('hi');
	});

	it('works as controlled input', async () => {
		const Wrapper = () => {
			const [v, setV] = useState('');
			return (
				<Input
					placeholder="c"
					value={v}
					onChange={(e) => setV(e.target.value)}
				/>
			);
		};
		render(<Wrapper />);
		const el = screen.getByPlaceholderText('c') as HTMLInputElement;
		await userEvent.type(el, 'ab');
		expect(el.value).toBe('ab');
	});

	it('disabled is reflected', () => {
		render(<Input placeholder="d" disabled />);
		expect(screen.getByPlaceholderText('d')).toBeDisabled();
	});
});
