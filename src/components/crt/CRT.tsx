import React from 'react';
import * as Sc from './CRT.styled';

export interface CRTProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The content to display inside the CRT monitor
	 */
	children: React.ReactNode;

	/**
	 * CRT monitor color scheme
	 * @default 'green'
	 */
	phosphor?: 'green' | 'amber' | 'white' | 'blue';

	/**
	 * Enable scanline effect
	 * @default true
	 */
	scanlines?: boolean;

	/**
	 * Enable screen curvature effect
	 * @default true
	 */
	curvature?: boolean;

	/**
	 * Enable flicker effect
	 * @default false
	 */
	flicker?: boolean;

	/**
	 * Intensity of the glow effect (0-1)
	 * @default 0.5
	 */
	glowIntensity?: number;
}

/**
 * CRT component provides an authentic retro CRT monitor experience
 * with phosphor glow, scanlines, and curvature effects.
 */
export const CRT: React.FC<CRTProps> = ({
	children,
	phosphor = 'green',
	scanlines = true,
	curvature = true,
	flicker = false,
	glowIntensity = 0.5,
	...props
}) => {
	return (
		<Sc.CRTContainer
			$phosphor={phosphor}
			$scanlines={scanlines}
			$curvature={curvature}
			$flicker={flicker}
			$glowIntensity={glowIntensity}
			{...props}
		>
			<Sc.CRTScreen>
				<Sc.CRTContent>{children}</Sc.CRTContent>
				{scanlines && <Sc.ScanlineOverlay />}
			</Sc.CRTScreen>
		</Sc.CRTContainer>
	);
};
