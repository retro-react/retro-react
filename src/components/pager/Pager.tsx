/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { ComponentColors } from '@src/utils/getColorScheme';
import * as Sc from './Pager.styled';

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
	 * The color of the Pager.
	 *
	 * @default 'greyscale-dark'
	 */
	color?: ComponentColors | 'greyscale' | 'greyscale-dark';

	sx?: ThemeUICSSObject;
}

/**
 * Pager (Beeper) component to display old-school pager notifications.
 */
export const Pager: React.FC<PagerProps> = ({
	messages,
	onButtonPress,
	color = 'greyscale-dark',
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
		<Sc.PagerBody sx={sx} $color={color}>
			<Sc.PagerScreen>
				<Sc.MessageContainer>
					{messages.map((msg, index) => (
						<Sc.MessageSlide key={index} visible={index === currentIndex}>
							{msg}
						</Sc.MessageSlide>
					))}
				</Sc.MessageContainer>
			</Sc.PagerScreen>
			<Sc.ButtonGroup>
				<Sc.PagerButton color={color} onClick={handlePrevious}>
					Prev
				</Sc.PagerButton>
				<Sc.PagerButton color={color} onClick={handleNext}>
					Next
				</Sc.PagerButton>
			</Sc.ButtonGroup>
		</Sc.PagerBody>
	);
};

Pager.displayName = 'Pager';
