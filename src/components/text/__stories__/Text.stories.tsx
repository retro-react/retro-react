import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '../index';

const meta: Meta<typeof Text> = {
	title: 'Components/Text',
	component: Text,
	argTypes: {
		color: { control: 'color' },
		variant: {
			control: 'select',
			options: [
				'h1',
				'h2',
				'h3',
				'h4',
				'h5',
				'h6',
				'body1',
				'body2',
				'paragraph',
				'small',
			],
			description:
				'Typographic variant. Headings render semantic h1-h6 tags, others render p.',
		},
		bevel: {
			control: 'boolean',
			description: 'Apply a beveled emboss effect.',
		},
		blink: {
			control: 'boolean',
			description: 'Animate the text with a blink.',
		},
		align: {
			control: 'inline-radio',
			options: ['left', 'center', 'right', 'justify'],
		},
	},
};

export default meta;
type Story = StoryObj<typeof Text>;

export const Default: Story = {
	args: {
		children:
			'It was the best of times, it was the worst of times, and retro-react was on the screen.',
		variant: 'paragraph',
		color: '#000000',
	},
};

export const Variants: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			<Text variant="h1">Heading 1</Text>
			<Text variant="h2">Heading 2</Text>
			<Text variant="h3">Heading 3</Text>
			<Text variant="h4">Heading 4</Text>
			<Text variant="h5">Heading 5</Text>
			<Text variant="h6">Heading 6</Text>
			<Text variant="paragraph">
				Paragraph, used for blocks of running prose.
			</Text>
			<Text variant="body1">Body 1, primary body copy.</Text>
			<Text variant="body2">Body 2, secondary body copy.</Text>
			<Text variant="small">Small, fine print.</Text>
		</div>
	),
};

export const Colors: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
			<Text color="primary">Primary</Text>
			<Text color="secondary">Secondary</Text>
			<Text color="success">Success</Text>
			<Text color="error">Error</Text>
			<Text color="warn">Warn</Text>
			<Text color="rainbow" variant="h3">
				Somewhere over the rainbow
			</Text>
		</div>
	),
};

export const Effects: Story = {
	render: () => (
		<div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
			<Text variant="h3" bevel>
				Beveled heading
			</Text>
			<Text blink color="error">
				Blinking warning text
			</Text>
		</div>
	),
};
