import type { Meta, StoryObj } from '@storybook/react';
import { ToggleButton, ToggleButtonGroup } from '../index';

const meta: Meta<typeof ToggleButtonGroup> = {
	title: 'Components/ToggleButtonGroup',
	component: ToggleButtonGroup,
	parameters: {
		docs: {
			description: {
				component:
					'A group of toggle buttons used to pick one or many values from a small fixed set, similar to a segmented control.',
			},
		},
	},
	argTypes: {
		children: { control: { disable: true } },
		size: {
			control: 'inline-radio',
			options: ['small', 'medium', 'large'],
			description: 'Size of each toggle button in the group.',
		},
		value: { control: { disable: true } },
		onValueChange: { control: { disable: true } },
		multiple: {
			control: 'boolean',
			description:
				'Allow more than one option to be selected at the same time.',
		},
		color: {
			control: 'select',
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'greyscale',
				'greyscale-dark',
			],
		},
	},
};

export default meta;
type Story = StoryObj<typeof ToggleButtonGroup>;

export const Default: Story = {
	args: {
		size: 'medium',
		color: 'greyscale',
		multiple: false,
	},
	render: (args) => (
		<ToggleButtonGroup {...args}>
			<ToggleButton value="left">Left</ToggleButton>
			<ToggleButton value="center">Center</ToggleButton>
			<ToggleButton value="right">Right</ToggleButton>
		</ToggleButtonGroup>
	),
};

export const Multiple: Story = {
	args: {
		size: 'medium',
		color: 'primary',
		multiple: true,
	},
	render: (args) => (
		<ToggleButtonGroup {...args}>
			<ToggleButton value="bold">B</ToggleButton>
			<ToggleButton value="italic">I</ToggleButton>
			<ToggleButton value="underline">U</ToggleButton>
		</ToggleButtonGroup>
	),
};

export const Sizes: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
			<ToggleButtonGroup size="small">
				<ToggleButton value="a">A</ToggleButton>
				<ToggleButton value="b">B</ToggleButton>
				<ToggleButton value="c">C</ToggleButton>
			</ToggleButtonGroup>
			<ToggleButtonGroup size="medium">
				<ToggleButton value="a">A</ToggleButton>
				<ToggleButton value="b">B</ToggleButton>
				<ToggleButton value="c">C</ToggleButton>
			</ToggleButtonGroup>
			<ToggleButtonGroup size="large">
				<ToggleButton value="a">A</ToggleButton>
				<ToggleButton value="b">B</ToggleButton>
				<ToggleButton value="c">C</ToggleButton>
			</ToggleButtonGroup>
		</div>
	),
};
