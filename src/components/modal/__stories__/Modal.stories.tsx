import { useArgs } from '@storybook/preview-api';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '@src/components/button';
import { Text } from '@src/components/text';
import { colorOptions } from '@src/utils/getColorScheme';
import { Modal } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Modal',
	component: Modal,
	argTypes: {
		color: {
			options: [...colorOptions, 'greyscale'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Modal>;

const TemplateContainer = ({ children }: { children: React.ReactNode }) => {
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
			{children}
		</div>
	);
};

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

	const handleOpen = (e: React.MouseEvent, isOpen: boolean) => {
		updateArgs({ open: isOpen });
	};

	return (
		<TemplateContainer>
			<Button onClick={(e) => handleOpen(e, true)}>Open Modal</Button>
			<Modal {...args} open={open} onClose={(e) => handleOpen(e, false)} />
		</TemplateContainer>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	backdrop: false,
	pattern: 'noise',
	open: false,
	children: (
		<div
			style={{
				height: '100%',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
			}}
		>
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
		</div>
	),
	color: 'primary',

	// @ts-ignore
	sx: {
		maxHeight: '500px',
		maxWidth: '500px',
	},
};
