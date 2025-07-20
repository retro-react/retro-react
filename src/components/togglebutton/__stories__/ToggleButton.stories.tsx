import type { ComponentMeta, ComponentStory } from '@storybook/react';
import { ToggleButton, ToggleButtonGroup } from '../index';

export default {
	title: 'Components/ToggleButtonGroup',
	component: ToggleButtonGroup,
	parameters: {
		docs: {
			description: {
				component:
					"A group of toggle buttons. It can be used to select one or multiple values. It's a controlled component. Uses `Button` to render the toggle buttons. You can apply the `Button` props to this component.",
			},
		},
	},
	argTypes: {
		children: {
			control: { disable: true },
			description:
				'The children of this component, typically `ToggleButton` components.',
		},
		size: {
			control: { type: 'select', options: ['small', 'medium', 'large'] },
			description:
				'The size of the buttons. It will be passed to the `ToggleButton` children.',
		},
		value: {
			control: { disable: true },
			description:
				'An array of values of the selected buttons in this group. It can be used to control the selection (controlled component).',
		},
		onValueChange: {
			control: { disable: true },
			description:
				'A callback function that is called when the selected value changes. The new selection (array of values of the selected buttons) is passed as argument.',
		},
		multiple: {
			control: 'boolean',
			description:
				'If true, multiple buttons can be selected. If false (default), only one button can be selected.',
		},
		sx: {
			control: { disable: true },
			description:
				"Additional style that should be applied to the group. It's a style object defined by Theme UI.",
		},
		color: {
			control: 'select',
			description:
				'The color of the toggle buttons. This should be passed to the `ToggleButton` children.',
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
} as ComponentMeta<typeof ToggleButtonGroup>;

const Template: ComponentStory<typeof ToggleButtonGroup> = (args) => (
	<ToggleButtonGroup
		{...args}
		onValueChange={(value) => {
			/* value selected */
		}}
	>
		<ToggleButton value="first" color="greyscale">
			A
		</ToggleButton>
		<ToggleButton value="second" color="greyscale">
			B
		</ToggleButton>
		<ToggleButton value="third" color="greyscale">
			C
		</ToggleButton>
	</ToggleButtonGroup>
);

export const Basic = Template.bind({});

Basic.args = {
	size: 'medium',
	color: 'greyscale',
	multiple: false,
};

const TemplateMultiple: ComponentStory<typeof ToggleButtonGroup> = (args) => (
	<ToggleButtonGroup
		{...args}
		onValueChange={(value) => {
			/* values selected */
		}}
	>
		<ToggleButton value="first" color="greyscale">
			A
		</ToggleButton>
		<ToggleButton value="second" color="greyscale">
			B
		</ToggleButton>
		<ToggleButton value="third" color="greyscale">
			C
		</ToggleButton>
	</ToggleButtonGroup>
);

export const Multiple = TemplateMultiple.bind({});

Multiple.args = {
	size: 'medium',
	multiple: true,
};
