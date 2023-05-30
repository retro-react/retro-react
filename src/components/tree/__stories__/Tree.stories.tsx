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
										content: (
											<>
												<p>
													Lorem ipsum dolor sit amet, consectetur adipiscing
													elit, sed do eiusmod tempor incididunt ut labore et
													dolore magna aliqua. Nisl rhoncus mattis rhoncus urna
													neque. Est pellentesque elit ullamcorper dignissim
													cras. Venenatis cras sed felis eget velit aliquet
													sagittis id consectetur. Aliquet nibh praesent
													tristique magna sit amet. Aenean euismod elementum
													nisi quis eleifend quam adipiscing vitae. Viverra
													ipsum nunc aliquet bibendum enim facilisis gravida. In
													tellus integer feugiat scelerisque varius morbi enim
													nunc faucibus.
												</p>
												<p>
													Pellentesque massa placerat duis ultricies lacus sed.
													Risus viverra adipiscing at in. At consectetur lorem
													donec massa sapien faucibus et. Nunc sed blandit
													libero volutpat sed cras ornare arcu. Habitasse platea
													dictumst vestibulum rhoncus est pellentesque elit
													ullamcorper. Et odio pellentesque diam volutpat
													commodo. Aliquam sem fringilla ut morbi tincidunt.
													Quis eleifend quam adipiscing vitae. Velit sed
													ullamcorper morbi tincidunt ornare massa eget. Rhoncus
													urna neque viverra justo nec. Lorem dolor sed viverra
													ipsum nunc aliquet bibendum enim facilisis. Nulla
													aliquet porttitor lacus luctus accumsan tortor posuere
													ac ut.
												</p>
											</>
										),
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
