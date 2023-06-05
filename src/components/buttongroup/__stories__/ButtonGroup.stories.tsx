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
		<Button color="primary" variant="solid">
			First
		</Button>
		<Button color="secondary" variant="solid">
			Second
		</Button>
		<Button color="success" variant="solid">
			Third
		</Button>
	</ButtonGroup>
);

export const Basic = Template.bind({});

Basic.args = {
	size: 'medium',
};

const TemplateOutline: Story = (args) => (
	<ButtonGroup {...args}>
		<Button color="primary" variant="outline">
			First
		</Button>
		<Button color="secondary" variant="outline">
			Second
		</Button>
		<Button color="success" variant="outline">
			Third
		</Button>
	</ButtonGroup>
);

export const Outline = TemplateOutline.bind({});

Outline.args = {
	size: 'medium',
};
