/** @jsxImportSource theme-ui */
import { CSSProperties, forwardRef, useEffect, useRef, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { Text, TextProps } from '../text/index';

interface TypewriterTextProps extends Omit<TextProps, 'children'> {
	/**
	 * The text to be displayed as typewriter text.
	 */
	text: string;
	/**
	 * The typing speed in milliseconds. Determines how quickly the text is typed.
	 *
	 * @default 100
	 */
	typingSpeed?: number;
	/**
	 * Repeatedly type the text.
	 *
	 * @default false
	 */
	repeat?: boolean;
	/**
	 * The color of the text.
	 *
	 * @default '#000000'
	 */
	color?: CSSProperties['color'];
	sx?: ThemeUICSSObject; // Add the sx prop
}

/**
 * TypewriterText is used to display text as if it is being typed. It can be used to create a typewriter effect.
 *
 * `IMPORTANT:` Make sure to refresh the page if the text is not displayed correctly.
 *
 * The props should not be changed after the component is mounted. It can cause unexpected behavior.
 *
 * @example
 * <TypewriterText text="Life is like a box of chocolates. You never know what you are going to get." />
 */
export const TypewriterText = forwardRef<HTMLSpanElement, TypewriterTextProps>(
	(
		{
			id,
			className,
			text,
			typingSpeed = 100,
			repeat,
			color = '#000000',
			sx,
			...rest
		},
		ref,
	) => {
		const pauseDuration = 3000;
		const [displayText, setDisplayText] = useState('');
		const isMounted = useRef(false);
		const repeatRef = useRef(repeat);
		const [restart, setRestart] = useState(false);

		useEffect(() => {
			if (repeatRef.current !== repeat) {
				repeatRef.current = repeat;
				if (repeat) {
					setRestart(true);
				}
			}
		}, [repeat]);

		useEffect(() => {
			if (restart) {
				setRestart(false);
				setDisplayText('');
			}
		}, [restart]);

		useEffect(() => {
			if (!isMounted.current || restart) {
				isMounted.current = true;
				let currentIndex = 0;

				const typeText = () => {
					if (isMounted.current) {
						setDisplayText(text.slice(0, currentIndex));
						currentIndex++;

						if (currentIndex > text.length) {
							if (repeatRef.current) {
								setTimeout(() => {
									currentIndex = 0;
									setDisplayText('');
									setTimeout(typeText, typingSpeed);
								}, pauseDuration);
							}
						} else {
							setTimeout(typeText, typingSpeed);
						}
					}
				};

				typeText();
			}
		}, [text, typingSpeed, restart]);

		return (
			<Text
				id={id}
				color={color}
				className={classNames('typewriter-text-root', className)}
				{...rest}
				sx={{
					minHeight: '1.2em',
					...sx,
				}}
			>
				{displayText}
			</Text>
		);
	},
);

TypewriterText.displayName = 'TypewriterText';
