import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Box } from 'theme-ui';
import { Text } from '@src/components/text';
import { Card } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Card',
	component: Card,
	parameters: {
		docs: {
			description: {
				component:
					'Authentic retro-styled card component with classic raised border styling and vintage appearance.',
			},
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
				padding: '40px',
				background: '#c0c0c0',
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
			Welcome to the retro computing experience! This card component features
			authentic styling reminiscent of classic desktop applications from the
			1990s. Complete with traditional raised borders and vintage typography for
			that genuine nostalgic feel.
		</Text>
	),
	alt: 'Retro computer image',
	header: (
		<Text variant="h3" align="center">
			System Information
		</Text>
	),
	footer: 'Retro UI v1.0',
	image: 'https://picsum.photos/300/150',
	// @ts-ignore
	sx: {
		maxWidth: '400px',
		maxHeight: '500px',
	},
};

export const BasicCard = Template.bind({});
BasicCard.args = {
	children: (
		<div>
			<p style={{ margin: '0 0 8px 0', fontSize: '11px' }}>
				A simple card with just content and no header, image, or footer.
			</p>
			<p style={{ margin: '0', fontSize: '11px' }}>
				Perfect for displaying basic information in a retro-styled container.
			</p>
		</div>
	),
	sx: {
		maxWidth: '300px',
	},
};

export const TextOnlyCard = Template.bind({});
TextOnlyCard.args = {
	header: 'File Manager',
	children: (
		<div style={{ fontFamily: 'monospace', fontSize: '10px' }}>
			<div>C:\&gt; DIR</div>
			<div>
				RETRO.EXE&nbsp;&nbsp;&nbsp;&nbsp;12,345&nbsp;&nbsp;&nbsp;07-20-25&nbsp;&nbsp;&nbsp;3:14p
			</div>
			<div>
				CONFIG.SYS&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;234&nbsp;&nbsp;&nbsp;07-20-25&nbsp;&nbsp;&nbsp;3:14p
			</div>
			<div>
				AUTOEXEC.BAT&nbsp;&nbsp;&nbsp;&nbsp;456&nbsp;&nbsp;&nbsp;07-20-25&nbsp;&nbsp;&nbsp;3:14p
			</div>
			<div>&nbsp;</div>
			<div>3 File(s)&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;13,035 bytes</div>
			<div>Available memory: 640K</div>
		</div>
	),
	footer: 'Total: 3 files',
	sx: {
		maxWidth: '350px',
	},
};

export const ImageCard = Template.bind({});
ImageCard.args = {
	header: 'Retro Computing',
	image: 'https://picsum.photos/seed/retro/250/180',
	alt: 'Vintage computer setup',
	children: (
		<Text variant="paragraph">
			Experience the nostalgia of early personal computing with authentic retro
			styling and classic design elements.
		</Text>
	),
	footer: 'Classic Design',
	sx: {
		maxWidth: '280px',
	},
};
