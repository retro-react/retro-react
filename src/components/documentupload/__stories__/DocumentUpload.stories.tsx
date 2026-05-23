import type { Meta, StoryObj } from '@storybook/react';
import { DocumentUpload } from '../index';

const meta: Meta<typeof DocumentUpload> = {
	title: 'Forms/DocumentUpload',
	component: DocumentUpload,
	argTypes: {
		color: {
			control: { type: 'select' },
			options: [
				'primary',
				'secondary',
				'success',
				'error',
				'warn',
				'greyscale',
				'greyscale-dark',
			],
			description:
				'Visual color token applied to the dropzone border and accents.',
		},
		accept: {
			description:
				'Comma-separated list of accepted file types, e.g. ".pdf,.png,image/*".',
		},
		isUploading: {
			description:
				'When true, replaces the dropzone with an animated ASCII progress bar.',
		},
		onChange: {
			description: 'Fired with the selected `File` (or `null` when cleared).',
		},
	},
};

export default meta;
type Story = StoryObj<typeof DocumentUpload>;

export const Default: Story = {
	args: {
		color: 'primary',
		accept: '.pdf,.png,.jpg,.doc,.docx',
	},
};

export const Uploading: Story = {
	args: {
		color: 'primary',
		isUploading: true,
	},
};

export const Colors: Story = {
	render: () => (
		<div style={{ display: 'grid', gap: 16, gridTemplateColumns: '1fr 1fr' }}>
			<DocumentUpload color="primary" />
			<DocumentUpload color="success" />
			<DocumentUpload color="warn" />
			<DocumentUpload color="error" />
		</div>
	),
};
