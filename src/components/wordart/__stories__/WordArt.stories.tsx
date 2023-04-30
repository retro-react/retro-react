import type { Meta, StoryObj } from '@storybook/react';
import { RetroSpinner } from '../index';

const meta: Meta<typeof RetroSpinner> = {
	title: 'Components/RetroSpinner',
	component: RetroSpinner,
};

export default meta;
type Story = StoryObj<typeof RetroSpinner>;

export const Basic: Story = {
	args: {
		color: '#000',
	},
};
