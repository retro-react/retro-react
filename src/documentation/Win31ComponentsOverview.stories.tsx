import type { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Button } from '../components/button';
import { Carousel } from '../components/carousel';
import { Input } from '../components/input';
import { Menu, MenuItem } from '../components/menu';
import { Modal } from '../components/modal';
import { Popover } from '../components/popover';
import { ProgressBar } from '../components/progress_bar';
import { Radio, RadioGroup } from '../components/radio';
import { Skeleton } from '../components/skeleton';
import { Spinner } from '../components/spinner';
import { Tab, TabContent, Tabs } from '../components/tabs';

const meta: Meta = {
	title: 'Overview/Retro Components',
	parameters: {
		docs: {
			description: {
				component:
					'A comprehensive overview of all retro-styled components available in the react-retro library.',
			},
		},
		layout: 'fullscreen',
	},
};

export default meta;

const WIN31_BACKGROUND = {
	background:
		'linear-gradient(45deg, #c0c0c0 25%, transparent 25%), linear-gradient(-45deg, #c0c0c0 25%, transparent 25%), linear-gradient(45deg, transparent 75%, #c0c0c0 75%), linear-gradient(-45deg, transparent 75%, #c0c0c0 75%)',
	backgroundSize: '2px 2px',
	backgroundPosition: '0 0, 0 1px, 1px -1px, -1px 0px',
	backgroundColor: '#c0c0c0',
	minHeight: '100vh',
	padding: '20px',
	fontFamily: 'MS Sans Serif, sans-serif',
	fontSize: '11px',
};

const ComponentSection = ({
	title,
	children,
}: {
	title: string;
	children: React.ReactNode;
}) => (
	<div
		style={{
			marginBottom: '30px',
			padding: '15px',
			background: '#c0c0c0',
			border: '2px solid',
			borderColor: '#ffffff #808080 #808080 #ffffff',
			boxShadow: '1px 1px 2px rgba(0,0,0,0.3)',
		}}
	>
		<h3
			style={{
				margin: '0 0 15px 0',
				fontFamily: 'MS Sans Serif, sans-serif',
				fontSize: '13px',
				fontWeight: 'bold',
				color: '#000000',
			}}
		>
			{title}
		</h3>
		{children}
	</div>
);

const FlexContainer = ({
	children,
	gap = 10,
}: {
	children: React.ReactNode;
	gap?: number;
}) => (
	<div
		style={{
			display: 'flex',
			flexWrap: 'wrap',
			gap: `${gap}px`,
			alignItems: 'center',
		}}
	>
		{children}
	</div>
);

export const ComponentsOverview: Story = () => {
	const [modalOpen, setModalOpen] = useState(false);

	return (
		<div style={WIN31_BACKGROUND}>
			<div
				style={{
					maxWidth: '1200px',
					margin: '0 auto',
				}}
			>
				<h1
					style={{
						textAlign: 'center',
						marginBottom: '30px',
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '18px',
						fontWeight: 'bold',
						color: '#000000',
					}}
				>
					Retro Component Library
				</h1>

				<ComponentSection title="Buttons">
					<FlexContainer>
						<Button variant="primary">Primary</Button>
						<Button variant="outline">Outline</Button>
						<Button variant="flat">Flat</Button>
						<Button variant="primary" disabled>
							Disabled
						</Button>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Form Controls">
					<FlexContainer gap={20}>
						<div>
							<label
								style={{
									display: 'block',
									marginBottom: '5px',
									fontSize: '11px',
								}}
							>
								Text Input:
							</label>
							<Input placeholder="Enter text..." style={{ width: '150px' }} />
						</div>
						<div>
							<label
								style={{
									display: 'block',
									marginBottom: '5px',
									fontSize: '11px',
								}}
							>
								Password:
							</label>
							<Input
								type="password"
								placeholder="Password"
								style={{ width: '150px' }}
							/>
						</div>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Radio Buttons">
					<RadioGroup
						defaultValue="option1"
						style={{ display: 'flex', gap: '15px' }}
					>
						<Radio value="option1" label="Windows" />
						<Radio value="option2" label="DOS" />
						<Radio value="option3" label="OS/2" />
					</RadioGroup>
				</ComponentSection>

				<ComponentSection title="Navigation">
					<div style={{ marginBottom: '20px' }}>
						<Tabs defaultActiveTabLabel="General">
							<Tab label="General" />
							<Tab label="Advanced" />
							<Tab label="About" />
							<TabContent label="General">
								<div style={{ padding: '15px' }}>
									General settings and preferences
								</div>
							</TabContent>
							<TabContent label="Advanced">
								<div style={{ padding: '15px' }}>
									Advanced configuration options
								</div>
							</TabContent>
							<TabContent label="About">
								<div style={{ padding: '15px' }}>About this application</div>
							</TabContent>
						</Tabs>
					</div>
					<div>
						<Menu>
							<MenuItem>File</MenuItem>
							<MenuItem>Edit</MenuItem>
							<MenuItem>View</MenuItem>
							<MenuItem>Tools</MenuItem>
							<MenuItem>Help</MenuItem>
						</Menu>
					</div>
				</ComponentSection>

				<ComponentSection title="Progress & Loading">
					<FlexContainer gap={20}>
						<div>
							<div style={{ marginBottom: '10px', fontSize: '11px' }}>
								Progress Bar:
							</div>
							<ProgressBar value={65} style={{ width: '200px' }} />
						</div>
						<div>
							<div style={{ marginBottom: '10px', fontSize: '11px' }}>
								Loading Spinners:
							</div>
							<FlexContainer gap={15}>
								<Spinner variant="hourglass" />
								<Spinner variant="dots" />
								<Spinner variant="bars" />
								<Spinner variant="rotating" />
							</FlexContainer>
						</div>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Content Display">
					<FlexContainer gap={20}>
						<div>
							<div style={{ marginBottom: '10px', fontSize: '11px' }}>
								Loading Skeleton:
							</div>
							<div style={{ width: '200px' }}>
								<Skeleton
									effect="scanlines"
									style={{ height: '20px', marginBottom: '5px' }}
								/>
								<Skeleton
									effect="dither"
									style={{ height: '20px', marginBottom: '5px' }}
								/>
								<Skeleton effect="processing" style={{ height: '20px' }} />
							</div>
						</div>
						<div>
							<div style={{ marginBottom: '10px', fontSize: '11px' }}>
								Image Carousel:
							</div>
							<Carousel style={{ width: '220px' }}>
								<div
									style={{
										width: '200px',
										height: '150px',
										backgroundColor: '#0000ff',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										border: '1px solid #000000',
									}}
								>
									Image 1
								</div>
								<div
									style={{
										width: '200px',
										height: '150px',
										backgroundColor: '#ff0000',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										border: '1px solid #000000',
									}}
								>
									Image 2
								</div>
								<div
									style={{
										width: '200px',
										height: '150px',
										backgroundColor: '#008000',
										color: '#ffffff',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										border: '1px solid #000000',
									}}
								>
									Image 3
								</div>
							</Carousel>
						</div>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Dialogs & Overlays">
					<FlexContainer gap={15}>
						<Button variant="primary" onClick={() => setModalOpen(true)}>
							Open Dialog
						</Button>
						<Popover content="System Information - Windows 3.1 - Available memory: 4MB">
							<Button variant="outline">Show Info</Button>
						</Popover>
					</FlexContainer>
				</ComponentSection>

				<Modal
					open={modalOpen}
					onClose={() => setModalOpen(false)}
					title="System Properties"
				>
					<div style={{ padding: '20px' }}>
						<p style={{ marginBottom: '15px', fontSize: '11px' }}>
							This is a retro-style dialog box with authentic classic styling
							and behavior.
						</p>
						<FlexContainer gap={10}>
							<Button variant="primary" onClick={() => setModalOpen(false)}>
								OK
							</Button>
							<Button variant="outline" onClick={() => setModalOpen(false)}>
								Cancel
							</Button>
						</FlexContainer>
					</div>
				</Modal>

				<div
					style={{
						marginTop: '40px',
						padding: '20px',
						background: '#c0c0c0',
						border: '1px solid #808080',
						textAlign: 'center',
					}}
				>
					<p style={{ margin: 0, fontSize: '10px', color: '#000000' }}>
						All components feature authentic retro styling with proper
						raised/sunken borders, classic system colors, and traditional
						typography for a genuine vintage experience.
					</p>
				</div>
			</div>
		</div>
	);
};

ComponentsOverview.parameters = {
	docs: {
		description: {
			story:
				'A comprehensive showcase of all retro-styled components available in the library, demonstrating their authentic vintage appearance and functionality.',
		},
	},
};
