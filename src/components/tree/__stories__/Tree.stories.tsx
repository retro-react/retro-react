import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@src/components/text';
import { Tree } from '../index';

const meta: Meta<typeof Tree> = {
	title: 'Experimental/Tree',
	component: Tree,
};

export default meta;
type Story = StoryObj<typeof Tree>;

export const Basic: Story = {
	args: {
		color: 'greyscale',
		defaultCollapsed: false,
		data: [
			{
				label: 'Root',
				content: <Text variant="paragraph">This is some content</Text>,
				children: [
					{
						label: 'Child 1',
						content: 'This is some content',
						children: [
							{
								label: 'Grandchild 1.1',
								content: 'This is some other content',
							},
							{
								label: 'Grandchild 1.2',
							},
						],
					},
					{
						label: 'Child 2',
					},
					{
						label: 'Child 3',
						children: [
							{
								label: 'Grandchild 3.1',
							},
							{
								label: 'Grandchild 3.2',
								collapsed: true,
								children: [
									{
										label: 'Great-grandchild 3.2.1',
										content: 'This is some more content',
									},
								],
							},
						],
					},
				],
			},
		],
	},
	render: (args) => (
		<>
			<Text variant="body2">Tree Component Example</Text>
			<br />
			<Tree {...args} />
		</>
	),
};
