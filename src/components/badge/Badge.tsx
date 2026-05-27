/** @jsxImportSource theme-ui */
import {
	Children,
	cloneElement,
	forwardRef,
	isValidElement,
	ReactElement,
} from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import commonClassNames from '../../constants/commonClassNames';
import { classNames } from '../../utils/classNames';
import { ComponentColors } from '../../utils/getColorScheme';
import * as Sc from './Badge.styled';

export type BadgeSize = 'small' | 'medium' | 'large';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
	/**
	 * The color of the Badge.
	 *
	 * @default 'primary'
	 */
	color?: ComponentColors | 'highlight';
	/**
	 * Whether the badge should pulsate to draw attention.
	 *
	 * @default false
	 */
	pulse?: boolean;
	/**
	 * The value the badge shows, typically a count or short label. The badge
	 * is hidden when this is `null`, `undefined`, or `0` unless `showZero` is
	 * set.
	 */
	badgeContent?: number | string;
	/**
	 * The element the badge anchors to. The badge floats in the top-right
	 * corner of this child. Most commonly an icon, button, or avatar.
	 *
	 * @example
	 * <Badge badgeContent={5} color="error">
	 *   <Avatar>AB</Avatar>
	 * </Badge>
	 */
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

export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
	(
		{
			id,
			className,
			color = 'primary',
			size = 'medium',
			badgeContent,
			pulse = false,
			showZero = false,
			children,
			sx,
			...rest
		},
		ref,
	) => {
		const shouldShowBadge =
			typeof badgeContent === 'number'
				? showZero || badgeContent > 0
				: Boolean(badgeContent);

		if (children) {
			children = Children.map(children, (child) => {
				if (isValidElement(child)) {
					const childSx = (child.props.sx ?? {}) as Record<string, unknown>;
					const hasMargin = childSx['margin'] !== undefined;
					return cloneElement(child as ReactElement, {
						sx: hasMargin ? childSx : { ...childSx, margin: 1 },
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
						aria-label={
							badgeContent !== undefined && badgeContent !== null
								? `${badgeContent}`
								: undefined
						}
						{...rest}
					>
						{badgeContent}
					</Sc.Badge>
				)}
			</div>
		);
	},
);

Badge.displayName = 'Badge';
