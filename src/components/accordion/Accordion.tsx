/** @jsxImportSource theme-ui */
import { forwardRef, useCallback, useEffect, useRef, useState } from 'react';
import React from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Accordion.styled';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The title of the accordion.
	 *
	 * @default ''
	 */
	title: string;
	/**
	 * Icon to display in the header (optional).
	 *
	 * @default undefined
	 */
	icon?: React.ReactNode;
	/**
	 * The content of the accordion.
	 *
	 * @default undefined
	 */
	children?: string | React.ReactNode | React.ReactNode[];
	/**
	 * Whether the accordion is initially open.
	 *
	 * @default false
	 */
	defaultOpen?: boolean;
	/**
	 * Whether the accordion is disabled.
	 *
	 * @default false
	 */
	disabled?: boolean;
	/**
	 * Whether the accordion is in a loading state.
	 *
	 * @default false
	 */
	loading?: boolean;
	/**
	 * Callback when accordion state changes.
	 *
	 * @default undefined
	 */
	onToggle?: (isOpen: boolean) => void;
	/**
	 * Whether to animate the expansion/collapse.
	 *
	 * @default true
	 */
	animated?: boolean;
	/**
	 * Custom expand/collapse icons.
	 *
	 * @default undefined
	 */
	expandIcon?: React.ReactNode;
	collapseIcon?: React.ReactNode;
	/**
	 * The sx prop for header.
	 *
	 * @default undefined
	 */
	sxHeader?: any;
	sx?: ThemeUICSSObject;
}

/**
 * The Accordion component is used to display content in a collapsible panel with authentic retro styling.
 * Features WIN31-inspired borders, proper keyboard navigation, and enhanced accessibility.
 *
 * Enhanced with:
 * - Authentic retro styling with WIN31 borders
 * - Icon support for visual hierarchy
 * - Loading and disabled states
 * - Keyboard navigation (Enter, Space, Arrow keys)
 * - Better accessibility with ARIA attributes
 * - Custom expand/collapse icons
 *
 * @example
 * <Accordion
 *   title="System Configuration"
 *   icon="⚙️"
 *   defaultOpen={false}
 *   onToggle={(isOpen) => console.log('Accordion is', isOpen ? 'open' : 'closed')}
 * >
 *   <p>Configure your system settings here.</p>
 * </Accordion>
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
	(
		{
			id,
			className,
			title = '',
			icon,
			children = undefined,
			defaultOpen = false,
			disabled = false,
			loading = false,
			onToggle,
			animated = true,
			expandIcon,
			collapseIcon,
			sxHeader,
			sx,
			...rest
		},
		ref,
	) => {
		const [isOpen, setIsOpen] = useState(defaultOpen);
		const [maxHeight, setMaxHeight] = useState('0px');
		const contentRef = useRef<HTMLDivElement | null>(null);
		const headerRef = useRef<HTMLButtonElement | null>(null);

		const updateMaxHeight = useCallback(() => {
			if (contentRef.current) {
				setMaxHeight(`${contentRef.current.scrollHeight}px`);
			}
		}, []);

		useEffect(() => {
			updateMaxHeight();
			window.addEventListener('resize', updateMaxHeight);
			return () => {
				window.removeEventListener('resize', updateMaxHeight);
			};
		}, [updateMaxHeight, children]);

		const toggleAccordion = () => {
			if (disabled || loading) return;

			const newIsOpen = !isOpen;
			setIsOpen(newIsOpen);

			if (onToggle) {
				onToggle(newIsOpen);
			}
		};

		const handleKeyDown = (e: React.KeyboardEvent) => {
			if (disabled || loading) return;

			if (e.key === 'Enter' || e.key === ' ') {
				e.preventDefault();
				toggleAccordion();
			}
		};

		// Get the appropriate expand/collapse icon
		const getToggleIcon = () => {
			if (loading) return '⧗'; // Loading icon

			if (expandIcon && collapseIcon) {
				return isOpen ? collapseIcon : expandIcon;
			}

			// Default retro-style arrows
			return isOpen ? '▼' : '▶';
		};

		return (
			<Sc.AccordionWrapper
				ref={ref}
				id={id}
				sx={sx}
				className={classNames('accordion-root', className, commonClassNames)}
				{...rest}
			>
				<Sc.AccordionHeader
					ref={headerRef}
					onClick={toggleAccordion}
					onKeyDown={handleKeyDown}
					$disabled={disabled}
					$loading={loading}
					sx={sxHeader}
					aria-expanded={isOpen}
					aria-controls={`${id}-content`}
					aria-disabled={disabled}
					disabled={disabled}
					className="accordion-header"
					tabIndex={disabled ? -1 : 0}
				>
					<Sc.AccordionHeaderContent>
						{icon && <Sc.AccordionIcon>{icon}</Sc.AccordionIcon>}
						<Sc.AccordionTitle>{title}</Sc.AccordionTitle>
					</Sc.AccordionHeaderContent>
					<Sc.AccordionToggleIcon $isOpen={isOpen} $loading={loading}>
						{getToggleIcon()}
					</Sc.AccordionToggleIcon>
				</Sc.AccordionHeader>
				<Sc.AccordionContent
					ref={contentRef}
					$isOpen={isOpen}
					$maxHeight={maxHeight}
					$animated={animated}
					role="region"
					aria-labelledby={`${id}-header`}
					aria-hidden={!isOpen}
					id={`${id}-content`}
					className="accordion-content"
				>
					<Sc.AccordionContentInner>
						{loading ? (
							<Sc.LoadingContent>
								<Sc.LoadingSpinner>⧗</Sc.LoadingSpinner>
								<span>Loading...</span>
							</Sc.LoadingContent>
						) : (
							children
						)}
					</Sc.AccordionContentInner>
				</Sc.AccordionContent>
			</Sc.AccordionWrapper>
		);
	},
);

Accordion.displayName = 'Accordion';
