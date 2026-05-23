import type { Meta, Story } from '@storybook/react';
import React, { useState } from 'react';
import { Accordion } from '../components/accordion';
import { Alert } from '../components/alert';
import { Autocomplete } from '../components/autocomplete';
import { Avatar } from '../components/avatar';
import { Badge } from '../components/badge';
import { Box } from '../components/box';
import { Breadcrumbs } from '../components/breadcrumbs';
import { Button } from '../components/button';
import { ButtonGroup } from '../components/buttongroup';
import { Card } from '../components/card';
import { Carousel } from '../components/carousel';
import { Checkbox } from '../components/checkbox';
import { Chip } from '../components/chip';
import { Container } from '../components/container';
import { CRT } from '../components/crt';
import { Divider } from '../components/divider';
import { DocumentUpload } from '../components/documentupload';
import { Drawer } from '../components/drawer';
import { Input } from '../components/input';
import { Marquee } from '../components/marquee';
import { Menu, MenuItem } from '../components/menu';
import { Modal } from '../components/modal';
import { Navbar, NavItem, NavLogo } from '../components/navbar';
import { Pager } from '../components/pager';
import { PasswordInput } from '../components/passwordinput';
import { Popover, PopoverButton, PopoverContent } from '../components/popover';
import { ProgressBar } from '../components/progress_bar';
import { Radio, RadioGroup } from '../components/radio';
import { Select } from '../components/select';
import { SevenSegmentDisplay } from '../components/sevensegmentdisplay';
import { Skeleton } from '../components/skeleton';
import { Slider } from '../components/slider';
import { Spinner } from '../components/spinner';
import { Statistics } from '../components/statistics';
import { Stepper } from '../components/stepper';
import { Switch } from '../components/switch';
import { Table } from '../components/table';
import { Tab, TabContent, Tabs } from '../components/tabs';
import { Terminal } from '../components/terminal';
import { Text } from '../components/text';
import { ToggleButton, ToggleButtonGroup } from '../components/togglebutton';
import { Tooltip } from '../components/tooltip';
import { Tree } from '../components/tree';
import { TypewriterText } from '../components/typewritertext';
import { WordArt } from '../components/wordart';

const meta: Meta = {
	title: 'Overview/Retro Components',
	parameters: {
		docs: {
			description: {
				component: 'Every component in the library, on one page.',
			},
		},
		layout: 'fullscreen',
	},
};

export default meta;

const PAGE_BACKGROUND = {
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
			marginBottom: '20px',
			padding: '15px',
			background: '#c0c0c0',
			border: '2px solid',
			borderColor: '#ffffff #808080 #808080 #ffffff',
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

const GroupHeading = ({ children }: { children: React.ReactNode }) => (
	<h2
		style={{
			margin: '30px 0 12px 0',
			fontFamily: 'MS Sans Serif, sans-serif',
			fontSize: '15px',
			fontWeight: 'bold',
			color: '#000080',
			borderBottom: '2px solid #808080',
			paddingBottom: '4px',
		}}
	>
		{children}
	</h2>
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

const Label = ({ children }: { children: React.ReactNode }) => (
	<div style={{ marginBottom: '5px', fontSize: '11px' }}>{children}</div>
);

const treeData = [
	{
		label: 'C:\\',
		children: [
			{
				label: 'Windows',
				children: [{ label: 'System32' }, { label: 'Temp' }],
			},
			{ label: 'AUTOEXEC.BAT' },
			{ label: 'CONFIG.SYS' },
		],
	},
];

export const ComponentsOverview: Story = () => {
	const [modalOpen, setModalOpen] = useState(false);
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [checked, setChecked] = useState(true);
	const [switchOn, setSwitchOn] = useState(true);
	const [sliderValue, setSliderValue] = useState(60);

	return (
		<div style={PAGE_BACKGROUND}>
			<div
				style={{
					maxWidth: '1200px',
					margin: '0 auto',
				}}
			>
				<h1
					style={{
						textAlign: 'center',
						marginBottom: '20px',
						fontFamily: 'MS Sans Serif, sans-serif',
						fontSize: '18px',
						fontWeight: 'bold',
						color: '#000000',
					}}
				>
					Retro Component Library
				</h1>

				{/* ============ BUTTONS & ACTIONS ============ */}
				<GroupHeading>Buttons &amp; Actions</GroupHeading>

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

				<ComponentSection title="Button Group">
					<ButtonGroup size="medium">
						<Button variant="primary">First</Button>
						<Button variant="secondary">Second</Button>
						<Button variant="success">Third</Button>
					</ButtonGroup>
				</ComponentSection>

				<ComponentSection title="Toggle Buttons">
					<ToggleButtonGroup size="medium" multiple>
						<ToggleButton value="bold" color="greyscale">
							B
						</ToggleButton>
						<ToggleButton value="italic" color="greyscale">
							I
						</ToggleButton>
						<ToggleButton value="underline" color="greyscale">
							U
						</ToggleButton>
					</ToggleButtonGroup>
				</ComponentSection>

				<ComponentSection title="Chips">
					<FlexContainer>
						<Chip color="primary">Pizza</Chip>
						<Chip color="secondary">Sushi</Chip>
						<Chip color="success">Burgers</Chip>
						<Chip color="error">Tacos</Chip>
						<Chip color="highlight">NEW</Chip>
					</FlexContainer>
				</ComponentSection>

				{/* ============ FORM CONTROLS ============ */}
				<GroupHeading>Form Controls</GroupHeading>

				<ComponentSection title="Text Inputs">
					<FlexContainer gap={20}>
						<div>
							<Label>Text Input:</Label>
							<Input placeholder="Enter text..." style={{ width: '150px' }} />
						</div>
						<div>
							<Label>Password Input:</Label>
							<PasswordInput variant="filled" placeholder="Password..." />
						</div>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Autocomplete">
					<div style={{ width: '300px' }}>
						<Autocomplete
							suggestions={[
								'Vinyl records',
								'Cassette tapes',
								'Floppy disks',
								'Rotary phones',
								'Typewriters',
							]}
							variant="filled"
							color="primary"
							size="medium"
							clearable
						/>
					</div>
				</ComponentSection>

				<ComponentSection title="Select">
					<Select variant="filled" size="medium" label="Operating System">
						<option value="">Select system...</option>
						<option value="1">Windows 95</option>
						<option value="2">Windows 98</option>
						<option value="3">Windows ME</option>
					</Select>
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

				<ComponentSection title="Checkbox & Switch">
					<FlexContainer gap={25}>
						<Checkbox
							color="primary"
							label="Enable feature"
							checked={checked}
							onChange={() => setChecked(!checked)}
						/>
						<Switch
							variant="square"
							size="medium"
							color="primary"
							toggled={switchOn}
							onChange={(e) => setSwitchOn(e.target.checked)}
						/>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Slider">
					<div style={{ width: '300px' }}>
						<Label>Value: {sliderValue}</Label>
						<Slider
							value={sliderValue}
							min={0}
							max={100}
							step={1}
							onChange={setSliderValue}
							showTooltip
						/>
					</div>
				</ComponentSection>

				<ComponentSection title="Document Upload">
					<DocumentUpload color="primary" />
				</ComponentSection>

				{/* ============ DATA DISPLAY ============ */}
				<GroupHeading>Data Display</GroupHeading>

				<ComponentSection title="Table">
					<Table
						color="greyscale"
						headers={['Name', 'Age', 'City']}
						data={[
							['John', '30', 'New York'],
							['Jane', '25', 'London'],
							['Jack', '20', 'Paris'],
						]}
						bordered
						sortable
					/>
				</ComponentSection>

				<ComponentSection title="Statistics">
					<FlexContainer gap={20}>
						<Statistics
							color="primary"
							number="1,000"
							label="Total Investments"
							prefix="$"
							size="medium"
							direction="vertical"
						/>
						<Statistics
							color="success"
							number="42"
							label="Active Users"
							size="medium"
							direction="vertical"
						/>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Avatar & Badge">
					<FlexContainer gap={20}>
						<Avatar color="primary">AB</Avatar>
						<Avatar color="secondary" variant="square">
							CD
						</Avatar>
						<Badge color="primary" badgeContent={15} size="medium">
							<div
								style={{
									display: 'grid',
									placeItems: 'center',
									width: '60px',
									height: '60px',
									border: '1px solid #000000',
									background: '#ffffff',
								}}
							>
								Inbox
							</div>
						</Badge>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Tree View">
					<Tree variant="file-manager" data={treeData} />
				</ComponentSection>

				<ComponentSection title="Seven Segment Display">
					<div
						style={{
							background: '#000000',
							padding: '20px',
							display: 'inline-block',
						}}
					>
						<SevenSegmentDisplay
							value={1946}
							color="white"
							segmentThickness="none"
						/>
					</div>
				</ComponentSection>

				<ComponentSection title="Carousel">
					<Carousel style={{ width: '320px' }}>
						<div
							style={{
								width: '100%',
								height: '170px',
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
								width: '100%',
								height: '170px',
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
								width: '100%',
								height: '170px',
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
				</ComponentSection>

				{/* ============ FEEDBACK & STATUS ============ */}
				<GroupHeading>Feedback &amp; Status</GroupHeading>

				<ComponentSection title="Progress & Loading">
					<FlexContainer gap={20}>
						<div>
							<Label>Progress Bar:</Label>
							<ProgressBar value={65} style={{ width: '200px' }} />
						</div>
						<div>
							<Label>Loading Spinners:</Label>
							<FlexContainer gap={15}>
								<Spinner variant="hourglass" />
								<Spinner variant="dots" />
								<Spinner variant="bars" />
								<Spinner variant="rotating" />
							</FlexContainer>
						</div>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Loading Skeleton">
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
				</ComponentSection>

				<ComponentSection title="Alerts">
					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: '10px',
							width: '320px',
						}}
					>
						<Alert color="primary" title="Information">
							The system update completed successfully.
						</Alert>
						<Alert color="warn" title="Warning">
							Low disk space on drive C:.
						</Alert>
						<Alert color="error" title="Error">
							A general protection fault has occurred.
						</Alert>
					</div>
				</ComponentSection>

				<ComponentSection title="Stepper">
					<Container sx={{ width: '100%', maxWidth: '700px' }}>
						<Stepper
							variant="default"
							showLabels
							activeStep={2}
							steps={['Welcome', 'Setup', 'Configuration', 'Review', 'Done']}
						/>
					</Container>
				</ComponentSection>

				{/* ============ NAVIGATION ============ */}
				<GroupHeading>Navigation</GroupHeading>

				<ComponentSection title="Tabs">
					<Tabs defaultActiveTabLabel="General">
						<Tab label="General">General</Tab>
						<Tab label="Advanced">Advanced</Tab>
						<Tab label="About">About</Tab>
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
				</ComponentSection>

				<ComponentSection title="Menu">
					<Menu>
						<MenuItem>File</MenuItem>
						<MenuItem>Edit</MenuItem>
						<MenuItem>View</MenuItem>
						<MenuItem>Tools</MenuItem>
						<MenuItem>Help</MenuItem>
					</Menu>
				</ComponentSection>

				<ComponentSection title="Navbar">
					<Navbar variant="default">
						<NavLogo>
							<Text variant="body2" color="#ffffff" sx={{ fontWeight: 'bold' }}>
								RetroApp
							</Text>
						</NavLogo>
						<NavItem>File</NavItem>
						<NavItem>Edit</NavItem>
						<NavItem>Help</NavItem>
					</Navbar>
				</ComponentSection>

				<ComponentSection title="Breadcrumbs">
					<Breadcrumbs
						items={[
							{ text: 'C:\\', href: '#', icon: '💾' },
							{ text: 'Windows', href: '#', icon: '📁' },
							{ text: 'System32', href: '#', icon: '📁' },
							{ text: 'drivers', active: true, icon: '📂' },
						]}
						separator="backslash"
					/>
				</ComponentSection>

				<ComponentSection title="Pager">
					<Pager
						variant="default"
						messages={['NEW MESSAGE', 'CALL HOME', 'MEETING @ 3PM']}
					/>
				</ComponentSection>

				{/* ============ LAYOUT & CONTAINERS ============ */}
				<GroupHeading>Layout &amp; Containers</GroupHeading>

				<ComponentSection title="Box Variants">
					<div
						style={{
							display: 'grid',
							gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
							gap: '12px',
						}}
					>
						<Box variant="panel">
							<Text>Panel box</Text>
						</Box>
						<Box variant="raised">
							<Text>Raised box</Text>
						</Box>
						<Box variant="sunken">
							<Text>Sunken box</Text>
						</Box>
						<Box variant="flat">
							<Text>Flat box</Text>
						</Box>
					</div>
				</ComponentSection>

				<ComponentSection title="Card">
					<Card
						header="System Information"
						footer="Retro UI v1.0"
						sx={{ maxWidth: '320px' }}
					>
						<Text variant="paragraph">
							A retro-styled card with authentic raised borders and vintage
							typography.
						</Text>
					</Card>
				</ComponentSection>

				<ComponentSection title="Container">
					<Container
						fluid
						sx={{
							background: '#ffffff',
							border: '1px solid #808080',
							py: '10px',
						}}
					>
						<div style={{ padding: '5px' }}>
							A centered layout container for page content.
						</div>
					</Container>
				</ComponentSection>

				<ComponentSection title="Accordion">
					<Accordion title="System Configuration" icon="⚙️" defaultOpen>
						<Text variant="paragraph">
							Configure display drivers, sound cards, and network protocols.
						</Text>
					</Accordion>
				</ComponentSection>

				<ComponentSection title="Divider">
					<div>
						<p style={{ margin: '4px 0' }}>Yesterday was a good day.</p>
						<Divider color="rainbow" orientation="horizontal" />
						<p style={{ margin: '4px 0' }}>Today is a good day.</p>
					</div>
				</ComponentSection>

				{/* ============ RETRO TEXT EFFECTS ============ */}
				<GroupHeading>Retro Text Effects</GroupHeading>

				<ComponentSection title="Text">
					<div>
						<Text variant="h3" color="#000000">
							Heading Text
						</Text>
						<Text variant="paragraph" color="#000000">
							A paragraph rendered with the retro Text component.
						</Text>
						<Text variant="h4" color="rainbow">
							Rainbow Text
						</Text>
					</div>
				</ComponentSection>

				<ComponentSection title="WordArt">
					<FlexContainer gap={30}>
						<WordArt variant="primary" artStyle="beveled" size="medium">
							RETRO
						</WordArt>
						<WordArt variant="primary" artStyle="rainbow" size="medium">
							RAINBOW
						</WordArt>
					</FlexContainer>
				</ComponentSection>

				<ComponentSection title="Marquee">
					<Marquee color="#000000" speed="20s" size="medium" gap="1rem">
						The quick brown fox jumps over the lazy dog.
					</Marquee>
				</ComponentSection>

				<ComponentSection title="Typewriter Text">
					<TypewriterText
						text="Welcome to the retro terminal..."
						typingSpeed={80}
						repeat
						showCursor
						color="#008000"
					/>
				</ComponentSection>

				<ComponentSection title="CRT Monitor">
					<CRT phosphor="green" scanlines curvature glowIntensity={0.5}>
						{`> SYSTEM STARTUP...
> MEMORY: 640K OK
> GRAPHICS: VGA DETECTED
> C:\\> _`}
					</CRT>
				</ComponentSection>

				<ComponentSection title="Terminal">
					<Terminal prompt="C:\\>" />
				</ComponentSection>

				{/* ============ DIALOGS & OVERLAYS ============ */}
				<GroupHeading>Dialogs &amp; Overlays</GroupHeading>

				<ComponentSection title="Dialogs, Drawer, Popover & Tooltip">
					<FlexContainer gap={15}>
						<Button variant="primary" onClick={() => setModalOpen(true)}>
							Open Dialog
						</Button>
						<Button variant="outline" onClick={() => setDrawerOpen(true)}>
							Open Drawer
						</Button>
						<Popover>
							<PopoverButton variant="outline">Show Info</PopoverButton>
							<PopoverContent>
								<Text variant="body2">
									System Information - Windows 3.1 - 4MB free
								</Text>
							</PopoverContent>
						</Popover>
						<Tooltip label="Classic Windows 95 style tooltip" position="top">
							<Button variant="flat">Hover Me</Button>
						</Tooltip>
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

				<Drawer
					isOpen={drawerOpen}
					setIsOpen={setDrawerOpen}
					color="primary"
					direction="right"
				>
					<Container
						sx={{
							display: 'flex',
							flexDirection: 'column',
							height: '100%',
							p: 3,
						}}
					>
						<Text color="white">Drawer Content</Text>
						<div style={{ flex: 1 }} />
						<Button onClick={() => setDrawerOpen(false)}>Close Drawer</Button>
					</Container>
				</Drawer>

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
