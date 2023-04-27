import React from 'react';
import { Portal } from '../portal/Portal';
import * as Sc from './Tooltip.styled';

export type TooltipColors =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

export type TooltipPositions = 'top' | 'bottom' | 'left' | 'right';

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
	 * The color of the Tooltip.
	 *
	 *
	 * @default 'primary'
	 */
	color?: TooltipColors;
	/**
	 * The position of the Tooltip.
	 *
	 * @default 'top'
	 */
	position?: TooltipPositions;
	/**
	 * The delay in milliseconds before the Tooltip appears.
	 *
	 * @default 0
	 */
	delay?: number;
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
			left = triggerRect.left + triggerRect.width + 10;
			break;
		case 'bottom':
			top = triggerRect.top + triggerRect.height + 10;
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

export const Tooltip: React.FC<TooltipProps> = ({
	label,
	color = 'primary',
	position = 'top',
	children,
	delay = 0,
	...rest
}: TooltipProps) => {
	const triggerRef = React.useRef<HTMLElement>(null);
	const tooltipRef = React.useRef<HTMLDivElement>(null);

	const [visible, setVisible] = React.useState(false);
	const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);

	React.useEffect(() => {
		if (visible) {
			setPosition(triggerRef, tooltipRef, position);
		}
	}, [visible, triggerRef, tooltipRef, position]);

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
					$color={color}
					$position={position}
				>
					{label}
				</Sc.TooltipContent>
			</Portal>
		</Sc.TooltipWrapper>
	);
};

Tooltip.displayName = 'Tooltip';
