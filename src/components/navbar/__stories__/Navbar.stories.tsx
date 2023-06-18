import { ComponentMeta, StoryFn } from '@storybook/react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Navbar, NavItem } from '../Navbar';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Layout/Navbar',
	component: Navbar,
	argTypes: {
		children: {
			control: false,
		},
	},
} as ComponentMeta<typeof Navbar>;

const PageContent = () => {
	return (
		<div
			style={{
				lineHeight: '2',
				overflow: 'auto',
				height: '100%',
				backgroundColor: '#a8dadc',
				color: '#000',
				border: '1px solid #000',
				borderTop: 'none',
				padding: '1rem',
			}}
		>
			Welcome to the 90s! A time of floppy disks, dial-up modems, and "The
			Rachel" hairdo. Bill Clinton was president, the internet was in its
			infancy, and everyone was doing the Macarena. In a decade that saw the
			release of Titanic, Forrest Gump and The Matrix, we also had heartthrobs
			like Leonardo DiCaprio and Brad Pitt gracing our screens. Meanwhile, the
			Spice Girls, Nirvana, and the Backstreet Boys provided the soundtrack of
			our lives. Those were the days of plaid shirts, choker necklaces, and
			fanny packs. It was a time when playing outside was the norm and
			Tamagotchis were the biggest responsibility a kid had. We surfed the web
			on Netscape, asked Jeeves all our burning questions, and patiently waited
			for our favorite song to download on Napster - only to get disconnected
			when someone picked up the landline. Despite Y2K threats, we entered the
			new millennium with optimism, ready to take on the world with our newfound
			digital knowledge. We've come a long way since then, but let's not forget
			where we started. So here's to the 90s - the decade of Beanie Babies,
			Friends, and Saved By The Bell. It was all that and a bag of chips. It was
			da bomb. It was the raddest, baddest, and phattest. Enjoy your journey
			back in time with our retro-react library. No DeLorean needed!
		</div>
	);
};

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: StoryFn<typeof Navbar> = ({ ...args }) => {
	return (
		<Container
			fluid
			sx={{
				height: '400px',
				marginBottom: '5rem',
			}}
		>
			<Navbar {...args}>
				<Text color="#fff">Logo</Text>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						Home
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						About
					</a>
				</NavItem>
				<NavItem>
					<a href="#" onClick={(e) => e.preventDefault()}>
						Contact
					</a>
				</NavItem>
			</Navbar>
			<PageContent />
		</Container>
	);
};

export const Default = Template.bind({});
Default.args = {
	color: 'primary',
	pattern: 'noise',
};
