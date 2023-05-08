/** @jsxImportSource theme-ui */
import React, { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import getColorScheme, { ComponentColors } from '@src/utils/getColorScheme';
import { SevenSegmentDisplayContainer } from './SevenSegmentDisplay.styled';

interface SevenSegmentDisplayProps
	extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The value to display on the seven segment display.
	 *
	 * @default 0
	 */
	value: number;
	/**
	 * The color of the seven segment display. Accepts any color from the library color scheme or a hex color.
	 *
	 * @default 'black'
	 */
	color?: ComponentColors | string;
	/**
	 * The thickness of the segments.
	 *
	 * @default 'none'
	 */
	segmentThickness?: 'none' | 'thin' | 'thick';
	/**
	 * The size of the segments.
	 *
	 * @default 'medium'
	 */
	size?: 'small' | 'medium' | 'large';
	sx?: ThemeUICSSObject;
}

const segments = [
	['a', 'b', 'c', 'd', 'e', 'f'],
	['b', 'c'],
	['a', 'b', 'g', 'e', 'd'],
	['a', 'b', 'g', 'c', 'd'],
	['f', 'g', 'b', 'c'],
	['a', 'f', 'g', 'c', 'd'],
	['a', 'f', 'g', 'e', 'c', 'd'],
	['a', 'b', 'c'],
	['a', 'b', 'c', 'd', 'e', 'f', 'g'],
	['a', 'b', 'c', 'd', 'f', 'g'],
];

const segmentStyles: { [key: string]: React.CSSProperties } = {
	a: {
		top: 0,
		left: '10%',
		width: '80%',
		height: '10%',
	},
	b: {
		top: '10%',
		right: 0,
		width: '10%',
		height: '40%',
	},
	c: {
		bottom: '10%',
		right: 0,
		width: '10%',
		height: '40%',
	},
	d: {
		bottom: 0,
		left: '10%',
		width: '80%',
		height: '10%',
	},
	e: {
		bottom: '10%',
		left: 0,
		width: '10%',
		height: '40%',
	},
	f: {
		top: '10%',
		left: 0,
		width: '10%',
		height: '40%',
	},
	g: {
		top: '45%',
		left: '10%',
		width: '80%',
		height: '10%',
	},
};

/**
 * A seven segment display component. Useful for displaying visitor counts, scores, etc.
 * Does not use font files, so it is compatible with all browsers.
 *
 * @example
 * <SevenSegmentDisplay value={1946} color="black" segmentThickness="none" />
 */
export const SevenSegmentDisplay = forwardRef<
	HTMLDivElement,
	SevenSegmentDisplayProps
>(
	(
		{
			className,
			value = 0,
			segmentThickness = 'none',
			color = 'black',
			size = 'medium',
			sx,
			...rest
		},
		ref,
	) => {
		const digits = value
			.toString()
			.split('')
			.filter((char) => char.match(/[0-9]/));

		const segmentSize = {
			small: 16,
			medium: 32,
			large: 64,
		}[size];

		const thickness = {
			thin: segmentSize === 16 ? '2px' : segmentSize === 32 ? '3px' : '5px',
			thick: segmentSize === 16 ? '3px' : segmentSize === 32 ? '4px' : '8px',
			none: '0px',
		}[segmentThickness];

		return (
			<SevenSegmentDisplayContainer
				className={classNames('seven-segment-display-root', className)}
				ref={ref}
				sx={sx}
				{...rest}
			>
				{digits.map((digit, index) => {
					const activeSegments = segments[Number(digit)];
					return (
						<div
							key={`retro-display-${digit}-${index}`}
							className="seven-segment-display-digit"
							style={{
								display: 'inline-block',
								position: 'relative',
								width: `${segmentSize}px`,
								height: `${segmentSize * 2}px`,
							}}
						>
							{Object.keys(segmentStyles).map((segment) => (
								<div
									key={`retro-display-${digit}-${index}-${segment}`}
									className="seven-segment-display-segment"
									style={{
										...segmentStyles[segment],
										position: 'absolute',
										backgroundColor: getColorScheme(color),
										opacity: activeSegments.includes(segment) ? 1 : 0.1,
										border: `${thickness} solid ${getColorScheme(color)}`,
										boxSizing: 'border-box',
									}}
								></div>
							))}
						</div>
					);
				})}
			</SevenSegmentDisplayContainer>
		);
	},
);
