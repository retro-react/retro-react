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
		title: {
			control: { type: 'text' },
		},
		backdrop: {
			control: { type: 'boolean' },
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
				background: '#C0C0C0', // WIN31 desktop background
				border: '2px inset #C0C0C0',
				padding: '20px',
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

	const handleClose = () => {
		updateArgs({ open: false });
	};

	return (
		<TemplateContainer>
			<Button onClick={(e) => handleOpen(e, true)}>Open Modal</Button>
			<Modal {...args} open={open} onClose={handleClose} />
		</TemplateContainer>
	);
};

export const Basic = Template.bind({});
Basic.args = {
	backdrop: true,
	open: false,
	title: 'Dialog',
	children: (
		<div>
			<Text variant="body1" color="black">
				This is an authentic Windows 3.1 style modal dialog.
			</Text>
			<br />
			<Text variant="body1" color="black">
				You can close it by clicking the X button in the title bar or pressing
				the Escape key.
			</Text>
		</div>
	),
	color: 'primary',
};

export const NoBackdrop = Template.bind({});
NoBackdrop.args = {
	backdrop: false,
	open: false,
	title: 'Information',
	children: (
		<div>
			<Text variant="body1" color="black">
				This modal has no backdrop - you can see the content behind it.
			</Text>
		</div>
	),
	color: 'secondary',
};

export const LongContent = Template.bind({});
LongContent.args = {
	backdrop: true,
	open: false,
	title: 'About Program',
	children: (
		<div>
			<Text variant="body1" color="black">
				Welcome to our retro application! This modal demonstrates how long
				content is handled with proper scrolling behavior, just like in classic
				Windows applications.
			</Text>
			<br />
			<br />
			<Text variant="body1" color="black">
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
				veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
				commodo consequat.
			</Text>
			<br />
			<br />
			<Text variant="body1" color="black">
				Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
				dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
				proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
			</Text>
			<br />
			<br />
			<Text variant="body1" color="black">
				Sed ut perspiciatis unde omnis iste natus error sit voluptatem
				accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab
				illo inventore veritatis et quasi architecto beatae vitae dicta sunt
				explicabo.
			</Text>
		</div>
	),
	color: 'success',
};
