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
	children: (
		<p style={{ background: 'beige', padding: '20px' }}>
			max-width default is 1024px.
		</p>
	),
};
