import { useArgs } from '@storybook/preview-api';
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
	const [, updateArgs] = useArgs();
	const [open, setOpen] = React.useState(args.open);

	React.useEffect(() => {
		setOpen(args.open);
	}, [args.open]);

	const handleOpen = (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
		isOpen: boolean,
	) => {
		updateArgs({ open: isOpen });
	};

	return (
		<div
			style={{
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				height: '50vh',
				border: '1px solid black',
			}}
		>
			<Button onClick={(e) => handleOpen(e, true)}>Open Modal</Button>
			<Modal {...args} open={open} onClose={(e) => handleOpen(e, false)} />
		</div>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	backdrop: false,
	pattern: 'noise',
	open: false,
	children: (
		<>
			<Text bevel={true} variant="h6" color="black">
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
	color: '#8fbc8f',

	// @ts-ignore
	sx: {
		maxHeight: '500px',
		maxWidth: '500px',
	},
};
