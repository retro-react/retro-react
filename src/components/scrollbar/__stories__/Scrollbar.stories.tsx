import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '@src/components/container';
import { Scrollbar } from '../index';

const meta: Meta<typeof Scrollbar> = {
	title: 'Components/Scrollbar',
	component: Scrollbar,
};

export default meta;
type Story = StoryObj<typeof Scrollbar>;

const containerContent = `
It was a time when grunge ruled the airwaves, and everybody was dialing up to the world wide web. Jordan soared on the basketball court, while Ross and Rachel kept us glued to our TV sets. The Macarena craze swept the dance floors, and Friends was the show to watch.

Life was simpler back then. We rocked out to Nirvana and Pearl Jam on our Walkmans, and we hopped on our skateboards to cruise the streets. Our cell phones were as big as bricks, but we didn't care; we were too busy playing Snake or trading Pokémon cards.

The 90s brought us the Spice Girls and boy bands, and we all wanted to be like our favorite TV characters from Saved by the Bell or Beverly Hills, 90210. We marveled at the special effects in Jurassic Park and couldn't get enough of the mysteries in The X-Files.

The fashion was wild, with baggy jeans and flannel shirts, and our hair was an explosion of styles, from the "Rachel" cut to frosted tips. We spent hours browsing the aisles of Blockbuster, looking for the perfect movie to rent for the weekend.

We gathered around the TV to watch Seinfeld, and we debated whether a hot dog was a sandwich. We cheered on our favorite wrestlers and spent hours playing Mario Kart on our Nintendo 64s. We wore our Tamagotchis with pride, and we couldn't wait for the next Goosebumps book to hit the shelves.

Those were the days of AOL Instant Messenger, of Saturday morning cartoons, and of rollerblading in the park. It was the era of Beanie Babies and slap bracelets, of pogs and the Macarena. It was a time when we were all just trying to find our way, and we did it together, as one big, 90s family.
`;

const renderScrollbar = (args: Story['args']) => (
	<Scrollbar {...args}>
		<Container
			sx={{
				width: '300px',
				height: '300px',
				overflowY: 'scroll',
				backgroundColor: 'white',
				padding: '1rem',
			}}
		>
			{containerContent}
		</Container>
	</Scrollbar>
);

export const PastelScrollbar: Story = {
	args: {
		theme: 'pastel',
	},
	render: renderScrollbar,
};

export const NeonScrollbar: Story = {
	args: {
		theme: 'neon',
	},
	render: renderScrollbar,
};

export const GrayscaleScrollbar: Story = {
	args: {
		theme: 'grayscale',
	},
	render: renderScrollbar,
};
