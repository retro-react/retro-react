import type { Meta, StoryObj } from '@storybook/react';
import { DocumentUpload } from '../index';

const meta: Meta<typeof DocumentUpload> = {
	title: 'Forms/DocumentUpload',
	component: DocumentUpload,
};

export default meta;
type Story = StoryObj<typeof DocumentUpload>;

export const Basic: Story = {
	args: {
		color: 'primary',
		onChange: (file) => {
			/* Changed: ${file} */
		},
	},
};
