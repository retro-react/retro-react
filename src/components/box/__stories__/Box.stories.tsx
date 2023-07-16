import { ComponentMeta, ComponentStory } from '@storybook/react';
import { colorOptions } from '@src/utils/getColorScheme';
import { Box } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Box',
	component: Box,
	argTypes: {
		color: {
			control: { type: 'radio' },
			options: [...colorOptions, 'greyscale'],
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
			<div style={{ background: 'black', color: 'white', opacity: 0.6 }}>
				In the age of neon lights and floppy disks, life seemed to move at
				breakneck speed. It was a time when you could slip into a virtual world
				through your computer screen or lose hours browsing your favorite
				Blockbuster aisle. But amidst the hustle and bustle, we were reminded to
				step back, take a deep breath, and appreciate the simple moments that
				made life truly special
			</div>
			<div
				style={{
					background: 'black',
					color: 'white',
					opacity: 0.6,
					marginTop: '1rem',
				}}
			>
				In the era of dial-up connections and cassette tapes, the world spun
				with an electrifying pulse. It was a time when mixtapes ruled the
				airwaves, and Saturday morning cartoons were the highlight of our week.
				As we raced to keep up with the rapid advancements, we learned to pause,
				cherish the small wonders, and relish the nostalgia that connected us to
				the heart of the human experience.
			</div>
		</Box>
	);
};

export const Default = Template.bind({});
Default.args = {
	pattern: 'noise',
	color: 'primary',
	sx: {
		width: '100%',
	},
};
