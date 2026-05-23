import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../../../components/container';
import { Text } from '../../../components/text';
import { StarField } from '../index';

const meta: Meta<typeof StarField> = {
	title: 'Experimental/StarField',
	component: StarField,
	argTypes: {
		starColor: {
			control: 'color',
			description: 'Color used to paint each star.',
		},
		numStars: {
			control: { type: 'number', min: 10, max: 1000, step: 10 },
			description: 'Number of stars rendered on the canvas.',
		},
		speed: {
			control: { type: 'number', min: 0.1, max: 10, step: 0.1 },
			description: 'Base falling speed multiplier for the stars.',
		},
		size: {
			control: { type: 'number', min: 1, max: 10, step: 1 },
			description: 'Pixel size of each star.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof StarField>;

export const Default: Story = {
	args: {
		starColor: 'white',
		numStars: 100,
		speed: 1,
		size: 2,
	},
	render: (args) => (
		<Container sx={{ width: '100%', height: 500, position: 'relative' }}>
			<StarField {...args} />
			<Text
				sx={{
					position: 'absolute',
					top: '50%',
					left: '50%',
					transform: 'translate(-50%, -50%)',
					textAlign: 'center',
				}}
				color="#ffffe0"
			>
				Long ago in a galaxy far, far away....
			</Text>
		</Container>
	),
};

export const Hyperspace: Story = {
	args: {
		starColor: '#9be7ff',
		numStars: 400,
		speed: 6,
		size: 2,
	},
	render: (args) => (
		<Container sx={{ width: '100%', height: 500, position: 'relative' }}>
			<StarField {...args} />
		</Container>
	),
};
