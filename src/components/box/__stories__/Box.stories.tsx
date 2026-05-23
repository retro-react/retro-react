import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../../components/text';
import { Box } from '../index';

export default {
	title: 'Components/Box',
	component: Box,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['raised', 'sunken', 'flat', 'panel'],
			description:
				'Border treatment: `panel` (face color + subtle border), `raised` (3D outset), `sunken` (3D inset), `flat` (single border).',
		},
		children: { control: false },
	},
} as ComponentMeta<typeof Box>;

const Template: ComponentStory<typeof Box> = (args) => (
	<Box {...args}>
		<Text>
			Classic Windows-style container box. Place any content inside, text, form
			fields, lists, or other components.
		</Text>
	</Box>
);

export const Default = Template.bind({});
Default.args = {
	variant: 'panel',
	sx: { width: 400, padding: '12px' },
};

export const Variants: ComponentStory<typeof Box> = () => (
	<div
		style={{
			display: 'grid',
			gridTemplateColumns: 'repeat(2, minmax(220px, 1fr))',
			gap: '1rem',
		}}
	>
		<Box variant="panel" sx={{ padding: '12px' }}>
			<Text>Panel, face color background, subtle border.</Text>
		</Box>
		<Box variant="raised" sx={{ padding: '12px' }}>
			<Text>Raised, 3D outset, button-like surface.</Text>
		</Box>
		<Box variant="sunken" sx={{ padding: '12px' }}>
			<Text>Sunken, inset, like input fields.</Text>
		</Box>
		<Box variant="flat" sx={{ padding: '12px' }}>
			<Text>Flat, minimal single border.</Text>
		</Box>
	</div>
);

export const Nested: ComponentStory<typeof Box> = () => (
	<Box variant="panel" sx={{ padding: '12px', width: 360 }}>
		<Text>System Information</Text>
		<Box variant="sunken" sx={{ padding: '8px', marginTop: '8px' }}>
			<Text>OS: Windows 95</Text>
			<br />
			<Text>Memory: 16 MB</Text>
		</Box>
	</Box>
);
