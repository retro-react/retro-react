import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Container } from '@src/components/container';
import { Tooltip } from '../Tooltip';

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
	argTypes: {
		children: {
			control: false,
		},
	},
} as ComponentMeta<typeof Tooltip>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Container
		sx={{
			// center the container
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '50vh',
			border: '1px solid ',
		}}
	>
		<Tooltip {...args}>
			<span>Hover over me</span>
		</Tooltip>
	</Container>
);

export const Default = Template.bind({});
Default.args = {
	label: 'Hasta La Vista Baby',
	color: 'primary',
	position: 'top',
	delay: 100,
};
