import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumbs } from '../index';

const meta: Meta<typeof Breadcrumbs> = {
	title: 'Components/Breadcrumbs',
	component: Breadcrumbs,
};

export default meta;
type Story = StoryObj<typeof Breadcrumbs>;

export const Basic: Story = {
	args: {
		backgroundColor: 'transparent',
		items: [
			{ text: 'Home', href: '', active: true },
			{ text: 'About', href: '' },
			{ text: 'Contact', href: '' },
		],
	},
};
