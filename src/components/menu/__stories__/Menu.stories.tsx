import type { Meta, Story } from '@storybook/react';
import { Menu, MenuItem } from '../index';

const meta: Meta = {
	title: 'Components/Menu',
	component: Menu,
	argTypes: {
		rounded: {
			control: { type: 'boolean' },
		},
	},
};

export default meta;

const Template: Story = (args) => (
	<Menu {...args}>
		<MenuItem sx={{ py: 2, px: 3, cursor: 'pointer' }}>Menu Item 1</MenuItem>
		<MenuItem sx={{ py: 2, px: 3, cursor: 'pointer' }}>Menu Item 2</MenuItem>
		<MenuItem sx={{ py: 2, px: 3, cursor: 'pointer' }}>Menu Item 3</MenuItem>
	</Menu>
);

export const Basic: Story = Template.bind({});
Basic.args = {
	pattern: 'noise',
	rounded: true,
	color: 'primary',
};

export const RoundedWithDifferentColor: Story = Template.bind({});
RoundedWithDifferentColor.args = {
	pattern: 'noise',
	rounded: true,
	color: 'secondary',
};

export const SquaredWithGreyscale: Story = Template.bind({});
SquaredWithGreyscale.args = {
	pattern: 'none',
	rounded: false,
	color: 'greyscale',
};
