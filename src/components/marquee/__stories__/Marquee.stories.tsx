import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Marquee } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Components/Marquee',
	component: Marquee,
} as ComponentMeta<typeof Marquee>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Marquee> = (args) => {
	return <Marquee {...args} />;
};

export const Default = Template.bind({});
Default.args = {
	children: 'The quick brown fox jumps over the lazy dog.',
	color: '#000000',
	speed: '20s',
	size: 'medium',
	gap: '1rem',
};
