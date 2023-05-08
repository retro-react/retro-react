import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../../text';
import {
	FlexibleLayout,
	LayoutFooter,
	LayoutHeader,
	LayoutMain,
	LayoutSidebarLeft,
	LayoutSidebarRight,
} from '../FlexibleLayout';

const meta: Meta = {
	title: 'Layout/FlexibleLayout',
	component: FlexibleLayout,
	argTypes: {
		children: {
			control: false,
		},
	},
};

export default meta;

type Story = StoryObj<typeof FlexibleLayout>;

export const Basic: Story = {
	args: {
		sx: {
			'& .flexible-layout-child-cell': {
				border: '1px solid black',
				backgroundColor: 'lightgray',
			},
		},
	},
	render: (args) => (
		<FlexibleLayout {...args}>
			<LayoutHeader>
				<Text variant="h4">90s Nostalgia Zone</Text>
			</LayoutHeader>
			<LayoutFooter>
				<Text variant="paragraph">© 1999 - 90s Nostalgia Zone</Text>
			</LayoutFooter>
			<LayoutSidebarLeft>
				<ul>
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							Home
						</a>
					</li>
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							TV Shows
						</a>
					</li>
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							Music
						</a>
					</li>
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							Fashion
						</a>
					</li>
					<li>
						<a href="#" onClick={(e) => e.preventDefault()}>
							Toys & Games
						</a>
					</li>
				</ul>
			</LayoutSidebarLeft>
			<LayoutSidebarRight>
				<Text variant="paragraph">What's your favorite 90s sitcom?</Text>
				<ul>
					<li>
						<input type="radio" name="sitcom" /> Friends
					</li>
					<li>
						<input type="radio" name="sitcom" /> Seinfeld
					</li>
					<li>
						<input type="radio" name="sitcom" /> The Fresh Prince of Bel-Air
					</li>
					<li>
						<input type="radio" name="sitcom" /> Frasier
					</li>
				</ul>
				<button>Vote</button>
			</LayoutSidebarRight>
			<LayoutMain>
				<Text variant="paragraph">Welcome to the 90s Nostalgia Zone!</Text>
				<p>
					Take a trip down memory lane and relive the best decade ever! Our
					website is dedicated to everything that made the 90s unique - from our
					favorite TV shows and music, to the toys and games we loved to play.
					So, grab a Surge soda, put on your LA Lights sneakers, and let's dive
					into the world of 90s nostalgia!
				</p>
			</LayoutMain>
		</FlexibleLayout>
	),
};
