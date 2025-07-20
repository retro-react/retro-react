/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Pager.styled';

export type PagerVariant = 'default' | 'terminal' | 'retro' | 'amber';

export interface PagerProps {
	/**
	 * List of messages or notifications to be displayed on the pager screen.
	 */
	messages: string[];

	/**
	 * Callback function when the pager button is pressed.
	 */
	onButtonPress?: (currentIndex: number) => void;

	/**
	 * The visual variant of the Pager.
	 * - default: Classic gray retro pager
	 * - terminal: Green terminal-style display
	 * - retro: Classic blue retro styling
	 * - amber: Amber monochrome display
	 *
	 * @default 'default'
	 */
	variant?: PagerVariant;

	/**
	 * Custom class name for the component.
	 */
	className?: string;

	sx?: ThemeUICSSObject;
}

/**
 * Authentic retro Pager (Beeper) component reminiscent of 80s/90s communication devices.
 *
 * Features:
 * - Large, prominent LCD-style display with enhanced scanlines and glow effects
 * - Authentic RETROCOM-90 branding and status indicator
 * - Classic Windows 3.1-style button layout with proper dithering texture
 * - Multiple display variants with distinct color schemes
 * - Message scrolling with smooth transitions and page indicators
 * - Period-appropriate visual effects and typography
 * - Enhanced sizing and proportions for better visual impact
 *
 * @example
 * // Classic terminal-style pager
 * <Pager
 *   variant="terminal"
 *   messages={["NEW MESSAGE", "CALL HOME", "MEETING @ 3PM"]}
 * />
 */
export const Pager: React.FC<PagerProps> = ({
	messages,
	onButtonPress,
	variant = 'default',
	className,
	sx,
}) => {
	const [currentIndex, setCurrentIndex] = useState(0);

	const handleNext = () => {
		setCurrentIndex((prev) => (prev + 1) % messages.length);
		onButtonPress && onButtonPress(currentIndex);
	};

	const handlePrevious = () => {
		setCurrentIndex((prev) => (prev - 1 + messages.length) % messages.length);
		onButtonPress && onButtonPress(currentIndex);
	};

	return (
		<Sc.PagerBody
			sx={sx}
			$variant={variant}
			className={classNames('pager-root', className, commonClassNames)}
		>
			<Sc.PagerLabel>RETROCOM-90</Sc.PagerLabel>
			<Sc.StatusIndicator $variant={variant} />
			<Sc.PagerScreen $variant={variant}>
				<Sc.MessageContainer>
					{messages.map((msg, index) => (
						<Sc.MessageSlide
							key={index}
							visible={index === currentIndex}
							$variant={variant}
						>
							{msg}
						</Sc.MessageSlide>
					))}
				</Sc.MessageContainer>
			</Sc.PagerScreen>
			<Sc.PageIndicator>
				{currentIndex + 1} / {messages.length}
			</Sc.PageIndicator>
			<Sc.ButtonGroup>
				<Sc.PagerButton $variant={variant} onClick={handlePrevious}>
					◀ PREV
				</Sc.PagerButton>
				<Sc.PagerButton $variant={variant} onClick={handleNext}>
					NEXT ▶
				</Sc.PagerButton>
			</Sc.ButtonGroup>
		</Sc.PagerBody>
	);
};

Pager.displayName = 'Pager';
