/** @jsxImportSource theme-ui */
import React from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
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
	const triggerRef = React.useRef<HTMLElement | null>(null);
	const tooltipRef = React.useRef<HTMLDivElement | null>(null);

	const [visible, setVisible] = React.useState(false);
	const hoverTimeout = React.useRef<NodeJS.Timeout | null>(null);
	const tooltipId = React.useId();

	const canTakeRef =
		typeof children.type === 'string' ||
		(typeof children.type === 'object' &&
			// React.forwardRef returns an object with $$typeof
			(children.type as { $$typeof?: symbol }).$$typeof ===
				Symbol.for('react.forward_ref'));

	const mergeRefs = (node: HTMLElement | null) => {
		triggerRef.current = node;
		const childRef = (children as { ref?: React.Ref<HTMLElement> }).ref;
		if (typeof childRef === 'function') {
			childRef(node);
		} else if (childRef && typeof childRef === 'object') {
			(childRef as React.MutableRefObject<HTMLElement | null>).current = node;
		}
	};

	React.useEffect(() => {
		if (visible) {
			requestAnimationFrame(() => {
				setPosition(triggerRef, tooltipRef, position);
			});
		}
	}, [visible, position]);

	React.useEffect(() => {
		if (!visible) return;
		const handleScroll = () => setPosition(triggerRef, tooltipRef, position);
		const handleResize = () => setPosition(triggerRef, tooltipRef, position);
		const handleKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') setVisible(false);
		};

		window.addEventListener('scroll', handleScroll, true);
		window.addEventListener('resize', handleResize);
		window.addEventListener('keydown', handleKey);

		return () => {
			window.removeEventListener('scroll', handleScroll, true);
			window.removeEventListener('resize', handleResize);
			window.removeEventListener('keydown', handleKey);
		};
	}, [visible, position]);

	React.useEffect(
		() => () => {
			if (hoverTimeout.current) clearTimeout(hoverTimeout.current);
		},
		[],
	);

	const handleMouseEnter = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
		}
		hoverTimeout.current = setTimeout(() => {
			setVisible(true);
		}, delay);
	};

	const handleMouseLeave = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
		}
		setVisible(false);
	};

	const handleFocus = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
		}
		setVisible(true);
	};

	const handleBlur = () => {
		if (hoverTimeout.current) {
			clearTimeout(hoverTimeout.current);
		}
		setVisible(false);
	};

	return (
		<Sc.TooltipWrapper
			onMouseEnter={handleMouseEnter}
			onMouseLeave={handleMouseLeave}
			onFocus={handleFocus}
			onBlur={handleBlur}
			{...rest}
		>
			{React.cloneElement(
				children,
				canTakeRef
					? { ref: mergeRefs, 'aria-describedby': tooltipId }
					: { 'aria-describedby': tooltipId },
			)}
			<Portal>
				<Sc.TooltipContent
					ref={tooltipRef}
					id={tooltipId}
					role="tooltip"
					$visible={visible}
					$variant={variant}
					$position={position}
					data-state={visible ? 'open' : 'closed'}
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
