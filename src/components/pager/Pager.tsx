/** @jsxImportSource theme-ui */
import React, { useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
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

	sx?: ThemeUICSSObject;
}

/**
 * Pager (Beeper) component to display old-school pager notifications.
 */
export const Pager: React.FC<PagerProps> = ({
	messages,
	onButtonPress,
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
		<Sc.PagerBody sx={sx}>
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
				<Sc.PagerButton color="primary" onClick={handlePrevious}>
					Prev
				</Sc.PagerButton>
				<Sc.PagerButton color="primary" onClick={handleNext}>
					Next
				</Sc.PagerButton>
			</Sc.ButtonGroup>
		</Sc.PagerBody>
	);
};

Pager.displayName = 'Pager';
