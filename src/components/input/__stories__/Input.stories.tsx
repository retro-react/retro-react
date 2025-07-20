import { action } from '@storybook/addon-actions';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Input } from '../index';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/Input',
	component: Input,
	argTypes: {
		variant: {
			options: ['classic', 'filled', 'outlined', 'terminal'],
			control: { type: 'radio' },
		},
		size: {
			options: ['small', 'medium'],
			control: { type: 'radio' },
		},
	},
} as ComponentMeta<typeof Input>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Input> = (args) => {
	return (
		<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
			<Input {...args} />
			<Input {...args} disabled />
		</div>
	);
};

const VariantsTemplate: ComponentStory<typeof Input> = (args) => {
	return (
		<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Classic:
				</div>
				<Input
					{...args}
					variant="classic"
					placeholder="Deep sunken Windows 95 style"
				/>
			</div>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Filled:
				</div>
				<Input
					{...args}
					variant="filled"
					placeholder="Prominent 3D raised style"
				/>
			</div>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Outlined:
				</div>
				<Input
					{...args}
					variant="outlined"
					placeholder="Clean flat border style"
				/>
			</div>
			<div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
				<div
					style={{
						width: '80px',
						fontFamily: 'MS Sans Serif',
						fontSize: '11px',
					}}
				>
					Terminal:
				</div>
				<Input
					{...args}
					variant="terminal"
					placeholder="Subtle console style"
				/>
			</div>
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	placeholder: 'Enter text...',
	onChange: action('onChange'),
	variant: 'filled',
	size: 'medium',
	sx: { width: '250px' },
};

export const AllVariants = VariantsTemplate.bind({});
AllVariants.args = {
	onChange: action('onChange'),
	size: 'medium',
	sx: { width: '300px' },
};

export const Multiline = Template.bind({});
Multiline.args = {
	placeholder: 'Enter a longer message...',
	onChange: action('onChange'),
	variant: 'classic',
	size: 'medium',
	multiline: true,
	rows: 4,
	sx: { width: '300px' },
};

export const TerminalStyle = Template.bind({});
TerminalStyle.args = {
	placeholder: 'C:\\Users\\> _',
	onChange: action('onChange'),
	variant: 'terminal',
	size: 'medium',
	sx: { width: '400px' },
};
