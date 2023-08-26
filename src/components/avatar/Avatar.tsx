/** @jsxImportSource theme-ui */
import { forwardRef } from 'react';
import { ThemeUICSSObject } from 'theme-ui';
import { classNames } from '@src/utils/classNames';
import commonClassNames from '@src/constants/commonClassNames';
import * as Sc from './Avatar.styled';

export type AvatarColor =
	| 'primary'
	| 'secondary'
	| 'success'
	| 'error'
	| 'warn'
	| 'greyscale'
	| 'greyscale-dark';

export type AvatarSize = 'small' | 'medium' | 'large';
export type AvatarVariant = 'circle' | 'square';

export interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
	/**
	 * The size of the Avatar.
	 *
	 * @default 'medium'
	 */
	size?: AvatarSize;
	/**
	 * The variant of the Avatar.
	 *
	 * @default 'circle'
	 */
	variant?: AvatarVariant;
	/**
	 * The color of the Avatar.
	 *
	 * @default 'primary'
	 */
	color?: AvatarColor;
	/**
	 * Determines if the Avatar should have rounded edges.
	 *
	 * @default false
	 */
	rounded?: boolean;
	/**
	 * The content of the Avatar.
	 *
	 * @default undefined
	 */
	children?: string;
	/**
	 * The image source of the Avatar. If not provided, a pattern with text will be used.
	 *
	 * @default undefined
	 */
	src?: string;
	sx?: ThemeUICSSObject;
}

/**
 * Avatars are used to represent a user or entity.
 * They can be used to display a user's profile picture, initials or icon.
 *
 * @example
 * <Avatar color="success" size="large" variant="circle">
 * 	AB
 * </Avatar>
 */
export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
	(
		{
			id,
			className,
			src,
			color = 'primary',
			size = 'medium',
			variant = 'circle',
			rounded = false,
			children,
			sx,
			...rest
		},
		ref,
	) => {
		return (
			<Sc.Avatar
				id={id}
				sx={sx}
				ref={ref}
				$src={src}
				$color={color}
				$size={size}
				$rounded={rounded}
				$variant={variant}
				className={classNames('avatar-root', className, commonClassNames)}
				aria-label={children}
				{...rest}
			>
				<span>{children}</span>
			</Sc.Avatar>
		);
	},
);

Avatar.displayName = 'Avatar';
