import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Alert } from '../components/alert';
import { Avatar } from '../components/avatar';
import { Badge } from '../components/badge';
import { Button } from '../components/button';
import { Card } from '../components/card';
import { Checkbox } from '../components/checkbox';
import { Chip } from '../components/chip';
import { CRT } from '../components/crt';
import { Input } from '../components/input';
import { Pager } from '../components/pager';
import { Popover, PopoverButton, PopoverContent } from '../components/popover';
import { ProgressBar } from '../components/progress_bar';
import { Select } from '../components/select';
import { SevenSegmentDisplay } from '../components/sevensegmentdisplay';
import { Statistics } from '../components/statistics';
import { Switch } from '../components/switch';
import { Table } from '../components/table';
import { Text } from '../components/text';
import { Tooltip } from '../components/tooltip';
import { Tree } from '../components/tree';
import { Window } from '../components/window';
import { WordArt } from '../components/wordart';

const meta: Meta = {
	title: 'Showcase/Marketing',
	parameters: { layout: 'fullscreen' },
};
export default meta;

const Desktop = ({
	children,
	width,
	height,
}: {
	children: React.ReactNode;
	width: number;
	height: number;
}) => (
	<div
		style={{
			position: 'relative',
			width,
			height,
			background: '#008080',
			overflow: 'hidden',
			fontFamily: 'Tahoma, sans-serif',
		}}
	>
		{children}
	</div>
);

const Surface = ({
	children,
	width,
	height,
	padding = 24,
}: {
	children: React.ReactNode;
	width: number;
	height: number;
	padding?: number;
}) => (
	<div
		style={{
			width,
			height,
			background: '#c0c0c0',
			padding,
			boxSizing: 'border-box',
			fontFamily: 'Tahoma, sans-serif',
			display: 'flex',
			flexDirection: 'column',
			gap: 18,
		}}
	>
		{children}
	</div>
);

export const Hero: StoryObj = {
	render: () => (
		<Desktop width={1200} height={700}>
			<Window
				title="My Computer"
				icon="💾"
				defaultPosition={{ x: 40, y: 40 }}
				defaultSize={{ width: 320, height: 260 }}
				color="primary"
			>
				<Tree
					data={[
						{
							label: 'C:\\',
							children: [
								{ label: 'Windows' },
								{ label: 'Users' },
								{ label: 'AUTOEXEC.BAT' },
								{ label: 'CONFIG.SYS' },
							],
						},
					]}
				/>
			</Window>

			<Window
				title="Sign in"
				defaultPosition={{ x: 410, y: 90 }}
				defaultSize={{ width: 320, height: 240 }}
				color="primary"
				active={false}
			>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
					<Input placeholder="Username" />
					<Input placeholder="Password" type="password" />
					<Checkbox label="Remember me" defaultChecked />
					<div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end' }}>
						<Button variant="outline">Cancel</Button>
						<Button variant="primary">OK</Button>
					</div>
				</div>
			</Window>

			<Window
				title="Terminal"
				defaultPosition={{ x: 780, y: 50 }}
				defaultSize={{ width: 380, height: 220 }}
				color="primary"
				active={false}
			>
				<CRT phosphor="green" curvature={false}>
					{`> npm install retro-react\n+ retro-react@1.5.2\n> ready.\n_`}
				</CRT>
			</Window>

			<Window
				title="Stats - Q2"
				defaultPosition={{ x: 200, y: 360 }}
				defaultSize={{ width: 460, height: 260 }}
				color="success"
				active={false}
			>
				<div style={{ display: 'flex', gap: 16, marginBottom: 12 }}>
					<Statistics number="$42K" label="Revenue" />
					<Statistics number="1,242" label="Users" />
					<SevenSegmentDisplay value={1946} />
				</div>
				<ProgressBar value={68} animated />
			</Window>

			<Window
				title="System"
				defaultPosition={{ x: 700, y: 320 }}
				defaultSize={{ width: 360, height: 280 }}
				color="error"
				active={false}
			>
				<Alert open color="error">
					A general protection fault has occurred.
				</Alert>
				<div style={{ marginTop: 10 }}>
					<Pager messages={['NEW MESSAGE', 'CALL HOME']} />
				</div>
			</Window>
		</Desktop>
	),
};

export const ButtonsAndForms: StoryObj = {
	render: () => (
		<Surface width={1000} height={420}>
			<div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
				<Button variant="primary">Primary</Button>
				<Button variant="secondary">Secondary</Button>
				<Button variant="success">Success</Button>
				<Button variant="warning">Warning</Button>
				<Button variant="error">Error</Button>
				<Button variant="outline">Outline</Button>
				<Button variant="flat">Flat</Button>
				<Button disabled>Disabled</Button>
			</div>
			<div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
				<Input placeholder="Username" />
				<Select>
					<option>Theme</option>
					<option>Light</option>
					<option>Dark</option>
				</Select>
				<Checkbox label="Subscribe" defaultChecked />
				<Switch defaultToggled />
			</div>
			<div
				style={{
					display: 'flex',
					gap: 16,
					flexWrap: 'wrap',
					alignItems: 'center',
				}}
			>
				<Chip color="primary">primary</Chip>
				<Chip color="secondary">secondary</Chip>
				<Chip color="success">success</Chip>
				<Chip color="error">error</Chip>
				<Chip color="warn">warn</Chip>
				<Badge badgeContent={5} color="error">
					<Avatar color="primary">AB</Avatar>
				</Badge>
				<Badge badgeContent={12} color="error">
					<Avatar color="success">CD</Avatar>
				</Badge>
				<Avatar color="warn">EF</Avatar>
				<Avatar color="error">GH</Avatar>
			</div>
		</Surface>
	),
};

export const Overlays: StoryObj = {
	render: () => {
		const [_, force] = useState(0);
		void force;
		return (
			<Surface width={1000} height={500} padding={32}>
				<div style={{ display: 'flex', gap: 36, alignItems: 'flex-start' }}>
					<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
						<Text variant="h4">Tooltip</Text>
						<Tooltip label="This is a tooltip">
							<Button variant="primary">Hover me</Button>
						</Tooltip>
						<Text variant="h4" sx={{ marginTop: 20 }}>
							Popover
						</Text>
						<Popover>
							<PopoverButton variant="outline">Open popover</PopoverButton>
							<PopoverContent>
								<div style={{ padding: 6 }}>Anchored content.</div>
							</PopoverContent>
						</Popover>
					</div>

					<div
						style={{
							display: 'flex',
							flexDirection: 'column',
							gap: 12,
							width: 380,
						}}
					>
						<Text variant="h4">Modal</Text>
						<Card header="Save changes?">
							<div
								style={{ display: 'flex', flexDirection: 'column', gap: 10 }}
							>
								<Text>You have unsaved changes. Save them now?</Text>
								<div
									style={{
										display: 'flex',
										gap: 8,
										justifyContent: 'flex-end',
									}}
								>
									<Button variant="outline">Discard</Button>
									<Button variant="primary">Save</Button>
								</div>
							</div>
						</Card>
					</div>
				</div>
			</Surface>
		);
	},
};

export const Atmosphere: StoryObj = {
	render: () => (
		<Surface width={1000} height={420} padding={24}>
			<div
				style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 16 }}
			>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					<CRT phosphor="green">
						{`> SYSTEM READY\n> running diagnostics...\n> 640K OK\n> 2 disk drives detected\n_`}
					</CRT>
				</div>
				<div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
					<WordArt>RETRO</WordArt>
					<div style={{ display: 'flex', gap: 16, alignItems: 'flex-end' }}>
						<Pager messages={['NEW MESSAGE', 'CALL HOME']} />
					</div>
					<SevenSegmentDisplay value={1946} />
				</div>
			</div>
		</Surface>
	),
};

export const TablesAndStepper: StoryObj = {
	render: () => (
		<Surface width={1000} height={360} padding={24}>
			<Table
				headers={['Name', 'Role', 'City']}
				data={[
					['Ada Lovelace', 'Engineer', 'London'],
					['Grace Hopper', 'Admiral', 'New York'],
					['Alan Turing', 'Cryptographer', 'Cambridge'],
				]}
				striped
			/>
			<ProgressBar value={72} animated />
		</Surface>
	),
};
