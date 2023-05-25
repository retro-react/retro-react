import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Radio, RadioGroup } from '../index';

const meta: Meta<typeof RadioGroup> = {
	title: 'Forms/RadioGroup',
	component: RadioGroup,
};

export default meta;
type Story = StoryObj<typeof RadioGroup>;

export const Basic: Story = {
	args: {
		color: 'primary',
		defaultValue: 'playstation',
		disabled: false,
	},
	render(args) {
		const [value, setValue] = useState(args.defaultValue);

		return (
			<Container>
				<RadioGroup {...args} onChange={setValue}>
					<Radio label="Super Nintendo" name="console" value="snes" />
					<Radio label="Sega Genesis" name="console" value="genesis" />
					<Radio label="Sony PlayStation" name="console" value="playstation" />
				</RadioGroup>
				<Text
					sx={{
						mt: 4,
					}}
					color={args.color}
				>
					Selected: {value}
				</Text>
			</Container>
		);
	},
};
