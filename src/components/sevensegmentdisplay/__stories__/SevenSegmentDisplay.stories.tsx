import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { SevenSegmentDisplay } from '../index';

const meta: Meta<typeof SevenSegmentDisplay> = {
	title: 'Components/SevenSegmentDisplay',
	component: SevenSegmentDisplay,
};

export default meta;
type Story = StoryObj<typeof SevenSegmentDisplay>;

export const BlackBackground: Story = {
	args: {
		value: 1946,
		color: 'white',
		segmentThickness: 'none',
	},
	render: (props) => (
		<Container
			sx={{
				width: '500px',
				height: '500px',
				border: '1px solid black',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
				backgroundColor: 'black',
			}}
		>
			<SevenSegmentDisplay {...props} />
		</Container>
	),
};

export const Basic: Story = {
	args: {
		value: 1946,
		color: 'black',
		segmentThickness: 'none',
	},
	render: (props) => (
		<Container
			sx={{
				width: '500px',
				height: '500px',
				border: '1px solid black',
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center',
			}}
		>
			<SevenSegmentDisplay {...props} />
		</Container>
	),
};
