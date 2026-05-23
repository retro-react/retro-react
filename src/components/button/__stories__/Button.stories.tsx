import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../index';

export default {
	title: 'Components/Button',
	component: Button,
	argTypes: {
		variant: {
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'warning',
				'outline',
				'flat',
			],
			description: 'Visual style of the button.',
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			description: 'Size of the button.',
		},
		disabled: {
			control: 'boolean',
			description: 'Disables interaction and applies a muted style.',
		},
		disableClickEffect: {
			control: 'boolean',
			description: 'Disables the inset transform that occurs on click.',
		},
		children: {
			control: 'text',
			description: 'Button label.',
		},
	},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
	children: 'Save',
	variant: 'primary',
	size: 'medium',
	onClick: action('clicked'),
};

export const Variants: ComponentStory<typeof Button> = () => (
	<div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
		<Button variant="primary">Primary</Button>
		<Button variant="secondary">Secondary</Button>
		<Button variant="success">Success</Button>
		<Button variant="warning">Warning</Button>
		<Button variant="outline">Outline</Button>
		<Button variant="flat">Flat</Button>
	</div>
);

export const Sizes: ComponentStory<typeof Button> = () => (
	<div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
		<Button size="small">Small</Button>
		<Button size="medium">Medium</Button>
		<Button size="large">Large</Button>
	</div>
);

export const Disabled: ComponentStory<typeof Button> = () => (
	<div style={{ display: 'flex', gap: 8 }}>
		<Button variant="primary" disabled>
			Primary
		</Button>
		<Button variant="outline" disabled>
			Outline
		</Button>
		<Button variant="flat" disabled>
			Flat
		</Button>
	</div>
);
