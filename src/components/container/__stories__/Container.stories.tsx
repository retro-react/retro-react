import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from '../index';

export default {
	title: 'Components/Container',
	component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => (
	<Container {...args} />
);

export const Default = Template.bind({});
Default.args = {
	fluid: false,
	sx: {
		background: 'lightgray',
		py: '10px',
	},
	children: (
		<p
			style={{
				padding: '5px',
			}}
		>
			max-width default is 1024px.
		</p>
	),
};
