import type { Meta, Story } from '@storybook/react';
import { Button } from '../../../index';
import { ButtonGroup } from '../index';

const meta: Meta<typeof ButtonGroup> = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup,
	argTypes: {
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			description: 'Applied to all child buttons in the group.',
		},
		children: { control: { disable: true } },
	},
};

export default meta;

const Template: Story = (args) => (
	<ButtonGroup {...args}>
		<Button variant="primary">Save</Button>
		<Button variant="secondary">Edit</Button>
		<Button variant="warning">Delete</Button>
	</ButtonGroup>
);

export const Default = Template.bind({});
Default.args = { size: 'medium' };

export const Outline: Story = (args) => (
	<ButtonGroup {...args}>
		<Button variant="outline">Left</Button>
		<Button variant="outline">Center</Button>
		<Button variant="outline">Right</Button>
	</ButtonGroup>
);
Outline.args = { size: 'medium' };

export const Sizes: Story = () => (
	<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
		<ButtonGroup size="small">
			<Button variant="primary">One</Button>
			<Button variant="primary">Two</Button>
			<Button variant="primary">Three</Button>
		</ButtonGroup>
		<ButtonGroup size="medium">
			<Button variant="primary">One</Button>
			<Button variant="primary">Two</Button>
			<Button variant="primary">Three</Button>
		</ButtonGroup>
		<ButtonGroup size="large">
			<Button variant="primary">One</Button>
			<Button variant="primary">Two</Button>
			<Button variant="primary">Three</Button>
		</ButtonGroup>
	</div>
);
