/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	ReactElement,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import { ComponentColors } from '@src/utils/getColorScheme';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Badge.styled';

export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * The color of the Badge.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors;
	/**
	 * Whether the badge should pulsate to draw attention.
	 *
	 * @default false
	 */
	pulse?: boolean;
	/**
	 * Badge contents, typically a number. If `null`, `0`, or `undefined`, the badge will be hidden.
	 */
	count?: number;
	children?: React.ReactNode;
	/**
	 *	The size of the Badge.
	 *
	 * @default 'medium'
	 */
	size?: BadgeSize;
	/**
	 * Whether to show the badge when the count is zero.
	 *
	 * @default false
	 */
	showZero?: boolean;
	sx?: ThemeUICSSObject;
}

/**
 * Badges are used to display a numerical count or status descriptor for UI elements.
 * Badges can be used to display unread notifications, show the status of an object, or simply as counters.
 * Typically they are used with `Avatar` component but can also be used with `Box` or `div` element.
 *
 * If used with `div` element, the `div` element should have height and width set.
 *
 * @example
 * ```tsx
 * <Badge count={5}>
 * 	<Avatar src="https://i.pravatar.cc/300" />
 * </Badge>
 * ```
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			id,
			className,
			color = 'primary',
			size = 'medium',
			count,
			pulse = false,
			showZero = false,
			children,
			sx,
			...rest
		},
		ref,
	) => {
		const shouldShowBadge = showZero || (count && Number(count) > 0);

		if (children) {
			children = Children.map(children, (child) => {
				if (isValidElement(child)) {
					return cloneElement(child as ReactElement, {
						sx: { ...child.props.sx, margin: 1 },
					});
				}
				return child;
			});
		}

		return (
			<div style={{ position: 'relative', display: 'inline-flex' }}>
				{children}
				{!shouldShowBadge ? null : (
					<Sc.Badge
						id={id}
						sx={sx}
						ref={ref}
						$color={color}
						$pulsate={pulse}
						$size={size}
						className={classNames('badge-root', className, commonClassNames)}
						{...rest}
					>
						{count}
					</Sc.Badge>
				)}
			</div>
		);
	},
);

Badge.displayName = 'Badge';
