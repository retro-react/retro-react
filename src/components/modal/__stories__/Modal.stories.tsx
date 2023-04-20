import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Button } from '@src/components/button';
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
	children:
		'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum',
	color: 'darkseagreen',

	// @ts-ignore
	sx: {
		height: '500px',
		width: '500px',
	},
};
