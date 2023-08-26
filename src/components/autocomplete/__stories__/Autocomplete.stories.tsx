import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@src/components/text';
import { Autocomplete } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/Autocomplete',
	component: Autocomplete,
	argTypes: {
		size: {
			options: ['small', 'medium'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Autocomplete>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Autocomplete> = (args) => {
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

	return (
		<div style={{ minHeight: '500px' }}>
			<Text>Options: {suggestions.join(', ')}</Text>
			<div style={{ width: '300px', marginTop: '1rem' }}>
				<Autocomplete
					suggestions={suggestions}
					onSuggestionSelect={(selected) => console.log('Selected:', selected)}
					{...args}
				/>
			</div>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	variant: 'filled',
	color: 'primary',
	size: 'medium',
	rounded: true,
};
