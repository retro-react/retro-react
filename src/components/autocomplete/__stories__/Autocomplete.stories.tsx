import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Autocomplete } from '../index';

const suggestions = [
	'Bell-bottom jeans',
	'Vinyl records',
	'Polaroid cameras',
	'Disco balls',
	'Roller skates',
	'Jukeboxes',
	'Cassette tapes',
	'Tube televisions',
	'Rotary phones',
	'Typewriters',
];

export default {
	title: 'Forms/Autocomplete',
	component: Autocomplete,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['filled', 'outlined'],
			description: 'Visual style of the input.',
		},
		color: {
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'greyscale',
			],
			description:
				'Color scheme applied to the input and highlighted suggestion.',
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium'],
			description: 'Size of the input field.',
		},
		rounded: {
			control: 'boolean',
			description: 'Applies rounded corners to the input.',
		},
		clearable: {
			control: 'boolean',
			description: 'Shows a clear (×) button when the input has a value.',
		},
		noResultsMessage: {
			control: 'text',
			description: 'Message shown when no suggestions match the input.',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables the input.',
		},
		placeholder: {
			control: 'text',
			description: 'Placeholder text for the input.',
		},
	},
} as ComponentMeta<typeof Autocomplete>;

const Template: ComponentStory<typeof Autocomplete> = (args) => (
	<div style={{ width: 300, minHeight: 400 }}>
		<Autocomplete {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	suggestions,
	placeholder: 'Search retro items...',
	variant: 'filled',
	color: 'primary',
	size: 'medium',
	rounded: true,
	clearable: true,
};

export const Outlined = Template.bind({});
Outlined.args = {
	...Default.args,
	variant: 'outlined',
};

export const Disabled = Template.bind({});
Disabled.args = {
	...Default.args,
	disabled: true,
	placeholder: 'Disabled',
};
