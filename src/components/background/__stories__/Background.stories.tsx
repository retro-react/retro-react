// Background.stories.tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Background } from '../index';

const meta: Meta<typeof Background> = {
	title: 'Components/Background',
	component: Background,
};

export default meta;
type Story = StoryObj<typeof Background>;

export const Basic: Story = {
	args: {
		color: '#000000',
		backgroundImage:
			'https://www.nasa.gov/sites/default/files/styles/full_width_feature/public/thumbnails/image/hubble_acos520_potw2317a.jpg',
		backgroundRepeat: 'repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
	},
	render: (args) => {
		const textSx = {
			color: 'white',
			p: 5,
		};

		const content = [
			`"I want it that way" - Backstreet Boys`,
			`"I'll be there for you" - Friends`,
			`"Life is like a box of chocolates..." - Forrest Gump`,
			`"You've got mail!" - AOL`,
			`"Show me the money!" - Jerry Maguire`,
			`"I'm the king of the world!" - Titanic`,
			`"I'll make him an offer he can't refuse." - The Godfather`,
			`"...Baby One More Time" - Britney Spears`,
			`"Smells Like Teen Spirit" - Nirvana`,
			`"You can't touch this." - MC Hammer`,
		];

		return (
			<Container
				sx={{
					width: '100%',
					height: '500px',
					overflow: 'auto',
				}}
			>
				<Background {...args}>
					{content.map((text, index) => (
						<Text key={index} sx={textSx}>
							{text}
						</Text>
					))}
				</Background>
			</Container>
		);
	},
};
