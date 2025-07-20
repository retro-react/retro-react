import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { Text } from '@src/components/text';
import { PasswordInput } from '../PasswordInput';

// https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Forms/PasswordInput',
	component: PasswordInput,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['classic', 'filled', 'outlined', 'terminal'],
			description: 'The visual variant of the password input',
		},
		size: {
			control: { type: 'radio' },
			options: ['small', 'medium', 'large'],
			description: 'The size of the password input',
		},
		showToggle: {
			control: { type: 'boolean' },
			description: 'Whether to show the password visibility toggle',
		},
		disabled: {
			control: { type: 'boolean' },
			description: 'Whether the input is disabled',
		},
		children: {
			control: false,
		},
	},
} as ComponentMeta<typeof PasswordInput>;

const TextValue = ({ value }: { value: string }) => (
	<>
		<br />
		<Text>
			Entered password: {value ? '●'.repeat(value.length) : '(empty)'}
		</Text>
	</>
);

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof PasswordInput> = ({ ...args }) => {
	const [value, setValue] = React.useState('');

	return (
		<div style={{ minHeight: '200px', padding: '2rem' }}>
			<Text>Enter a password to test the retro password input:</Text>
			<br />
			<PasswordInput
				{...args}
				value={value}
				placeholder="Enter password..."
				onPasswordChange={(val) => setValue(val)}
			/>
			<TextValue value={value} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	variant: 'filled',
	size: 'medium',
	showToggle: true,
};

/**
 * Shows all four retro variants side by side for comparison
 */
export const AllVariants: ComponentStory<typeof PasswordInput> = () => {
	const [values, setValues] = React.useState({
		classic: '',
		filled: '',
		outlined: '',
		terminal: '',
	});

	const handleChange = (variant: string, value: string) => {
		setValues((prev) => ({ ...prev, [variant]: value }));
	};

	return (
		<div
			style={{
				padding: '2rem',
				display: 'flex',
				flexDirection: 'column',
				gap: '1.5rem',
			}}
		>
			<Text>Password input variants showcase:</Text>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
					gap: '1rem',
				}}
			>
				<div>
					<Text>Classic (Deep Windows 95 sunken):</Text>
					<br />
					<PasswordInput
						variant="classic"
						placeholder="Windows 95 style..."
						value={values.classic}
						onPasswordChange={(val) => handleChange('classic', val)}
					/>
				</div>

				<div>
					<Text>Filled (Raised 3D button):</Text>
					<br />
					<PasswordInput
						variant="filled"
						placeholder="3D raised style..."
						value={values.filled}
						onPasswordChange={(val) => handleChange('filled', val)}
					/>
				</div>

				<div>
					<Text>Outlined (Flat with border):</Text>
					<br />
					<PasswordInput
						variant="outlined"
						placeholder="Clean outlined..."
						value={values.outlined}
						onPasswordChange={(val) => handleChange('outlined', val)}
					/>
				</div>

				<div>
					<Text>Terminal (Console aesthetic):</Text>
					<br />
					<PasswordInput
						variant="terminal"
						placeholder="terminal:// access..."
						value={values.terminal}
						onPasswordChange={(val) => handleChange('terminal', val)}
					/>
				</div>
			</div>
		</div>
	);
};

/**
 * Shows different sizes
 */
export const Sizes: ComponentStory<typeof PasswordInput> = () => (
	<div
		style={{
			padding: '2rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
		}}
	>
		<Text>Password input sizes:</Text>

		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			<Text>Small:</Text>
			<PasswordInput size="small" placeholder="Small..." />
		</div>

		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			<Text>Medium:</Text>
			<PasswordInput size="medium" placeholder="Medium..." />
		</div>

		<div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
			<Text>Large:</Text>
			<PasswordInput size="large" placeholder="Large..." />
		</div>
	</div>
);

/**
 * Shows disabled states
 */
export const Disabled: ComponentStory<typeof PasswordInput> = () => (
	<div
		style={{
			padding: '2rem',
			display: 'flex',
			flexDirection: 'column',
			gap: '1rem',
		}}
	>
		<Text>Disabled password inputs:</Text>

		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
				gap: '1rem',
			}}
		>
			<PasswordInput
				variant="classic"
				disabled
				placeholder="Disabled classic"
			/>
			<PasswordInput variant="filled" disabled placeholder="Disabled filled" />
			<PasswordInput
				variant="outlined"
				disabled
				placeholder="Disabled outlined"
			/>
			<PasswordInput
				variant="terminal"
				disabled
				placeholder="Disabled terminal"
			/>
		</div>
	</div>
);

/**
 * Shows password input without toggle button
 */
export const WithoutToggle: ComponentStory<typeof PasswordInput> = () => (
	<div style={{ padding: '2rem' }}>
		<Text>Password input without visibility toggle:</Text>
		<br />
		<PasswordInput showToggle={false} placeholder="No toggle button..." />
	</div>
);
