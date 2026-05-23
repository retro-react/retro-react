import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Text } from '../../../components/text';
import { Radio, RadioGroup } from '../index';

const meta: Meta<typeof RadioGroup> = {
	title: 'Forms/RadioGroup',
	component: RadioGroup,
	parameters: {
		docs: {
			description: {
				component:
					'Windows 3.1 style radio buttons for single-selection forms. Wrap `Radio` children inside a `RadioGroup` and share a `name`.',
			},
		},
	},
	argTypes: {
		defaultValue: { description: 'Initial selected value (uncontrolled).' },
		value: { description: 'Selected value when controlled.' },
		disabled: {
			control: { type: 'boolean' },
			description: 'Disable every radio in the group.',
		},
	},
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

const label = { fontFamily: 'MS Sans Serif, sans-serif', fontSize: '11px' };

export const Default: Story = {
	args: { defaultValue: 'card' },
	render: (args) => {
		const [value, setValue] = useState(args.defaultValue);
		return (
			<div style={{ maxWidth: 320 }}>
				<Text sx={{ ...label, mb: 2, fontWeight: 'bold' }}>
					Choose payment method:
				</Text>
				<RadioGroup {...args} onChange={setValue}>
					<Radio label="Credit card" name="payment" value="card" />
					<Radio label="PayPal" name="payment" value="paypal" />
					<Radio label="Bank transfer" name="payment" value="bank" />
					<Radio label="Cash on delivery" name="payment" value="cod" />
				</RadioGroup>
				<Text sx={{ ...label, mt: 2 }}>Selected: {value}</Text>
			</div>
		);
	},
};

export const Disabled: Story = {
	args: { defaultValue: 'windows', disabled: true },
	render: (args) => (
		<div style={{ maxWidth: 320 }}>
			<Text sx={{ ...label, mb: 2, fontWeight: 'bold' }}>
				Operating system:
			</Text>
			<RadioGroup {...args}>
				<Radio label="Windows 3.1" name="os" value="windows" />
				<Radio label="MS-DOS 6.22" name="os" value="msdos" />
				<Radio label="OS/2 Warp" name="os" value="os2" />
			</RadioGroup>
		</div>
	),
};

export const WithLongLabels: Story = {
	args: { defaultValue: 'balanced' },
	render: (args) => {
		const [value, setValue] = useState(args.defaultValue);
		return (
			<div style={{ maxWidth: 420 }}>
				<Text sx={{ ...label, mb: 2, fontWeight: 'bold' }}>Power plan:</Text>
				<RadioGroup {...args} onChange={setValue}>
					<Radio
						label="High Performance — maximum speed and responsiveness"
						name="config"
						value="performance"
					/>
					<Radio
						label="Balanced — good performance with power efficiency"
						name="config"
						value="balanced"
					/>
					<Radio
						label="Power Saver — extended battery life on laptops"
						name="config"
						value="powersaver"
					/>
				</RadioGroup>
				<Text sx={{ ...label, mt: 2 }}>Selected: {value}</Text>
			</div>
		);
	},
};
