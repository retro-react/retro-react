import type { Meta, StoryObj } from '@storybook/react';
import { CRT } from '../CRT';

const meta: Meta<typeof CRT> = {
	title: 'Components/CRT',
	component: CRT,
	parameters: {
		layout: 'centered',
		docs: {
			description: {
				component:
					'An authentic CRT monitor component with phosphor glow, scanlines, and period-accurate effects.',
			},
		},
	},
	argTypes: {
		phosphor: {
			control: { type: 'select' },
			options: ['green', 'amber', 'white', 'blue'],
			description: 'The phosphor color of the CRT monitor',
		},
		scanlines: {
			control: { type: 'boolean' },
			description: 'Enable authentic scanline effect',
		},
		curvature: {
			control: { type: 'boolean' },
			description: 'Enable screen curvature effect',
		},
		flicker: {
			control: { type: 'boolean' },
			description: 'Enable screen flicker effect',
		},
		glowIntensity: {
			control: { type: 'range', min: 0, max: 1, step: 0.1 },
			description: 'Intensity of the phosphor glow',
		},
	},
};

export default meta;
type Story = StoryObj<typeof CRT>;

export const Default: Story = {
	args: {
		phosphor: 'green',
		scanlines: true,
		curvature: true,
		flicker: false,
		glowIntensity: 0.5,
		children: `
> SYSTEM STARTUP...
> LOADING RETRO INTERFACE v1.0
> MEMORY: 640K OK
> GRAPHICS: VGA DETECTED
> 
> C:\\> DIR
> VOLUME SERIAL NUMBER IS 1A2B-3C4D
> 
> RETRO.EXE    12,345   07-20-25   3:14p
> CONFIG.SYS      234   07-20-25   3:14p
> AUTOEXEC.BAT    456   07-20-25   3:14p
> 
> C:\\> RETRO.EXE
> Welcome to the retro computing experience!
> 
> Press any key to continue...
		`.trim(),
	},
};

export const AmberTerminal: Story = {
	args: {
		phosphor: 'amber',
		scanlines: true,
		curvature: true,
		flicker: false,
		glowIntensity: 0.6,
		children: `
AMBER DISPLAY TERMINAL v2.0
Copyright (c) 1985 Retro Computing Inc.

LOGIN: retro_user
PASSWORD: ********

$ ls -la /home/retro_user
total 16
drwxr-xr-x  4 user  staff   128 Jul 20 15:30 .
drwxr-xr-x  3 root  wheel    96 Jul 20 15:30 ..
-rw-r--r--  1 user  staff   256 Jul 20 15:30 .profile
-rw-r--r--  1 user  staff  1024 Jul 20 15:30 readme.txt
drwxr-xr-x  2 user  staff    64 Jul 20 15:30 projects

$ cat readme.txt
Welcome to the retro computing experience!
This amber terminal provides that authentic
vintage computing feel from the 1980s.

$ █
		`.trim(),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Classic amber phosphor terminal popular in business computers of the 1980s.',
			},
		},
	},
};

export const WhiteMonitor: Story = {
	args: {
		phosphor: 'white',
		scanlines: true,
		curvature: true,
		flicker: false,
		glowIntensity: 0.3,
		children: `
PAPER WHITE MONITOR SYSTEM
Model: PW-1401  Serial: A23456789

System Status: OPERATIONAL
Monitor Type: Monochrome Paper White
Resolution: 720x348 pixels
Refresh Rate: 60 Hz

Current Applications:
- Text Editor v1.2
- File Manager v3.0
- System Monitor v2.1

Press F1 for help, ESC to exit

Ready.
		`.trim(),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Paper white monitor providing crisp text display for professional applications.',
			},
		},
	},
};

export const BlueScreen: Story = {
	args: {
		phosphor: 'blue',
		scanlines: true,
		curvature: true,
		flicker: true,
		glowIntensity: 0.7,
		children: `
BLUE SCREEN OF NOSTALGIA

A problem has been detected and the system has been
shut down to prevent damage to your computer.

RETRO_COMPONENT_EXCEPTION

If this is the first time you've seen this retro
blue screen, restart your computer. If this screen
appears again, follow these steps:

Check to make sure any new hardware or software is
properly installed. If this is a new installation,
ask your hardware or software manufacturer for any
retro drivers you might need.

If problems continue, disable or remove any newly
installed hardware or software. Disable BIOS memory
options such as caching or shadowing. If you need to
use Safe Mode to remove or disable components, restart
your computer, press F8 to select Advanced Startup
Options, and then select Safe Mode.

Technical information:
*** STOP: 0x0000001E (0xC0000005,0x8042BF01,0x00000000,0x00000000)

Press any key to continue...
		`.trim(),
	},
	parameters: {
		docs: {
			description: {
				story:
					'A nostalgic recreation of the classic blue screen, complete with flicker effect.',
			},
		},
	},
};

export const AmberMonitor: Story = {
	args: {
		phosphor: 'amber',
		scanlines: true,
		curvature: true,
		flicker: false,
		glowIntensity: 0.7,
		children: `
Welcome to WordStar 3.0
Copyright (C) 1981-1985 MicroPro International

Press ENTER to continue or ESC to exit

> File Edit Search Options Print Help

┌─ Document1.txt ─────────────────────────┐
│                                         │
│ The quick brown fox jumps over the      │
│ lazy dog. This text demonstrates the    │
│ authentic amber monitor experience      │
│ of early word processors.               │
│                                         │
│ Line 6, Col 1                          │
│                                         │
│ Insert mode: ON                         │
│ Document length: 156 characters         │
└─────────────────────────────────────────┘

F1=Help F2=Save F3=Load ESC=Menu
		`.trim(),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Amber monitor displaying a classic word processor application interface.',
			},
		},
	},
};

export const WithFlicker: Story = {
	args: {
		phosphor: 'green',
		scanlines: true,
		curvature: true,
		flicker: true,
		glowIntensity: 0.6,
		children: `
*** SYSTEM ERROR ***

MEMORY FAULT AT ADDRESS 0x2A4B
STACK OVERFLOW DETECTED
ATTEMPTING RECOVERY...

[ERROR] Failed to load module RETRO.DLL
[ERROR] Invalid memory reference
[WARN]  System stability compromised

Press CTRL+ALT+DEL to restart
		`.trim(),
	},
	parameters: {
		docs: {
			description: {
				story:
					'Demonstration of the flicker effect simulating an unstable CRT monitor.',
			},
		},
	},
};
