/** @jsxImportSource theme-ui */
import { forwardRef, useEffect, useState } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import * as Sc from './Pager.styled';

export type PagerVariant = 'default' | 'terminal' | 'retro' | 'amber';

export interface PagerProps extends React.HTMLAttributes<HTMLDivElement> {
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
	 * The brand label shown above the screen.
	 *
	 * @default 'RETROCOM-90'
	 */
	deviceLabel?: React.ReactNode;

	/**
	 * Content of the previous-message button. Override for localization.
	 *
	 * @default '◀ PREV'
	 */
	prevLabel?: React.ReactNode;

	/**
	 * Content of the next-message button. Override for localization.
	 *
	 * @default 'NEXT ▶'
	 */
	nextLabel?: React.ReactNode;

	/**
	 * Renders the page indicator from the current and total counts.
	 * Override for localization.
	 *
	 * @default (current, total) => `${current} / ${total}`
	 */
	renderPageIndicator?: (current: number, total: number) => React.ReactNode;

	sx?: ThemeUICSSObject;
}

/**
 * Authentic retro Pager (Beeper) component reminiscent of 80s/90s communication devices.
 *
 * @example
 * <Pager
 *   variant="terminal"
 *   messages={['NEW MESSAGE', 'CALL HOME', 'MEETING @ 3PM']}
 * />
 *
 * @example
 * // Localized
 * <Pager
 *   messages={mensajes}
 *   prevLabel="◀ ANTERIOR"
 *   nextLabel="SIGUIENTE ▶"
 *   renderPageIndicator={(c, t) => `${c} de ${t}`}
 * />
 */
export const Pager = forwardRef<HTMLDivElement, PagerProps>(
	(
		{
			messages,
			onButtonPress,
			variant = 'default',
			deviceLabel = 'RETROCOM-90',
			prevLabel = '◀ PREV',
			nextLabel = 'NEXT ▶',
			renderPageIndicator = (current, total) => `${current} / ${total}`,
			className,
			id,
			sx,
			...rest
		},
		ref,
	) => {
		const [currentIndex, setCurrentIndex] = useState(0);

		const isEmpty = messages.length === 0;

		useEffect(() => {
			if (!isEmpty && currentIndex >= messages.length) {
				setCurrentIndex(0);
			}
		}, [messages.length, currentIndex, isEmpty]);

		const handleNext = () => {
			if (isEmpty) return;
			const nextIndex = (currentIndex + 1) % messages.length;
			setCurrentIndex(nextIndex);
			onButtonPress?.(nextIndex);
		};

		const handlePrevious = () => {
			if (isEmpty) return;
			const prevIndex = (currentIndex - 1 + messages.length) % messages.length;
			setCurrentIndex(prevIndex);
			onButtonPress?.(prevIndex);
		};

		return (
			<Sc.PagerBody
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('pager-root', className, commonClassNames)}
				{...rest}
			>
				<Sc.PagerHeader>
					<Sc.PagerLabel>{deviceLabel}</Sc.PagerLabel>
					<Sc.StatusIndicator $variant={variant} />
				</Sc.PagerHeader>
				<Sc.PagerScreen $variant={variant}>
					<Sc.MessageContainer aria-live="polite">
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
					{renderPageIndicator(isEmpty ? 0 : currentIndex + 1, messages.length)}
				</Sc.PageIndicator>
				<Sc.ButtonGroup>
					<Sc.PagerButton
						type="button"
						onClick={handlePrevious}
						disabled={isEmpty}
					>
						{prevLabel}
					</Sc.PagerButton>
					<Sc.PagerButton type="button" onClick={handleNext} disabled={isEmpty}>
						{nextLabel}
					</Sc.PagerButton>
				</Sc.ButtonGroup>
			</Sc.PagerBody>
		);
	},
);

Pager.displayName = 'Pager';
