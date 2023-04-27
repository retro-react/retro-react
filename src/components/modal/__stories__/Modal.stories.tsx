import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '@src/components/button';
import { Text } from '@src/components/text';
import { Modal } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Modal',
	component: Modal,
} as ComponentMeta<typeof Modal>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Modal> = (args) => {
	const [open, setOpen] = React.useState(args.open);

	React.useEffect(() => {
		setOpen(args.open);
	}, [args.open]);

	return (
		<>
			<Button onClick={() => setOpen(true)}>Open Modal</Button>
			<Modal {...args} open={open} onClose={() => setOpen(false)} />
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: (
		<>
			<Text variant="h6" color="black">
				Ahoy, matey!
			</Text>
			<Text variant="paragraph" color="black">
				Welcome aboard our retro ship of wonders, where you'll find treasures
				from the golden age of the internet. Discover ancient artifacts such as
				pixel art, gradient backgrounds, and quirky fonts. Navigate through the
				vast ocean of nostalgia and experience the simpler times when animated
				GIFs ruled the world wide web!
			</Text>
		</>
	),
	color: 'darkseagreen',

	// @ts-ignore
	sx: {
		maxHeight: '500px',
		maxWidth: '500px',
	},
};
