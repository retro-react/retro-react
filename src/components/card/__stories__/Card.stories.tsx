import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Text } from '../../../components/text';
import { Card } from '../index';

export default {
	title: 'Components/Card',
	component: Card,
	argTypes: {
		header: {
			control: 'text',
			description: 'Optional header rendered above the image and content.',
		},
		image: {
			control: 'text',
			description: 'Optional image URL rendered between header and content.',
		},
		alt: {
			control: 'text',
			description: 'Alt text for the image.',
		},
		footer: {
			control: 'text',
			description: 'Optional footer rendered at the bottom of the card.',
		},
	},
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const Default = Template.bind({});
Default.args = {
	header: 'System Information',
	image: 'https://picsum.photos/seed/retro/320/180',
	alt: 'Vintage computer setup',
	children: (
		<Text variant="paragraph">
			A complete retro card with header, image, content, and footer.
		</Text>
	),
	footer: 'Retro UI v1.0',
	sx: { maxWidth: 360 },
};

export const ContentOnly = Template.bind({});
ContentOnly.args = {
	children: (
		<Text variant="paragraph">
			A minimal card with just body content, useful for inline information
			panels.
		</Text>
	),
	sx: { maxWidth: 320 },
};

export const WithHeaderAndFooter = Template.bind({});
WithHeaderAndFooter.args = {
	header: 'File Manager',
	children: (
		<div style={{ fontFamily: 'monospace', fontSize: 11 }}>
			<div>RETRO.EXE&nbsp;&nbsp;12,345&nbsp;&nbsp;07-20-25</div>
			<div>CONFIG.SYS&nbsp;&nbsp;&nbsp;&nbsp;234&nbsp;&nbsp;07-20-25</div>
			<div>AUTOEXEC.BAT&nbsp;&nbsp;456&nbsp;&nbsp;07-20-25</div>
		</div>
	),
	footer: '3 files · 13,035 bytes',
	sx: { maxWidth: 360 },
};
