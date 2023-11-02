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

const ContainerContent = () => {
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

	const textSx = {
		color: 'white',
		p: 5,
	};

	return (
		<div>
			{content.map((text, index) => (
				<Text key={index} sx={textSx}>
					{text}
				</Text>
			))}
		</div>
	);
};

export const Basic: Story = {
	args: {
		color: '#000000',
		backgroundImage:
			'https://eol.jsc.nasa.gov/Collections/EarthArt/img/CloudsSaudiArabia/ISS047-E-57170-57184_preview.jpg',
		backgroundRepeat: 'repeat',
		backgroundSize: 'cover',
		backgroundPosition: 'center center',
	},
	render: (args) => {
		return (
			<Container
				sx={{
					width: '100%',
					height: '500px',
					overflow: 'auto',
				}}
			>
				<Background {...args}>
					<ContainerContent />
				</Background>
			</Container>
		);
	},
};
