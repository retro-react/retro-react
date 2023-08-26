import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'theme-ui';
import { Text } from '@src/components/text';
import { colorOptions } from '@src/utils/getColorScheme';
import { Card } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		color: {
			options: colorOptions,
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Card>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */

const Template: ComponentStory<typeof Card> = (args) => {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<Card {...args} />
		</Box>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: (
		<Text variant="paragraph">
			Get ready to rock and roll, fellow cybernauts! As we embark on this wicked
			journey through the World Wide Web, we'll uncover hidden digital treasures
			and ride the gnarliest of cyber waves. So dust off your dial-up modems,
			grab your neon-colored fanny packs, and join us on this tubular trip down
			memory lane. Remember to always save your progress on a floppy disk, and
			be excellent to each other. Cowabunga, dude!
		</Text>
	),
	pattern: 'noise',
	color: 'primary',
	rounded: false,
	alt: 'Image from Picsum',
	header: (
		<Text variant="h3" align="center">
			Header
		</Text>
	),
	footer: 'Footer',
	image: 'https://picsum.photos/500/200',
	// @ts-ignore
	sx: {
		maxWidth: '500px',
		maxHeight: '500px',
	},
};
