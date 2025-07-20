import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
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
		},
		size: {
			control: { type: 'select' },
			options: ['small', 'medium', 'large'],
		},
	},
} as ComponentMeta<typeof Button>;

/**
 * Component Template
 */
const Template: ComponentStory<typeof Button> = (args) => {
	return (
		<div style={{ padding: '20px', background: '#C0C0C0' }}>
			<Button {...args} />
			&nbsp;&nbsp;
			<Button {...args} disabled />
		</div>
	);
};

const AllVariantsTemplate: ComponentStory<typeof Button> = (args) => {
	return (
		<div
			style={{
				padding: '20px',
				background: '#C0C0C0',
				display: 'grid',
				gap: '10px',
			}}
		>
			<div>
				<strong>Primary Variant:</strong>
				<br />
				<Button {...args} variant="primary" />
				&nbsp;&nbsp;
				<Button {...args} variant="primary" disabled />
			</div>
			<div>
				<strong>Outline Variant:</strong>
				<br />
				<Button {...args} variant="outline" />
				&nbsp;&nbsp;
				<Button {...args} variant="outline" disabled />
			</div>
			<div>
				<strong>Flat Variant:</strong>
				<br />
				<Button {...args} variant="flat" />
				&nbsp;&nbsp;
				<Button {...args} variant="flat" disabled />
			</div>
		</div>
	);
};

const AllRetroVariantsTemplate: ComponentStory<typeof Button> = () => {
	const variants: Array<
		'primary' | 'secondary' | 'success' | 'warning' | 'outline' | 'flat'
	> = ['primary', 'secondary', 'success', 'warning', 'outline', 'flat'];

	return (
		<div
			style={{
				padding: '20px',
				background: '#C0C0C0',
				display: 'grid',
				gap: '10px',
			}}
		>
			{variants.map((variant) => (
				<div key={variant}>
					<strong>{variant.charAt(0).toUpperCase() + variant.slice(1)}:</strong>
					<br />
					<Button variant={variant}>
						{variant.charAt(0).toUpperCase() + variant.slice(1)}
					</Button>
					&nbsp;&nbsp;
					<Button variant={variant} disabled>
						Disabled
					</Button>
				</div>
			))}
		</div>
	);
};

const AllSizesTemplate: ComponentStory<typeof Button> = (args) => {
	return (
		<div
			style={{
				padding: '20px',
				background: '#C0C0C0',
				display: 'flex',
				alignItems: 'center',
				gap: '10px',
			}}
		>
			<Button {...args} size="small">
				Small
			</Button>
			<Button {...args} size="medium">
				Medium
			</Button>
			<Button {...args} size="large">
				Large
			</Button>
		</div>
	);
};

// Stories

export const Default = Template.bind({});
Default.args = {
	children: 'Button',
	onClick: action('clicked'),
	variant: 'primary',
};

export const AllVariants = AllVariantsTemplate.bind({});
AllVariants.args = {
	children: 'Button',
	onClick: action('clicked'),
};

export const AllRetroVariants = AllRetroVariantsTemplate.bind({});

export const AllSizes = AllSizesTemplate.bind({});
AllSizes.args = {
	children: 'Button',
	onClick: action('clicked'),
	variant: 'primary',
};

export const Primary = Template.bind({});
Primary.args = {
	children: 'Primary',
	onClick: action('clicked'),
	variant: 'primary',
};

export const Secondary = Template.bind({});
Secondary.args = {
	children: 'Secondary',
	onClick: action('clicked'),
	variant: 'secondary',
};

export const Success = Template.bind({});
Success.args = {
	children: 'Success',
	onClick: action('clicked'),
	variant: 'success',
};

export const Warning = Template.bind({});
Warning.args = {
	children: 'Warning',
	onClick: action('clicked'),
	variant: 'warning',
};

export const Outline = Template.bind({});
Outline.args = {
	children: 'Outline',
	onClick: action('clicked'),
	variant: 'outline',
};

export const Flat = Template.bind({});
Flat.args = {
	children: 'Flat',
	onClick: action('clicked'),
	variant: 'flat',
};
