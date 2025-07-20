import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from '@src/components/button';
import { Container } from '@src/components/container';
import { Text } from '@src/components/text';
import { Tooltip } from '../Tooltip';

export default {
	title: 'Components/Tooltip',
	component: Tooltip,
	argTypes: {
		variant: {
			control: { type: 'radio' },
			options: ['default', 'help', 'warning', 'info'],
			description: 'The visual variant of the tooltip',
		},
		position: {
			control: { type: 'radio' },
			options: ['top', 'bottom', 'left', 'right'],
			description: 'The position of the tooltip relative to the trigger',
		},
		delay: {
			control: { type: 'number', min: 0, max: 2000, step: 100 },
			description: 'Delay in milliseconds before showing the tooltip',
		},
		children: {
			control: false,
		},
	},
} as ComponentMeta<typeof Tooltip>;

/**
 * Component Template
 *
 * @see https://storybook.js.org/docs/react/writing-stories/introduction#using-args
 */
const Template: ComponentStory<typeof Tooltip> = (args) => (
	<Container
		sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			height: '50vh',
			border: '1px solid #ccc',
		}}
	>
		<Tooltip {...args}>
			<Button>Hover over me</Button>
		</Tooltip>
	</Container>
);

export const Default = Template.bind({});
Default.args = {
	label: 'Classic Windows 95 style tooltip - just like the old help bubbles!',
	variant: 'default',
	position: 'top',
	delay: 100, // Reduced delay for easier testing
};

/**
 * Shows all tooltip variants in different positions
 */
export const AllVariants: ComponentStory<typeof Tooltip> = () => (
	<Container
		sx={{
			display: 'flex',
			flexDirection: 'column',
			justifyContent: 'center',
			alignItems: 'center',
			minHeight: '60vh',
			padding: '2rem',
		}}
	>
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: 'repeat(2, 1fr)',
				gap: '4rem',
				justifyItems: 'center',
				alignItems: 'center',
			}}
		>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1rem',
				}}
			>
				<Text>Default (Classic yellow):</Text>
				<Tooltip
					label="This is the classic Windows help tooltip style"
					variant="default"
					position="top"
					delay={100}
				>
					<Button size="small">Help</Button>
				</Tooltip>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1rem',
				}}
			>
				<Text>Help (Blue accent):</Text>
				<Tooltip
					label="Need assistance? This is a help tooltip"
					variant="help"
					position="top"
					delay={100}
				>
					<Button size="small">?</Button>
				</Tooltip>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1rem',
				}}
			>
				<Text>Warning (Red accent):</Text>
				<Tooltip
					label="Careful! This action cannot be undone"
					variant="warning"
					position="bottom"
					delay={100}
				>
					<Button size="small">Delete</Button>
				</Tooltip>
			</div>

			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					gap: '1rem',
				}}
			>
				<Text>Info (System colors):</Text>
				<Tooltip
					label="Additional information about this feature"
					variant="info"
					position="bottom"
					delay={100}
				>
					<Button size="small">Info</Button>
				</Tooltip>
			</div>
		</div>
	</Container>
);

/**
 * Shows tooltips in different positions
 */
export const Positions: ComponentStory<typeof Tooltip> = () => (
	<div
		style={{
			padding: '6rem',
			display: 'grid',
			gridTemplateColumns: 'repeat(2, 1fr)',
			gap: '4rem',
			justifyItems: 'center',
		}}
	>
		<Tooltip label="Tooltip on top" position="top" delay={100}>
			<Button>Top</Button>
		</Tooltip>
		<Tooltip label="Tooltip on right" position="right" delay={100}>
			<Button>Right</Button>
		</Tooltip>
		<Tooltip label="Tooltip on bottom" position="bottom" delay={100}>
			<Button>Bottom</Button>
		</Tooltip>
		<Tooltip label="Tooltip on left" position="left" delay={100}>
			<Button>Left</Button>
		</Tooltip>
	</div>
);

/**
 * Shows tooltips with different delays
 */
export const WithDelays: ComponentStory<typeof Tooltip> = () => (
	<div
		style={{
			padding: '4rem',
			display: 'flex',
			gap: '3rem',
			justifyContent: 'center',
		}}
	>
		<Tooltip label="Instant tooltip (no delay)" delay={0}>
			<Button size="small">No delay</Button>
		</Tooltip>
		<Tooltip label="Shows after 500ms" delay={500}>
			<Button size="small">500ms delay</Button>
		</Tooltip>
		<Tooltip label="Shows after 1 second" delay={1000}>
			<Button size="small">1s delay</Button>
		</Tooltip>
	</div>
);

/**
 * Tests tooltip positioning at screen edges and in constrained containers
 */
export const EdgeCasesAndConstraints: ComponentStory<typeof Tooltip> = () => (
	<div
		style={{
			position: 'relative',
			height: '400px',
			overflow: 'auto',
			border: '2px solid #ccc',
			padding: '20px',
		}}
	>
		{/* Top edge */}
		<div
			style={{
				position: 'absolute',
				top: '10px',
				left: '50%',
				transform: 'translateX(-50%)',
			}}
		>
			<Tooltip
				label="Tooltip near top edge - should adjust position"
				position="top"
				delay={100}
			>
				<Button size="small">Top Edge</Button>
			</Tooltip>
		</div>

		{/* Left edge */}
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '10px',
				transform: 'translateY(-50%)',
			}}
		>
			<Tooltip
				label="Tooltip near left edge - should adjust position"
				position="left"
				delay={100}
			>
				<Button size="small">Left Edge</Button>
			</Tooltip>
		</div>

		{/* Right edge */}
		<div
			style={{
				position: 'absolute',
				top: '50%',
				right: '10px',
				transform: 'translateY(-50%)',
			}}
		>
			<Tooltip
				label="Tooltip near right edge - should adjust position"
				position="right"
				delay={100}
			>
				<Button size="small">Right Edge</Button>
			</Tooltip>
		</div>

		{/* Bottom edge */}
		<div
			style={{
				position: 'absolute',
				bottom: '10px',
				left: '50%',
				transform: 'translateX(-50%)',
			}}
		>
			<Tooltip
				label="Tooltip near bottom edge - should adjust position"
				position="bottom"
				delay={100}
			>
				<Button size="small">Bottom Edge</Button>
			</Tooltip>
		</div>

		{/* Center - normal behavior */}
		<div
			style={{
				position: 'absolute',
				top: '50%',
				left: '50%',
				transform: 'translate(-50%, -50%)',
			}}
		>
			<Tooltip label="Normal centered tooltip" position="top" delay={100}>
				<Button>Center</Button>
			</Tooltip>
		</div>

		{/* Long tooltip text */}
		<div
			style={{
				position: 'absolute',
				top: '200px',
				left: '50%',
				transform: 'translateX(-50%)',
			}}
		>
			<Tooltip
				label="This is a very long tooltip text that should wrap properly and not cause positioning issues even when it's quite lengthy"
				position="bottom"
				delay={100}
			>
				<Button size="small">Long Text</Button>
			</Tooltip>
		</div>

		{/* Multiple tooltips in a row */}
		<div
			style={{
				position: 'absolute',
				bottom: '100px',
				left: '50%',
				transform: 'translateX(-50%)',
				display: 'flex',
				gap: '10px',
			}}
		>
			<Tooltip label="Tooltip 1" delay={100}>
				<Button size="small">1</Button>
			</Tooltip>
			<Tooltip label="Tooltip 2" delay={100}>
				<Button size="small">2</Button>
			</Tooltip>
			<Tooltip label="Tooltip 3" delay={100}>
				<Button size="small">3</Button>
			</Tooltip>
		</div>
	</div>
);
