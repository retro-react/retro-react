/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import React from 'react';
import { classNames } from '@src/utils/classNames';
import { ComponentPatterns } from '@src/utils/getPatternScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Accordion.styled';

export type AccordionColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn';

export interface AccordionProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The title of the accordion.
	 *
	 * @default ''
	 */
	title: string;
	/**
	 * The pattern of the accordion.
	 *
	 * @default 'noise'
	 */
	pattern?: ComponentPatterns;
	/**
	 * The color of the accordion.
	 *
	 * @default 'primary'
	 */
	color?: AccordionColor;
	/**
	 * The content of the accordion.
	 *
	 * @default undefined
	 */
	children?: string | React.ReactNode | React.ReactNode[];
	/**
	 * The sx prop for header.
	 *
	 * @default undefined
	 */
	sxHeader?: any;
	sx?: any;
}

/**
 * The Accordion component is used to display content in a collapsible panel.
 * It can be used to group content or to show/hide additional information.
 *
 * Use `sxHeader` prop to style the header and `sx` to style the content.
 *
 * @example
 * <Accordion title="Accordion Title">
 * 	Content
 * </Accordion>
 */
export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
	(
		{
			id,
			className,
			title = '',
			pattern = 'noise',
			color = 'primary',
			children = undefined,
			sxHeader,
			sx,
			...rest
		},
		ref,
	) => {
		const [isOpen, setIsOpen] = React.useState(false);
		const [maxHeight, setMaxHeight] = React.useState('0px');
		const contentRef = React.useRef<HTMLDivElement | null>(null);

		const updateMaxHeight = React.useCallback(() => {
			if (contentRef.current) {
				setMaxHeight(`${contentRef.current.scrollHeight}px`);
			}
		}, []);

		React.useEffect(() => {
			updateMaxHeight();

			window.addEventListener('resize', updateMaxHeight);

			return () => {
				window.removeEventListener('resize', updateMaxHeight);
			};
		}, [updateMaxHeight]);

		const toggleAccordion = () => {
			setIsOpen(!isOpen);
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
					onClick={toggleAccordion}
					$pattern={pattern}
					$color={color}
					sx={sxHeader}
					aria-expanded={isOpen}
					aria-controls={`${id}-content`}
				>
					{title}
				</Sc.AccordionHeader>
				<Sc.AccordionContent
					ref={contentRef}
					isOpen={isOpen}
					$color={color}
					maxHeight={maxHeight}
					role="region"
					aria-labelledby={title}
				>
					<div>{children}</div>
				</Sc.AccordionContent>
			</Sc.AccordionWrapper>
		);
	},
);

Accordion.displayName = 'Accordion';
