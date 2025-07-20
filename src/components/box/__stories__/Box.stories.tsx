import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '@src/components/text';
import { Box } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Box',
	component: Box,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['raised', 'sunken', 'flat', 'panel'],
			description: 'The visual variant of the box',
		},
		children: {
			control: false,
		},
	},
} as ComponentMeta<typeof Box>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Box> = ({ children, ...args }) => {
	return (
		<Box {...args}>
			<Text>
				Classic Windows-style container box. In the age of neon lights and
				floppy disks, life seemed to move at breakneck speed. It was a time when
				you could slip into a virtual world through your computer screen.
			</Text>
		</Box>
	);
};

export const Default = Template.bind({});
Default.args = {
	variant: 'panel',
	sx: {
		width: '400px',
	},
};

/**
 * Shows all four box variants side by side
 */
export const AllVariants: ComponentStory<typeof Box> = () => (
	<div
		style={{
			padding: '2rem',
			display: 'grid',
			gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
			gap: '1rem',
		}}
	>
		<div>
			<Text>Panel (default):</Text>
			<br />
			<Box variant="panel">
				<Text>
					Classic Windows panel with face color background and subtle border.
				</Text>
			</Box>
		</div>

		<div>
			<Text>Raised:</Text>
			<br />
			<Box variant="raised">
				<Text>
					3D button-like appearance with raised borders for interactive
					elements.
				</Text>
			</Box>
		</div>

		<div>
			<Text>Sunken:</Text>
			<br />
			<Box variant="sunken">
				<Text>
					Inset appearance like dialog content areas and text input fields.
				</Text>
			</Box>
		</div>

		<div>
			<Text>Flat:</Text>
			<br />
			<Box variant="flat">
				<Text>
					Simple flat box with border for minimal layouts and content.
				</Text>
			</Box>
		</div>
	</div>
);

/**
 * Shows nested boxes creating complex layouts
 */
export const NestedLayout: ComponentStory<typeof Box> = () => (
	<div style={{ padding: '2rem' }}>
		<Text>Nested retro boxes for complex layouts:</Text>
		<br />
		<Box variant="panel" sx={{ padding: '16px' }}>
			<Text>Main container (panel)</Text>
			<br />
			<div style={{ display: 'flex', gap: '8px', marginTop: '8px' }}>
				<Box variant="sunken" sx={{ flex: 1, padding: '8px' }}>
					<Text>Content area (sunken)</Text>
				</Box>
				<Box variant="raised" sx={{ padding: '8px' }}>
					<Text>Sidebar (raised)</Text>
				</Box>
			</div>
			<Box variant="flat" sx={{ marginTop: '8px', padding: '4px' }}>
				<Text>Footer (flat)</Text>
			</Box>
		</Box>
	</div>
);

/**
 * Shows boxes with custom content
 */
export const WithContent: ComponentStory<typeof Box> = () => (
	<div
		style={{
			padding: '2rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
		}}
	>
		<Box variant="panel" sx={{ padding: '12px' }}>
			<Text>System Information</Text>
			<br />
			<Box variant="sunken" sx={{ padding: '8px', marginTop: '8px' }}>
				<Text>Operating System: Windows 95</Text>
				<br />
				<Text>Memory: 16 MB RAM</Text>
				<br />
				<Text>Processor: Intel 486 DX2 66MHz</Text>
			</Box>
		</Box>

		<Box variant="raised" sx={{ padding: '8px' }}>
			<Text>Toolbar</Text>
		</Box>
	</div>
);
