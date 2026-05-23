import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../../components/container';
import { Text } from '../../../components/text';
import { Background } from '../index';

const meta: Meta<typeof Background> = {
	title: 'Components/Background',
	component: Background,
	argTypes: {
		color: {
			control: 'color',
			description: 'Background color, used as a fallback if no image is set.',
		},
		backgroundImage: {
			control: 'text',
			description: 'URL of the background image.',
		},
		backgroundRepeat: {
			control: { type: 'select' },
			options: ['repeat', 'no-repeat', 'repeat-x', 'repeat-y'],
			description: 'CSS background-repeat behavior.',
		},
		backgroundSize: {
			control: { type: 'select' },
			options: ['auto', 'cover', 'contain'],
			description: 'CSS background-size behavior.',
		},
		backgroundPosition: {
			control: { type: 'select' },
			options: [
				'left top',
				'left center',
				'left bottom',
				'center top',
				'center center',
				'center bottom',
				'right top',
				'right center',
				'right bottom',
			],
			description: 'CSS background-position value.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Default: Story = {
	args: {
		color: '#000000',
		backgroundImage:
			'https://eol.jsc.nasa.gov/Collections/EarthArt/img/CloudsSaudiArabia/ISS047-E-57170-57184_preview.jpg',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
	},
	render: (args) => (
		<Container sx={{ width: '100%', height: 400 }}>
			<Background {...args}>
				<Text sx={{ color: 'white', p: 4 }}>
					Place any content inside Background. It will render on top of the
					image or color.
				</Text>
			</Background>
		</Container>
	),
};

export const ColorOnly: Story = {
	args: {
		color: '#000080',
	},
	render: (args) => (
		<Container sx={{ width: '100%', height: 200 }}>
			<Background {...args}>
				<Text sx={{ color: 'white', p: 4 }}>Solid color background.</Text>
			</Background>
		</Container>
	),
};
