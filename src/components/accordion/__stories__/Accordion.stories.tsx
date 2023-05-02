import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Accordion } from '../index';

const meta: Meta<typeof Accordion> = {
	title: 'Components/Accordion',
	component: Accordion,
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Basic: Story = {
	args: {
		title: 'Dial-up Internet Connection',
		pattern: 'stripes',
		color: 'success',
		children: (
			<Text variant="paragraph">
				Remember the screeching sound of a dial-up modem connecting to the
				internet? In the 90s, dial-up connections were the most common way to
				access the World Wide Web. With slow speeds and busy phone lines,
				browsing the internet was a completely different experience from what we
				have today
			</Text>
		),
	},
	render: (args) => {
		return (
			<Container
				sx={{
					width: '100%',
					maxWidth: '400px',
					margin: '0 auto',
				}}
			>
				<Accordion {...args} />
				<Accordion title="The Golden Age of Arcade Games">
					<Text variant="paragraph">
						The 80s and 90s were the golden age of arcade gaming. Classic titles
						like Pac-Man, Space Invaders, and Donkey Kong captured the
						imagination of players around the world. Neon-lit arcades were
						social hubs where gamers gathered to compete for high scores, show
						off their skills, and immerse themselves in the digital worlds of
						their favorite games
					</Text>
				</Accordion>
			</Container>
		);
	},
};
