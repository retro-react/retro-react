/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import { Portal } from '../portal/Portal';
import * as Sc from './Tooltip.styled';

export type TooltipPositions = 'top' | 'bottom' | 'left' | 'right';
export type TooltipVariants = 'default' | 'help' | 'warning' | 'info';

export interface TooltipProps {
	/**
	 * The label for the Tooltip.
	 *
	 * @default undefined
	 */
	label?: string;
	/**
	 * The children of the Tooltip.
	 *
	 * @default undefined
	 */
	children: React.ReactElement;
	/**
	 * The visual variant of the Tooltip.
	 * - default: Standard yellow info tooltip (Windows 95/98 style)
	 * - help: Help tooltip with question mark styling
	 * - warning: Warning tooltip with alert styling
	 * - info: Info tooltip with blue styling
	 *
	 * @default 'default'
	 */
	variant?: TooltipVariants;
	/**
	 * The position of the Tooltip.
	 *
	 * @default 'top'
	 */
	position?: TooltipPositions;
	/**
	 * The delay in milliseconds before the Tooltip appears.
	 *
	 * @default 500
	 */
	delay?: number;
	sx?: ThemeUICSSObject;
}

const setPosition = (
	triggerRef: React.RefObject<HTMLElement>,
	tooltipRef: React.RefObject<HTMLElement>,
	position: TooltipPositions,
) => {
	if (!triggerRef.current || !tooltipRef.current) return;

	const triggerRect = triggerRef.current.getBoundingClientRect();
	const tooltipRect = tooltipRef.current.getBoundingClientRect();
	const { innerWidth, innerHeight } = window;

	let top = 0;
	let left = 0;

	switch (position) {
		case 'top':
			top = triggerRect.top - tooltipRect.height - 10;
			left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
			break;
		case 'right':
			top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
			left = triggerRect.right + 10;
			break;
		case 'bottom':
			top = triggerRect.bottom + 10;
			left = triggerRect.left + (triggerRect.width - tooltipRect.width) / 2;
			break;
		case 'left':
			top = triggerRect.top + (triggerRect.height - tooltipRect.height) / 2;
			left = triggerRect.left - tooltipRect.width - 10;
			break;
	}

	// Prevent the tooltip from going out of the window
	top = Math.min(innerHeight - tooltipRect.height - 10, Math.max(10, top));
	left = Math.min(innerWidth - tooltipRect.width - 10, Math.max(10, left));

	tooltipRef.current.style.top = `${top}px`;
	tooltipRef.current.style.left = `${left}px`;
};

/**
 * Retro-themed tooltips inspired by classic Windows 95/98 help bubbles.
 *
 * Features authentic Windows tooltip styling:
 * - Default: Classic yellow info bubble (like Windows help tooltips)
 * - Help: Question mark style help tooltip
 * - Warning: Alert style warning tooltip
 * - Info: Blue informational tooltip
 *
 * @example
 * // Classic yellow Windows tooltip
 * <Tooltip label="This is a help tooltip">
 * 	<Button>Hover me</Button>
 * </Tooltip>
 *
 * // Warning tooltip
 * <Tooltip label="This action cannot be undone" variant="warning">
 * 	<Button>Delete</Button>
 * </Tooltip>
 */
export const Tooltip: React.FC<TooltipProps> = ({
	label,
	variant = 'default',
	position = 'top',
	children,
	delay = 500,
	sx,
	...rest
}: TooltipProps) => {
	const triggerRef = React.useRef<HTMLElement>(null);
	const tooltipRef = React.useRef<HTMLDivElement>(null);

	const [visible, setVisible] = React.useState(false);
	const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);

	React.useEffect(() => {
		if (visible) {
			// Small delay to ensure DOM has been updated
			requestAnimationFrame(() => {
				setPosition(triggerRef, tooltipRef, position);
			});
		}
	}, [visible, position]);

	React.useEffect(() => {
		const handleScroll = () => {
			if (visible) {
				setPosition(triggerRef, tooltipRef, position);
			}
		};

		const handleResize = () => {
			if (visible) {
				setPosition(triggerRef, tooltipRef, position);
			}
		};

		window.addEventListener('scroll', handleScroll, true);
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('scroll', handleScroll, true);
			window.removeEventListener('resize', handleResize);
			if (hoverTimeout.current) {
				clearTimeout(hoverTimeout.current);
			}
		};
	}, [visible, position]);

	const handleMouseEnter = () => {
		// Clear the existing timeout if any
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
		}
		// Set the timeout with the provided delay
		hoverTimeout.current = setTimeout(() => {
			setVisible(true);
		}, delay);
	};

	const handleMouseLeave = () => {
		// Clear the existing timeout if any
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
		}
		setVisible(false);
	};

	return (
		<Sc.TooltipWrapper
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			{...rest}
		>
			{React.cloneElement(children, { ref: triggerRef })}
			<Portal>
				<Sc.TooltipContent
					ref={tooltipRef}
					$visible={visible}
					$variant={variant}
					$position={position}
					className={classNames('tooltip-root', commonClassNames)}
					sx={sx}
				>
					{label}
				</Sc.TooltipContent>
			</Portal>
		</Sc.TooltipWrapper>
	);
};

Tooltip.displayName = 'Tooltip';
