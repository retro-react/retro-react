import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { Button } from '../Button';

describe('Button', () => {
	it('renders its children', () => {
		render(<Button>Click me</Button>);
		expect(
			screen.getByRole('button', { name: 'Click me' }),
		).toBeInTheDocument();
	});

	it('fires onClick when clicked', async () => {
		const onClick = jest.fn();
		render(<Button onClick={onClick}>Press</Button>);
		await userEvent.click(screen.getByRole('button', { name: 'Press' }));
		expect(onClick).toHaveBeenCalledTimes(1);
	});

	it('respects disabled', async () => {
		const onClick = jest.fn();
		render(
			<Button onClick={onClick} disabled>
				Off
			</Button>,
		);
		const btn = screen.getByRole('button', { name: 'Off' });
		expect(btn).toBeDisabled();
		await userEvent.click(btn);
		expect(onClick).not.toHaveBeenCalled();
	});

	it('forwards ref', () => {
		const ref = React.createRef<HTMLButtonElement>();
		render(<Button ref={ref}>Ref</Button>);
		expect(ref.current).toBeInstanceOf(HTMLButtonElement);
	});
});
