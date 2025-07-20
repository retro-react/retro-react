/** @jsxImportSource theme-ui */
import {
	CSSProperties,
	forwardRef,
	useCallback,
	useEffect,
	useRef,
	useState,
} from 'react';
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
	 * The erasing speed in milliseconds. Determines how quickly the text is erased when repeating.
	 *
	 * @default 50
	 */
	erasingSpeed?: number;
	/**
	 * Repeatedly type the text. When true, text will be typed, paused, erased, and repeated.
	 *
	 * @default false
	 */
	repeat?: boolean;
	/**
	 * Pause duration in milliseconds after typing is complete before erasing (when repeat is true).
	 *
	 * @default 2000
	 */
	pauseDuration?: number;
	/**
	 * Pause duration in milliseconds after erasing is complete before starting again (when repeat is true).
	 *
	 * @default 1000
	 */
	restartPause?: number;
	/**
	 * Show a blinking cursor at the end of the text.
	 *
	 * @default true
	 */
	showCursor?: boolean;
	/**
	 * The cursor character to display.
	 *
	 * @default '|'
	 */
	cursor?: string;
	/**
	 * The color of the text.
	 *
	 * @default '#000000'
	 */
	color?: CSSProperties['color'];
	sx?: ThemeUICSSObject;
}

/**
 * TypewriterText creates an authentic retro typing effect reminiscent of classic computer terminals.
 *
 * Features:
 * - Smooth typing animation with configurable speed
 * - Optional repeat functionality with erase effect
 * - Blinking cursor (classic terminal style)
 * - Proper cleanup and state management
 * - Retro monospace styling
 *
 * @example
 * // Basic typing effect
 * <TypewriterText text="Hello, World!" />
 *
 * // Repeating with custom timing
 * <TypewriterText
 *   text="Welcome to the retro terminal..."
 *   repeat
 *   typingSpeed={80}
 *   erasingSpeed={40}
 * />
 */
export const TypewriterText = forwardRef<HTMLDivElement, TypewriterTextProps>(
	(
		{
			id,
			className,
			text,
			typingSpeed = 100,
			erasingSpeed = 50,
			repeat = false,
			pauseDuration = 2000,
			restartPause = 1000,
			showCursor = true,
			cursor = '|',
			color = '#000000',
			sx,
			...rest
		},
		ref,
	) => {
		const [displayText, setDisplayText] = useState('');
		const [isTyping, setIsTyping] = useState(true);
		const [showCursorState, setShowCursorState] = useState(true);

		const timeoutRef = useRef<NodeJS.Timeout | null>(null);
		const cursorTimeoutRef = useRef<NodeJS.Timeout | null>(null);
		const currentIndexRef = useRef(0);
		const mountedRef = useRef(true);

		// Clean up timeouts
		const clearTimeouts = useCallback(() => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
				timeoutRef.current = null;
			}
			if (cursorTimeoutRef.current) {
				clearTimeout(cursorTimeoutRef.current);
				cursorTimeoutRef.current = null;
			}
		}, []);

		// Cursor blinking effect
		const startCursorBlink = useCallback(() => {
			if (!showCursor || !mountedRef.current) return;

			const blink = () => {
				if (!mountedRef.current) return;
				setShowCursorState((prev) => !prev);
				cursorTimeoutRef.current = setTimeout(blink, 530); // Authentic terminal blink speed
			};

			cursorTimeoutRef.current = setTimeout(blink, 530);
		}, [showCursor]);

		// Main animation logic
		const animate = useCallback(() => {
			if (!mountedRef.current) return;

			const currentIndex = currentIndexRef.current;

			if (isTyping) {
				// Typing phase
				if (currentIndex <= text.length) {
					setDisplayText(text.slice(0, currentIndex));
					currentIndexRef.current = currentIndex + 1;

					if (currentIndex < text.length) {
						timeoutRef.current = setTimeout(animate, typingSpeed);
					} else {
						// Typing complete
						if (repeat) {
							timeoutRef.current = setTimeout(() => {
								setIsTyping(false);
								animate();
							}, pauseDuration);
						}
					}
				}
			} else {
				// Erasing phase (only when repeat is true)
				if (currentIndex >= 0) {
					setDisplayText(text.slice(0, currentIndex));
					currentIndexRef.current = currentIndex - 1;

					if (currentIndex > 0) {
						timeoutRef.current = setTimeout(animate, erasingSpeed);
					} else {
						// Erasing complete, restart
						timeoutRef.current = setTimeout(() => {
							setIsTyping(true);
							currentIndexRef.current = 0;
							animate();
						}, restartPause);
					}
				}
			}
		}, [
			text,
			typingSpeed,
			erasingSpeed,
			pauseDuration,
			restartPause,
			repeat,
			isTyping,
		]);

		// Initialize animation
		useEffect(() => {
			mountedRef.current = true;
			currentIndexRef.current = 0;
			setDisplayText('');
			setIsTyping(true);

			// Start cursor blinking
			startCursorBlink();

			// Start typing animation
			timeoutRef.current = setTimeout(animate, typingSpeed);

			return () => {
				mountedRef.current = false;
				clearTimeouts();
			};
		}, [text, animate, startCursorBlink, typingSpeed, clearTimeouts]);

		// Update cursor when showCursor prop changes
		useEffect(() => {
			if (showCursor && mountedRef.current) {
				startCursorBlink();
			} else {
				if (cursorTimeoutRef.current) {
					clearTimeout(cursorTimeoutRef.current);
					cursorTimeoutRef.current = null;
				}
				setShowCursorState(false);
			}
		}, [showCursor, startCursorBlink]);

		return (
			<Text
				ref={ref}
				id={id}
				color={color}
				className={classNames('typewriter-text-root', className)}
				{...rest}
				sx={{
					fontFamily: "'Courier New', monospace", // Authentic terminal font
					minHeight: '1.2em',
					whiteSpace: 'pre-wrap', // Preserve spacing
					...sx,
				}}
			>
				{displayText}
				{showCursor && (
					<span
						style={{
							opacity: showCursorState ? 1 : 0,
							transition: 'none', // No smooth transitions for authentic feel
						}}
					>
						{cursor}
					</span>
				)}
			</Text>
		);
	},
);

TypewriterText.displayName = 'TypewriterText';
