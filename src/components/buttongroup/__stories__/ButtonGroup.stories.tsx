import { Button } from '@src/index';
import type { Meta, Story } from '@storybook/react';
import { ButtonGroup } from '../index';

const meta: Meta<typeof ButtonGroup> = {
	title: 'Components/ButtonGroup',
	component: ButtonGroup,
	argTypes: {
		children: {
			control: {
				disable: true,
			},
		},
	},
};

export default meta;

const Template: Story = (args) => (
	<ButtonGroup {...args}>
		<Button variant="primary">First</Button>
		<Button variant="secondary">Second</Button>
		<Button variant="success">Third</Button>
	</ButtonGroup>
);

export const Basic = Template.bind({});

Basic.args = {
	size: 'medium',
};

const TemplateOutline: Story = (args) => (
	<ButtonGroup {...args}>
		<Button variant="outline">First</Button>
		<Button variant="outline">Second</Button>
		<Button variant="outline">Third</Button>
	</ButtonGroup>
);

export const Outline = TemplateOutline.bind({});

Outline.args = {
	size: 'medium',
};
