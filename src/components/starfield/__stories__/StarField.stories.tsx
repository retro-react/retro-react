import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { StarField } from '../index';

const meta: Meta<typeof StarField> = {
	title: 'Experimental/StarField',
	component: StarField,
	argTypes: {
		starColor: { control: 'color' },
	},
};

export default meta;
type Story = StoryObj<typeof StarField>;

export const Basic: Story = {
	args: {
		starColor: 'white',
		numStars: 100,
		speed: 1,
		size: 2,
	},
	render: (args) => (
		<Container sx={{ width: '100%', height: '500px', position: 'relative' }}>
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
			{/* Your other components */}
		</Container>
	),
};
