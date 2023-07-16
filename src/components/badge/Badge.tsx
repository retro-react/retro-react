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
	color?: ComponentColors | 'highlight';
	/**
	 * Whether the badge should pulsate to draw attention.
	 *
	 * @default false
	 */
	pulse?: boolean;
	/**
	 * Badge contents, typically a number or string. If `null`, `0`, or `undefined`, the badge will be hidden.
	 */
	badgeContent?: number | string;
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
						aria-hidden="true"
						{...rest}
					>
						{badgeContent}
					</Sc.Badge>
				)}
			</div>
		);
	},
);
